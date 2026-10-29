import { type RefObject, useEffect, useState } from "react";

export const reduzMovimento = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Rola suavemente até a seção (instantâneo com "reduzir movimento"). */
export function rolarPara(id: string, atrasoMs = 0) {
  const ir = () => document.getElementById(id)?.scrollIntoView({ behavior: reduzMovimento() ? "auto" : "smooth", block: "start" });
  if (atrasoMs > 0) window.setTimeout(ir, atrasoMs);
  else ir();
}

/**
 * Índice (data-indice) da seção que cruza a linha de 45% da altura da tela.
 * Lido na rolagem (um quadro por vez), então não depende da ordem dos eventos de interseção.
 */
export function useSecaoVisivel(dependencia: unknown): number {
  const [visivel, setVisivel] = useState(0);
  useEffect(() => {
    let raf = 0;
    const medir = () => {
      raf = 0;
      const linha = window.innerHeight * 0.45;
      for (const el of document.querySelectorAll<HTMLElement>("[data-indice]")) {
        const r = el.getBoundingClientRect();
        if (r.top <= linha && r.bottom > linha) {
          setVisivel(Number(el.dataset.indice));
          return;
        }
      }
    };
    const agendar = () => { if (!raf) raf = requestAnimationFrame(medir); };
    medir();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, [dependencia]);
  return visivel;
}

/**
 * true enquanto o elemento está perto da tela (para montar coisa pesada só quando precisa).
 * Desmonta ao se afastar: no máximo um robô 3D (WebGL) vivo por vez.
 */
export function usePerto<T extends Element>(ref: RefObject<T | null>, margem = "600px"): boolean {
  const [perto, setPerto] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((en) => setPerto(en.some((x) => x.isIntersecting)), { rootMargin: margem });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, margem]);
  return perto;
}
