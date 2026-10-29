/** localStorage pode lançar erro (Safari privado, dados do site bloqueados, cota cheia). Aqui nunca lança: cai para a memória. */
const memoria = new Map<string, string>();
/** Chaves cujo último valor só existe na memória (o setItem falhou): elas ganham do disco. */
const soNaMemoria = new Set<string>();

function disco(): Pick<Storage, "getItem" | "setItem"> | null {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

export function ler(chave: string): string | null {
  if (soNaMemoria.has(chave)) return memoria.get(chave) ?? null;
  try {
    const v = disco()?.getItem(chave) ?? null;
    if (v !== null) return v;
  } catch {
    /* usa a memória */
  }
  return memoria.get(chave) ?? null;
}

export function gravar(chave: string, valor: string): void {
  memoria.set(chave, valor);
  try {
    const d = disco();
    if (!d) throw new Error("sem armazenamento");
    d.setItem(chave, valor);
    soNaMemoria.delete(chave);
  } catch {
    soNaMemoria.add(chave);
  }
}

export function armazenamentoSeguro(): Pick<Storage, "getItem" | "setItem"> {
  return { getItem: ler, setItem: gravar };
}
