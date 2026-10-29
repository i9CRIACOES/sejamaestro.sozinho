<?php
declare(strict_types=1);
require __DIR__ . '/../server/assessment-core.php';
$checks = 0;
function verificar(bool $ok): void { global $checks; if (!$ok) throw new RuntimeException('Falha ' . ($checks + 1)); $checks++; }
$base = ['nome'=>'Teste Local', 'email'=>'teste@example.invalid', 'cel'=>'', 'empresa'=>'Teste', 'setor'=>'Varejo', 'receita'=>2500, 'modulos'=>array_fill(0,5,['respostas'=>[5,5,5,5]])];
$r = validarAssessment($base + ['valorEmRiscoAno'=>1, 'maiorDor'=>'Falso']);
verificar($r['maturidadeGeral'] == 5 && $r['maiorDor'] === 'Flow');
verificar($r['valorEmRiscoAno'] === 437500000 && $r['valorEmRiscoPct'] === 18);
$alta = $base; $alta['receita'] = 5000;
verificar(validarAssessment($alta)['valorEmRiscoAno'] === 875000000);
foreach ([0=>750000000,10=>125000000] as $nota=>$valor) {
    $v = $base; $v['modulos'] = array_fill(0,5,['respostas'=>array_fill(0,4,$nota)]);
    verificar(validarAssessment($v)['valorEmRiscoAno'] === $valor);
}
foreach (['email'=>'errado', 'receita'=>350, 'setor'=>'Outro', 'modulos'=>[['respostas'=>[11,5,5,5]]]] as $k=>$valor) {
    $v = $base; $v[$k] = $valor;
    try { validarAssessment($v); verificar(false); } catch (InvalidArgumentException $e) { verificar(true); }
}
$dir = sys_get_temp_dir() . '/maestro-test-' . bin2hex(random_bytes(8));
mkdir($dir,0700);
try {
    for ($i=0;$i<6;$i++) verificar(limitarAssessment($dir,'local',10000));
    verificar(!limitarAssessment($dir,'local',10000));
    verificar(limitarAssessment($dir,'local',13601));
} finally { foreach (glob($dir.'/*') as $f) unlink($f); rmdir($dir); }
echo "$checks verificações PHP passaram.\n";

$uuid = uuidAssessment();
verificar((bool)preg_match('/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/D', $uuid));
$linha = linhaAssessment($r, $uuid, 'sejamaestro');
verificar($linha['QUESTIONARIO'] === 'sejamaestro' && $linha['Flow'] === 5 && $linha['Valor em risco/ano'] === 437500000);
verificar(json_decode($linha['Respostas Maestro'], true)['CX'] === [5,5,5,5]);
