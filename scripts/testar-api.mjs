import { createServer } from 'node:http';
import net from 'node:net';
import { spawn } from 'node:child_process';
import { chmodSync, existsSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import path from 'node:path';
import { tmpdir } from 'node:os';
import assert from 'node:assert/strict';

let mensagem = '';
const smtp = net.createServer(socket => {
  socket.write('220 localhost SMTP ready\r\n');
  let buffer = '', data = false;
  socket.on('data', chunk => {
    buffer += chunk.toString();
    while (buffer.includes('\r\n')) {
      const pos = buffer.indexOf('\r\n');
      const linha = buffer.slice(0, pos); buffer = buffer.slice(pos + 2);
      if (data) {
        if (linha === '.') { data = false; socket.write('250 queued\r\n'); }
        else mensagem += linha + '\n';
      } else if (/^DATA/i.test(linha)) { data = true; socket.write('354 continue\r\n'); }
      else if (/^QUIT/i.test(linha)) { socket.end('221 bye\r\n'); }
      else socket.write('250 OK\r\n');
    }
  });
});
await new Promise(resolve => smtp.listen(1026, '127.0.0.1', resolve));
const linhas = [];
const planilha = createServer(async (req,res) => { let body=''; for await (const chunk of req) body+=chunk; linhas.push(JSON.parse(body)); res.writeHead(200,{'Content-Type':'application/json'}); res.end(JSON.stringify({ok:true})); });
await new Promise(resolve=>planilha.listen(4186,'127.0.0.1',resolve));
const privado = mkdtempSync(path.join(tmpdir(), 'sejamaestro-individual-'));
writeFileSync(path.join(privado, 'config.php'), "<?php return ['habilitado'=>true,'url'=>'http://127.0.0.1:4184','remetente'=>'teste@example.invalid'];");
const caixa = path.join(privado, 'mensagem.txt');
const sendmail = path.join(privado, 'sendmail.mjs');
if (process.platform !== 'win32') {
  writeFileSync(sendmail, `#!/usr/bin/env node\nimport { writeFileSync } from 'node:fs';\nlet s=''; for await (const c of process.stdin) s+=c; writeFileSync(${JSON.stringify(path.join(privado, 'mensagem.txt'))},s);\n`);
  chmodSync(sendmail,0o700);
}
const php = process.env.PHP_BINARY || 'php';
const mailArgs = process.platform === 'win32' ? ['-d', 'SMTP=127.0.0.1', '-d', 'smtp_port=1026'] : ['-d', `sendmail_path=${sendmail}`];
const servidor = spawn(php, [...mailArgs, '-S', '127.0.0.1:4184', '-t', 'dist'], { env: { ...process.env, MAESTRO_SHEET_WEBHOOK:'http://127.0.0.1:4186', SEJAMAESTRO_INDIVIDUAL_PRIVATE_DIR: privado }, stdio: ['ignore', 'ignore', 'pipe'] });
let falhas = ''; servidor.stderr.on('data', d => { falhas += d; });
const base = 'http://127.0.0.1:4184/api/assessment.php';
try {
  for (let i=0; i<30; i++) { try { await fetch(base); break; } catch { await new Promise(r=>setTimeout(r,100)); } }
  const dados = {nome:'Teste Local',email:'teste@example.invalid',cel:'',empresa:'Teste',setor:'Varejo',receita:5000,modulos:Array.from({length:5},()=>({respostas:[5,5,5,5]}))};
  const enviar = (v, origem='http://127.0.0.1:4184') => fetch(base,{method:'POST',headers:{'Content-Type':'application/json',Origin:origem},body:JSON.stringify(v)});
  assert.equal((await enviar(dados,'https://outro.example')).status,403);
  assert.equal((await enviar({...dados,email:'invalido'})).status,422);
  const pedido = await enviar(dados);
  assert.equal(pedido.status,202,await pedido.clone().text());
  assert.deepEqual(await pedido.json(),{ok:true});
  if (existsSync(caixa)) mensagem = readFileSync(caixa,'utf8');
  const token = mensagem.match(/#resultado=([a-f0-9]{64})/)?.[1];
  assert.ok(token,'e-mail local deve conter link pessoal');
  assert.equal((await fetch(base+'?acao=resultado')).status,404);
  const resposta = await fetch(base+'?acao=resultado',{headers:{'X-Resultado-Token':token}});
  assert.equal(resposta.status,200);
  const salvo = await resposta.json();
  assert.equal(salvo.dados.receita,5000);
  assert.equal(salvo.dados.valorEmRiscoAno,875000000);
  assert.equal(salvo.dados.email,undefined);
  assert.equal(salvo.dados.cel,undefined);
  assert.match(resposta.headers.get('cache-control'),/no-store/);
  const arquivo = await fetch('http://127.0.0.1:4184/.sejamaestro-individual/resultados/'+token+'.json');
  assert.equal((await arquivo.text()).includes('teste@example.invalid'),false);
  assert.equal(linhas[0].linha.QUESTIONARIO,'sejamaestroindividual');
  assert.deepEqual(JSON.parse(linhas[0].linha['Respostas Maestro']).Flow,[5,5,5,5]);
  console.log('PASS: validação, e-mail local, link pessoal, dados privados e recálculo.');
} catch (e) { console.error(falhas); throw e; }
finally { servidor.kill(); planilha.close(); smtp.close(); rmSync(privado,{recursive:true,force:true}); }
