<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, private');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
function responderIndividual(int $status, array $dados): void { http_response_code($status); echo json_encode($dados, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR); exit; }
try {
    umask(0077);
    $privado = getenv('SEJAMAESTRO_INDIVIDUAL_PRIVATE_DIR') ?: dirname(__DIR__, 2) . '/.sejamaestro-individual';
    $config = is_file($privado . '/config.php') ? require $privado . '/config.php' : [];
    if (!is_array($config) || !($config['habilitado'] ?? false)) responderIndividual(503, ['erro' => 'O envio está temporariamente indisponível.']);
    $base = rtrim($config['url'] ?? 'https://sejamaestroindividual.aodigital.net.br', '/');
    $dir = $privado . '/resultados';
    if (!is_dir($dir) && !mkdir($dir, 0700, true) && !is_dir($dir)) throw new RuntimeException('storage');
    $agora = time();
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && ($_GET['acao'] ?? '') === 'resultado') {
        $token = $_SERVER['HTTP_X_RESULTADO_TOKEN'] ?? '';
        if (!preg_match('/^[a-f0-9]{64}$/D', $token)) responderIndividual(404, ['erro' => 'Link inválido ou expirado.']);
        $arquivo = $dir . '/' . hash('sha256', $token) . '.json';
        if (!is_file($arquivo)) responderIndividual(404, ['erro' => 'Link inválido ou expirado.']);
        $salvo = json_decode(file_get_contents($arquivo), true, 32, JSON_THROW_ON_ERROR);
        if (!is_array($salvo) || !($salvo['enviado'] ?? false) || ($salvo['expira'] ?? 0) < $agora) responderIndividual(404, ['erro' => 'Link inválido ou expirado.']);
        $dados = $salvo['dados'];
        unset($dados['email'], $dados['cel']);
        responderIndividual(200, ['ok' => true, 'id' => $salvo['id'], 'dados' => $dados]);
    }
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') responderIndividual(405, ['erro' => 'Método não permitido.']);
    if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] !== $base) responderIndividual(403, ['erro' => 'Origem não permitida.']);
    if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) responderIndividual(415, ['erro' => 'Formato inválido.']);
    $raw = file_get_contents('php://input', false, null, 0, 16385);
    if (strlen($raw) > 16384) responderIndividual(413, ['erro' => 'Solicitação muito grande.']);
    $v = json_decode($raw, true, 32, JSON_THROW_ON_ERROR);
    if (!is_array($v)) responderIndividual(400, ['erro' => 'Dados inválidos.']);
    require __DIR__ . '/assessment-core.php';
    $dados = validarAssessment($v);
    if (!empty($v['isca'])) responderIndividual(202, ['ok' => true]);
    if (!limitarAssessment($dir, $_SERVER['REMOTE_ADDR'] ?? '', $agora)) responderIndividual(429, ['erro' => 'Aguarde alguns minutos antes de solicitar outro acesso.']);
    $from = $config['remetente'] ?? '';
    if (!filter_var($from, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $from)) throw new RuntimeException('sender');
    $token = bin2hex(random_bytes(32));
    $id = uuidAssessment();
    $arquivo = $dir . '/' . hash('sha256', $token) . '.json';
    $registro = ['id' => $id, 'dados' => $dados + ['receita' => $v['receita']], 'expira' => $agora + 7 * 86400, 'enviado' => false];
    if (file_put_contents($arquivo, json_encode($registro, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE), LOCK_EX) === false) throw new RuntimeException('storage');
    gravarPlanilhaAssessment($dados, $id, 'sejamaestroindividual');
    $url = $base . '/#resultado=' . $token;
    $mensagem = "Olá!\n\nSeu diagnóstico Seja Maestro está pronto. Acesse seus resultados pelo link pessoal abaixo:\n\n" . $url . "\n\nEste acesso vale por sete dias. Não compartilhe o link.\nSe você não respondeu ao questionário, ignore esta mensagem.\n\nEquipe Maestro";
    $headers = ['From' => $from, 'MIME-Version' => '1.0', 'Content-Type' => 'text/plain; charset=UTF-8', 'Content-Transfer-Encoding' => '8bit'];
    if (!mail($dados['email'], '=?UTF-8?B?' . base64_encode('Seu diagnóstico Seja Maestro está pronto') . '?=', $mensagem, $headers)) throw new RuntimeException('mail');
    $registro['enviado'] = true;
    if (file_put_contents($arquivo, json_encode($registro, JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE), LOCK_EX) === false) throw new RuntimeException('storage activation');
    responderIndividual(202, ['ok' => true]);
} catch (InvalidArgumentException $e) { responderIndividual(422, ['erro' => $e->getMessage()]); }
catch (JsonException $e) { responderIndividual(400, ['erro' => 'Dados inválidos.']); }
catch (Throwable $e) { error_log('Seja Maestro Individual: ' . get_class($e)); responderIndividual(503, ['erro' => 'Não conseguimos enviar seu acesso agora. Tente novamente.']); }
