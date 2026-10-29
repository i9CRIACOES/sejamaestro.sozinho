<?php
declare(strict_types=1);
function validarAssessment(array $v): array {
    $campos = [];
    foreach (['nome' => 120, 'email' => 254, 'cel' => 120, 'empresa' => 120, 'setor' => 120] as $k => $max) {
        if (!isset($v[$k]) || !is_string($v[$k]) || strlen($v[$k]) > $max * 4) throw new InvalidArgumentException('Confira os dados de contato.');
        $campos[$k] = trim($v[$k]);
    }
    if ($campos['nome'] === '' || !filter_var($campos['email'], FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $campos['email'])) throw new InvalidArgumentException('Preencha nome e e-mail válidos.');
    $setores = ['Varejo', 'E-commerce / DTC', 'Financeiro', 'Educação', 'Viagens / Aéreas', 'Mobilidade / Auto', 'Telecom', 'Franquias'];
    $receitas = [300 => 'R$ 200M – 500M', 750 => 'R$ 500M – 1 BI', 2500 => 'R$ 1 BI – 4 BI', 5000 => 'Acima de R$ 4 BI'];
    if (!in_array($campos['setor'], $setores, true) || !is_int($v['receita'] ?? null) || !isset($receitas[$v['receita']])) throw new InvalidArgumentException('Selecione setor e receita válidos.');
    $nomes = ['Flow', 'Insights', 'Teams', 'Composer', 'CX'];
    if (!is_array($v['modulos'] ?? null) || array_keys($v['modulos']) !== [0, 1, 2, 3, 4]) throw new InvalidArgumentException('Confira as notas dos cinco módulos.');
    $modulos = []; $notas = [];
    foreach ($nomes as $i => $nome) {
        $respostas = $v['modulos'][$i]['respostas'] ?? null;
        if (!is_array($respostas) || array_keys($respostas) !== [0, 1, 2, 3]) throw new InvalidArgumentException('Confira as quatro notas de cada módulo.');
        foreach ($respostas as $n) if (!is_int($n) || $n < 0 || $n > 10) throw new InvalidArgumentException('As notas devem estar entre 0 e 10.');
        $nota = array_sum($respostas) / 4;
        $notas[] = $nota;
        $modulos[] = ['modulo' => $nome, 'nota' => $nota, 'respostas' => $respostas];
    }
    $geral = array_sum($notas) / 5;
    $pior = array_search(min($notas), $notas, true);
    $pct = .05 + ((10 - $geral) / 10) * .25;
    return $campos + ['faixaReceita' => $receitas[$v['receita']], 'maturidadeGeral' => round($geral, 2), 'banda' => $geral >= 7 ? 'Pronto para escalar Inteligência com IA' : ($geral >= 3 ? 'Peças prontas, orquestração insuficiente' : 'Fundação em construção'), 'maiorDor' => $nomes[$pior], 'maiorDorNota' => $notas[$pior], 'valorEmRiscoAno' => (int) round($v['receita'] * 1e6 * $pct), 'valorEmRiscoPct' => (int) round($pct * 100), 'modulos' => $modulos, 'criadoEm' => gmdate('c')];
}
function limitarAssessment(string $dir, string $ip, int $agora): bool {
    $f = fopen($dir . '/limite-' . hash('sha256', $ip) . '.json', 'c+');
    if (!$f || !flock($f, LOCK_EX)) throw new RuntimeException('storage');
    try {
        $a = json_decode(stream_get_contents($f) ?: '[]', true);
        $a = array_values(array_filter(is_array($a) ? $a : [], fn($t) => is_int($t) && $t > $agora - 3600));
        if (count($a) >= 6) return false;
        $a[] = $agora; ftruncate($f, 0); rewind($f);
        if (fwrite($f, json_encode($a)) === false) throw new RuntimeException('storage');
        return true;
    } finally { flock($f, LOCK_UN); fclose($f); }
}

function uuidAssessment(): string {
    $b = random_bytes(16); $b[6] = chr((ord($b[6]) & 15) | 64); $b[8] = chr((ord($b[8]) & 63) | 128);
    $h = bin2hex($b); return substr($h,0,8).'-'.substr($h,8,4).'-'.substr($h,12,4).'-'.substr($h,16,4).'-'.substr($h,20);
}
function linhaAssessment(array $d, string $id, string $origem): array {
    $r = ['ID'=>$id, 'QUESTIONARIO'=>$origem, 'Nome'=>$d['nome'], 'E-mail'=>$d['email'], 'WhatsApp'=>$d['cel'], 'Empresa'=>$d['empresa'], 'Setor'=>$d['setor'], 'Faturamento'=>$d['faixaReceita'], 'Maturidade geral'=>$d['maturidadeGeral'], 'Maior dor'=>$d['maiorDor'], 'Nota maior dor'=>$d['maiorDorNota'], 'Valor em risco/ano'=>$d['valorEmRiscoAno'], 'Risco (%)'=>$d['valorEmRiscoPct'], 'Veredicto'=>$d['banda']];
    $respostas = [];
    foreach ($d['modulos'] as $m) { $r[$m['modulo']] = $m['nota']; $respostas[$m['modulo']] = $m['respostas']; }
    $r['Respostas Maestro'] = json_encode($respostas, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
    return $r;
}
function gravarPlanilhaAssessment(array $d, string $id, string $origem): void {
    if (!function_exists('curl_init')) throw new RuntimeException('sheet unavailable');
    $c = curl_init(getenv('MAESTRO_SHEET_WEBHOOK') ?: 'https://n8n.i9criacoes.com.br/webhook/vc-sabia-maestro');
    curl_setopt_array($c, [CURLOPT_POST=>true, CURLOPT_POSTFIELDS=>json_encode(['evento'=>'desbloqueio','linha'=>linhaAssessment($d,$id,$origem)], JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR), CURLOPT_HTTPHEADER=>['Content-Type: application/json'], CURLOPT_RETURNTRANSFER=>true, CURLOPT_TIMEOUT=>15, CURLOPT_CONNECTTIMEOUT=>4]);
    $body = curl_exec($c); $status = (int) curl_getinfo($c, CURLINFO_HTTP_CODE); curl_close($c);
    if ($body === false || $status < 200 || $status >= 300) throw new RuntimeException('sheet delivery');
}
