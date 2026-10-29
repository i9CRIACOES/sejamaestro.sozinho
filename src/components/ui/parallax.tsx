import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Camada de parallax ligada à rolagem (mesma ideia do parallax-scrolling do 21st, sem Lenis:
 * a rolagem nativa continua dona da página, o que mantém Voltar/Próximo e o mapa de passos certos).
 * `distancia` em px: positivo sobe mais rápido que a página; negativo fica para trás (efeito de fundo).
 */
export function Parallax({ children, distancia = 60, eixo = "y", className }: {
  children: ReactNode; distancia?: number; eixo?: "x" | "y"; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduz = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const v = useTransform(scrollYProgress, [0, 1], [distancia, -distancia]);
  return (
    <motion.div ref={ref} className={className} style={reduz ? undefined : eixo === "y" ? { y: v } : { x: v }}>
      {children}
    </motion.div>
  );
}

/** Número/palavra gigante preenchido (degradê suave) no fundo de uma seção, com parallax lento. */
export function TextoGigante({ texto, className, distancia = -140 }: { texto: string; className?: string; distancia?: number }) {
  return (
    <Parallax distancia={distancia} className={className}>
      <span
        aria-hidden
        style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text' }}
        className="block select-none font-black leading-[0.8] tracking-tighter text-transparent [background:linear-gradient(180deg,oklch(0.82_0.15_210/0.16)_0%,oklch(0.62_0.2_300/0.08)_55%,transparent_90%)] [-webkit-background-clip:text] [background-clip:text]"
      >
        {texto}
      </span>
    </Parallax>
  );
}
