import { MODULOS, RECEITAS } from './data';
export function status(nota: number) {
  return nota >= 7 ? { nivel: 'ok', texto: 'Sob controle', banda: 'Pronto para escalar Inteligência com IA' } as const
    : nota >= 3 ? { nivel: 'warn', texto: 'Orquestração insuficiente', banda: 'Peças prontas, orquestração insuficiente' } as const
    : { nivel: 'err', texto: 'Fundação em construção', banda: 'Fundação em construção' } as const;
}
export function calcularAssessment(respostas: number[][], receita: number) {
  if (respostas.length !== 5 || respostas.some(a => a.length !== 4 || a.some(v => !Number.isInteger(v) || v < 0 || v > 10))) throw new Error('São necessárias 20 notas entre 0 e 10.');
  if (!RECEITAS.some(r => r.valor === receita)) throw new Error('Faixa de receita inválida.');
  const notas = respostas.map(a => a.reduce((s, v) => s + v, 0) / 4);
  const geral = notas.reduce((s, v) => s + v, 0) / 5;
  let pior = 0;
  notas.forEach((n, i) => { if (n < notas[pior]) pior = i; });
  const pct = 0.05 + ((10 - geral) / 10) * 0.25;
  const ordem = { err: 0, warn: 1, ok: 2 };
  return { notas, geral, pior, modulo: MODULOS[pior], receita, pct, riscoAno: receita * 1e6 * pct, gargalo: ordem[status(notas[pior]).nivel] < ordem[status(geral).nivel] };
}
export function moeda(v: number) {
  if (v >= 1e9) return 'R$ ' + (v / 1e9).toFixed(1).replace('.', ',') + ' BI';
  if (v >= 1e6) return 'R$ ' + Math.round(v / 1e6) + ' M';
  return 'R$ ' + Math.round(v).toLocaleString('pt-BR');
}
export interface ContatoAssessment { nome: string; cel: string; email: string; empresa: string; setor: string }
export function payloadDiagnostico(contato: ContatoAssessment, respostas: number[][], receita: number) {
  const r = calcularAssessment(respostas, receita);
  return { ...contato, faixaReceita: RECEITAS.find(f => f.valor === receita)!.rotulo, receita,
    maturidadeGeral: +r.geral.toFixed(2), banda: status(r.geral).banda, maiorDor: r.modulo.nome,
    maiorDorNota: +r.notas[r.pior].toFixed(2), valorEmRiscoAno: Math.round(r.riscoAno), valorEmRiscoPct: +(r.pct * 100).toFixed(0),
    modulos: MODULOS.map((m, i) => ({ modulo: m.nome, nota: +r.notas[i].toFixed(2), respostas: respostas[i].slice() })), criadoEm: new Date().toISOString() };
}
export type Payload = ReturnType<typeof payloadDiagnostico>;
export function resumoTexto(p: Payload) {
  return `Maestro Assessment — ${p.empresa || '(sem empresa)'}\nContato: ${p.nome} · ${p.cel || '—'} · ${p.email}\nSetor: ${p.setor} · Receita: ${p.faixaReceita}\nMaturidade geral: ${p.maturidadeGeral}/10 — ${p.banda}\nMAIOR DOR: Maestro ${p.maiorDor} (${p.maiorDorNota}/10)\nValor estimado em risco: R$ ${p.valorEmRiscoAno.toLocaleString('pt-BR')}/ano (~${p.valorEmRiscoPct}%)\nNotas por módulo: ${p.modulos.map(m => m.modulo + ' ' + m.nota).join(' · ')}\nEnviado em: ${p.criadoEm}`;
}
export function linkEmail(p: Payload) {
  return 'mailto:elcio@aodigital.com.br?subject=' + encodeURIComponent(`Maestro Assessment — ${p.empresa || p.nome || 'novo diagnóstico'}`) + '&body=' + encodeURIComponent(resumoTexto(p));
}
