import { useEffect, type RefObject } from "react";

/** Mesma curva e duração da contagem do site do Arsenal de Skills. */
export const CONTAGEM_MS = 2200;
export const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

/** HyperText (igual ao Arsenal): ao passar o mouse ou tocar num número em destaque,
 *  os dígitos embaralham e voltam. Mexe só no nodeValue; o React continua dono dos nós. */
export function useHiperNumeros(rootRef: RefObject<HTMLElement | null>, seletor = ".num-hiper") {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rodando = new WeakSet<HTMLElement>();
    const aoPassar = (event: Event) => {
      const el = (event.target as HTMLElement | null)?.closest<HTMLElement>(seletor);
      if (!el || rodando.has(el) || !root.contains(el) || !/\d/.test(el.textContent ?? "")) return;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      const nos: { node: Text; original: string; ultimo: string }[] = [];
      for (let n = walker.nextNode(); n; n = walker.nextNode()) nos.push({ node: n as Text, original: n.nodeValue ?? "", ultimo: n.nodeValue ?? "" });
      rodando.add(el);
      const inicio = performance.now();
      const passo = (agora: number) => {
        const p = Math.min(1, (agora - inicio) / 650);
        for (const t of nos) {
          if (t.node.nodeValue !== t.ultimo) continue; // o React atualizou: não mexe mais
          if (p >= 1) { t.node.nodeValue = t.original; t.ultimo = t.original; continue; }
          const fixos = Math.floor(p * t.original.length);
          const v = Array.from(t.original).map((ch, i) => (i < fixos || !/\d/.test(ch) ? ch : String(Math.floor(Math.random() * 10)))).join("");
          t.node.nodeValue = v; t.ultimo = v;
        }
        if (p < 1) requestAnimationFrame(passo);
        else rodando.delete(el);
      };
      requestAnimationFrame(passo);
    };
    root.addEventListener("pointerover", aoPassar);
    return () => root.removeEventListener("pointerover", aoPassar);
  }, [rootRef, seletor]);
}
