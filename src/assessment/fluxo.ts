export const TOTAL_ESTACOES = 6;
/** Default scores can be retained, but each station must be explicitly confirmed. */
export function podeEntrar(ligada: boolean, feitas: boolean[], indice: number): boolean {
  return ligada && indice >= 0 && indice < TOTAL_ESTACOES && (indice === 0 || feitas.slice(0, indice).every(Boolean));
}
