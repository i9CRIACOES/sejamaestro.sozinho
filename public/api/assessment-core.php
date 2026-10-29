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
