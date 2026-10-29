export const BPM = 96;
export const SEMICOLCHEIA = 60 / BPM / 4; // segundos

/** Am9 → Fmaj7 → Cmaj7 → G6, em números MIDI (oitava do pad). */
export const ACORDES: number[][] = [
  [57, 60, 64, 67, 71],
  [53, 57, 60, 64],
  [48, 52, 55, 59],
  [55, 59, 62, 64],
];

/** Volume de cada camada: 0 pad · 1 baixo · 2 arpejo · 3 brilho. */
export const VOLUME_CAMADA = [0.35, 0.3, 0.16, 0.08];

export const ARPEJO = [0, 2, 1, 3, 2, 4, 3, 1];

export function midiParaHz(m: number): number {
  return 440 * 2 ** ((m - 69) / 12);
}

export function acordeDoPasso(passo: number): number[] {
  return ACORDES[Math.floor(passo / 32) % ACORDES.length];
}
