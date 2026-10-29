import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Palavra em destaque que troca sozinha: uma de cada vez (sai antes da próxima entrar),
 * em ciano, grande, saindo para cima com desfoque.
 */
export function PalavraGirando({ palavras, intervalo = 2200, className }: { palavras: string[]; intervalo?: number; className?: string }) {
  const [i, setI] = useState(0);
  const reduz = useReducedMotion();
  useEffect(() => {
    if (reduz) return;
    const id = setTimeout(() => setI((atual) => (atual + 1) % palavras.length), intervalo);
    return () => clearTimeout(id);
  }, [i, palavras.length, intervalo, reduz]);

  return (
    <motion.span
      layout
      transition={{ layout: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } }}
      className={cn("relative inline-flex overflow-hidden py-1 align-middle text-ciano", className)}
    >
      <span className="sr-only">{palavras.join(", ")}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={palavras[i]}
          aria-hidden
          className="block whitespace-nowrap font-black"
          initial={{ opacity: 0, y: "60%", filter: "blur(6px)" }}
          animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-60%", filter: "blur(6px)" }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
        >
          {palavras[i]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
