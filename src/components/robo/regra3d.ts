export interface InfoAparelho {
  reduzirMovimento: boolean;
  economia: boolean;
  conexao?: string;
  memoria?: number;
  largura: number;
}

export function podeCarregar3D(i: InfoAparelho): boolean {
  if (i.reduzirMovimento || i.economia) return false;
  // Celular sempre recebe a imagem: o iOS não expõe deviceMemory/connection, então os testes abaixo nunca barrariam.
  if (i.largura < 768) return false;
  if (i.conexao && /2g|^3g$/.test(i.conexao)) return false;
  if (i.memoria !== undefined && i.memoria < 4) return false;
  return true;
}

export function infoDoNavegador(): InfoAparelho {
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean; effectiveType?: string } };
  return {
    reduzirMovimento: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    economia: !!nav.connection?.saveData,
    conexao: nav.connection?.effectiveType,
    memoria: nav.deviceMemory,
    largura: window.innerWidth,
  };
}
