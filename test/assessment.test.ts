import { describe, expect, it } from 'vitest';
import { calcularAssessment, status, payloadDiagnostico, linkEmail } from '../src/assessment/calc';
const notas = (n: number) => Array.from({ length: 5 }, () => [n, n, n, n]);
describe('fidelidade ao artefato Maestro Assessment', () => {
  it('repete o cenário inicial: média 5, Flow como desempate, 17,5% e R$ 437,5 milhões', () => {
    const r = calcularAssessment(notas(5), 2500);
    expect(r.geral).toBe(5); expect(r.modulo.nome).toBe('Flow'); expect(r.riscoAno).toBe(437500000); expect(r.gargalo).toBe(false);
  });
  it('preserva os limites de 5% a 30% em todas as faixas', () => {
    for (const receita of [300, 750, 2500]) {
      expect(calcularAssessment(notas(10), receita).riscoAno).toBeCloseTo(receita * 1e6 * .05);
      expect(calcularAssessment(notas(0), receita).riscoAno).toBeCloseTo(receita * 1e6 * .30);
    }
  });
  it('recomenda o elo fraco mesmo quando a média mascara o gargalo', () => {
    const v = notas(10); v[2] = [0, 0, 0, 0]; const r = calcularAssessment(v, 750);
    expect(r.modulo.nome).toBe('Teams'); expect(r.geral).toBe(8); expect(r.gargalo).toBe(true);
  });
  it('preserva as fronteiras de maturidade', () => {
    expect(status(2.99).nivel).toBe('err'); expect(status(3).nivel).toBe('warn'); expect(status(6.99).nivel).toBe('warn'); expect(status(7).nivel).toBe('ok');
  });
  it('rejeita notas ou receita fora do domínio', () => {
    expect(() => calcularAssessment([[5]], 2500)).toThrow();
    const v = notas(5); v[0][0] = 11; expect(() => calcularAssessment(v, 2500)).toThrow();
    expect(() => calcularAssessment(notas(5), 999)).toThrow();
  });
  it('mantém as notas no envio e monta o fallback para o destinatário original', () => {
    const p = payloadDiagnostico({ nome: 'Teste', email: 'teste@example.com', empresa: 'A & B', cel: '', setor: 'Varejo' }, notas(5), 300);
    expect(p.modulos).toHaveLength(5); expect(p.valorEmRiscoAno).toBe(52500000); expect(linkEmail(p)).toContain('mailto:elcio@aodigital.com.br?'); expect(decodeURIComponent(linkEmail(p))).toContain('A & B');
  });
});
