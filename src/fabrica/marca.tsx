import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Os "pixels" do símbolo do Maestro (coordenadas do maestro-icon.svg, viewBox 84.88 × 82.27). */
const PIXELS: [number, number, number][] = [
  [0.26, 78.36, 3.73], [9.84, 78.56, 3.73], [0, 62.62, 3.73], [3.18, 50.57, 3.73], [3.05, 37.59, 3.73], [10.58, 30, 3.73],
  [15.16, 21.63, 3.73], [7.5, 17.79, 3.73], [15.67, 78.47, 3.73], [19.22, 74.53, 3.73], [15.21, 70.69, 3.73], [7.04, 54.55, 3.73],
  [11.11, 42.09, 3.73], [15.13, 37.75, 3.73], [15.06, 46.35, 3.73], [10.95, 50.4, 3.73], [19.13, 50.35, 3.73], [15.09, 54.36, 3.73],
  [11.06, 58.57, 3.73], [15.05, 62.62, 3.73], [19, 58.45, 3.73], [11.2, 66.45, 3.73], [11.24, 70.31, 2.44], [13.48, 74.49, 2.44],
  [19.18, 66.69, 3.73],
];
const BARRA_CURTA = { x: 31.58, y: 40.63, w: 14.99, h: 41.08 };
const BARRA_ALTA = { x: 69.89, y: 0, w: 14.99, h: 81.52 };
const FIO = { x: 57.24, y: 11.82, w: 2.1, h: 69.91 };

function Gradientes({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-curta`} x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor="#12d3d2" />
        <stop offset="1" stopColor="#705fa6" />
      </linearGradient>
      <linearGradient id={`${id}-alta`} x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor="#11d8d5" />
        <stop offset="1" stopColor="#9032a8" />
      </linearGradient>
    </defs>
  );
}

/** Símbolo estático (pixels brancos + barras com o degradê da marca). */
export function IconeMaestro({ className, titulo }: { className?: string; titulo?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 84.88 82.27" className={className} role={titulo ? "img" : undefined} aria-label={titulo} aria-hidden={titulo ? undefined : true}>
      <Gradientes id={id} />
      {PIXELS.map(([x, y, w], i) => <rect key={i} x={x} y={y} width={w} height={3.71} fill="#fff" />)}
      <rect {...dim(BARRA_CURTA)} fill={`url(#${id}-curta)`} />
      <rect {...dim(BARRA_ALTA)} fill={`url(#${id}-alta)`} />
      <rect {...dim(FIO)} fill="#fff" />
    </svg>
  );
}

const dim = (b: { x: number; y: number; w: number; h: number }) => ({ x: b.x, y: b.y, width: b.w, height: b.h });

// Deslocamento pseudoaleatório fixo para cada pixel (o logo se monta sempre do mesmo jeito).
const origem = (i: number) => ({ x: Math.sin(i * 12.9898) * 60, y: -40 - ((i * 37) % 70), r: ((i * 53) % 180) - 90 });
const EASE = [0.23, 1, 0.32, 1] as const;

/**
 * Logo do Maestro que se monta peça por peça: os pixels caem no lugar, as barras sobem
 * e a assinatura "maestro.com.ai" desliza para dentro. viewBox = o mesmo do maestro-wordmark.svg.
 */
export function LogoMontado({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const reduz = useReducedMotion();
  const fimPixels = PIXELS.length * 0.03 + 0.5;
  const barra = (b: typeof BARRA_ALTA, fill: string, atraso: number) => (
    <motion.rect
      {...dim(b)}
      fill={fill}
      style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      variants={{ oculto: { scaleY: 0, opacity: 0 }, visivel: { scaleY: 1, opacity: 1, transition: { duration: 0.6, delay: atraso, ease: EASE } } }}
    />
  );
  return (
    <motion.svg
      viewBox="28 14 342 104"
      className={cn("overflow-visible", className)}
      role="img"
      aria-label="Maestro"
      initial={reduz ? "visivel" : "oculto"}
      whileInView="visivel"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Gradientes id={id} />
      <clipPath id={`${id}-texto`}><rect x="120" y="0" width="260" height="149" /></clipPath>
      <g transform="translate(31.38 33.36)">
        {PIXELS.map(([x, y, w], i) => {
          const o = origem(i);
          return (
            <motion.rect
              key={i}
              x={x} y={y} width={w} height={3.71} fill="#fff"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              variants={{
                oculto: { opacity: 0, x: o.x, y: o.y, rotate: o.r },
                visivel: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.55, delay: 0.15 + i * 0.03, ease: EASE } },
              }}
            />
          );
        })}
        {barra(BARRA_CURTA, `url(#${id}-curta)`, fimPixels)}
        {barra(FIO, "#fff", fimPixels + 0.12)}
        {barra(BARRA_ALTA, `url(#${id}-alta)`, fimPixels + 0.24)}
      </g>
      <motion.g
        clipPath={`url(#${id}-texto)`}
        variants={{ oculto: { opacity: 0, x: -24 }, visivel: { opacity: 1, x: 0, transition: { duration: 0.7, delay: fimPixels + 0.45, ease: EASE } } }}
      >
        <image href="/maestro-wordmark.svg" x="0" y="0" width="369.23" height="149" />
      </motion.g>
    </motion.svg>
  );
}
