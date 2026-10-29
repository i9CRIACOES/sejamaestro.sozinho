import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";
import { CONTAGEM_MS, easeOutCubic } from "@/lib/hiperNumeros";

/** Identidade de movimento do painel (personalidade "corporate", sem overshoot exceto no carimbo). */
export const EASE = [0.23, 1, 0.32, 1] as const;
export const DUR = { rapido: 0.18, padrao: 0.5, grafico: 0.9 } as const;

/** Paleta dos gráficos, validada pela skill dataviz contra a superfície navy (banda L 0.48–0.67, CVD ΔE 16). */
export const SERIE = { s1: "#00a8c7", s2: "#8851eb", neutra: "#7a869f" } as const;

export function useReduz(): boolean {
  return useReducedMotion() ?? false;
}

export function transicao(reduz: boolean, delay = 0, duracao: number = DUR.grafico) {
  return reduz ? { duration: 0 } : { duration: duracao, ease: EASE, delay };
}

/** Dispara uma vez quando o elemento entra na tela (com reduzir movimento, já nasce visto). */
export function useVisto(ref: RefObject<Element | null>) {
  const reduz = useReduz();
  const visto = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  return reduz || visto;
}

/** Largura real do contêiner, para desenhar o SVG em pixels (barras com espessura exata). */
export function useLargura(ref: RefObject<HTMLElement | null>, inicial = 320) {
  const [w, setW] = useState(inicial);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setW(el.clientWidth || inicial);
    const ro = new ResizeObserver(([e]) => setW(Math.round(e.contentRect.width) || inicial));
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, inicial]);
  return w;
}

/** Número que conta até `valor`; quando o valor muda, anima do número atual até o novo. */
export function useNumero(valor: number, ativo = true) {
  const reduz = useReduz();
  const [atual, setAtual] = useState(reduz ? valor : 0);
  const exibido = useRef(reduz ? valor : 0);
  const primeira = useRef(true);
  useEffect(() => {
    if (!ativo) return;
    if (reduz || !isFinite(valor)) {
      exibido.current = valor;
      setAtual(valor);
      return;
    }
    const ctl = animate(exibido.current, valor, {
      duration: primeira.current ? CONTAGEM_MS / 1000 : 0.6,
      ease: primeira.current ? easeOutCubic : EASE,
      onUpdate: (v) => {
        exibido.current = v;
        setAtual(v);
      },
    });
    primeira.current = false;
    return () => ctl.stop();
  }, [valor, ativo, reduz]);
  return atual;
}
