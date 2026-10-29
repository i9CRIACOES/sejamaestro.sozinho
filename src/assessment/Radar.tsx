import { useId } from 'react';
import { MODULOS } from './data';
import { status } from './calc';
const COR = { ok: 'var(--ok)', warn: 'var(--warn)', err: 'var(--err)' };
export function Radar({ notas }: { notas: number[] }) {
  const id = useId().replace(/:/g, '');
  const pt = (i: number, r: number) => [170 + Math.cos((-90 + i * 72) * Math.PI / 180) * r, 160 + Math.sin((-90 + i * 72) * Math.PI / 180) * r];
  const pontos = (r: number) => notas.map((_, i) => pt(i, r).join(',')).join(' ');
  return <svg viewBox="0 0 340 320" role="img" aria-label={'Radar de maturidade: ' + MODULOS.map((m, i) => `${m.nome} ${notas[i].toFixed(1)} de 10`).join(', ')} className="mx-auto w-full max-w-sm">
    <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--ciano)" stopOpacity=".3" /><stop offset="1" stopColor="var(--violeta)" stopOpacity=".3" /></linearGradient></defs>
    {[.25, .5, .75, 1].map(r => <polygon key={r} points={pontos(r * 105)} fill="none" stroke="var(--border)" />)}
    {MODULOS.map((m, i) => { const [x, y] = pt(i, 105); const [tx, ty] = pt(i, 132); return <g key={m.nome}><line x1="170" y1="160" x2={x} y2={y} stroke="var(--border)" /><text x={tx} y={ty} textAnchor="middle" dominantBaseline="middle" fill="var(--offwhite)" fontSize="12" fontWeight="700">{m.nome}</text></g>; })}
    <polygon points={notas.map((n, i) => pt(i, 105 * n / 10).join(',')).join(' ')} fill={`url(#${id})`} stroke="var(--ciano)" strokeWidth="2" />
    {notas.map((n, i) => { const [x, y] = pt(i, 105 * n / 10); return <circle key={i} cx={x} cy={y} r="4" fill={COR[status(n).nivel]} />; })}
  </svg>;
}
