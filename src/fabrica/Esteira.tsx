import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Ban, Bell, Bot, Boxes, Building2, CalendarDays, Check, CircleDollarSign, Clock, FastForward, Gauge, Hand, Image, Lock, Mail,
  MessageCircle, Puzzle, Trophy, type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** As peças que a fábrica produz, na ordem em que saem da linha. */
export const PECAS: { Icone: LucideIcon; nome: string; cor: string }[] = [
  { Icone: Mail, nome: "e-mail", cor: "text-ciano" },
  { Icone: Image, nome: "post", cor: "text-[oklch(0.8_0.13_300)]" },
  { Icone: Bell, nome: "push", cor: "text-warn" },
  { Icone: MessageCircle, nome: "WhatsApp", cor: "text-ok" },
];

/** Um ícone por estação, na ordem dos 12 passos (a cor gira entre as 4 da marca). */
const ICONE_PASSO: LucideIcon[] = [
  Building2, Gauge, Boxes, CircleDollarSign, Clock, Puzzle, CalendarDays, FastForward, Hand, Lock, Ban, Bot,
];

const ANDAR_MS = 900;
/** Inclinação fixa de cada peça bagunçada (a fila de hoje). */
const TORTO = [-18, 12, -8, 20, -14, 6, -22, 15, -5, 18, -12, 9];
const EASE = [0.23, 1, 0.32, 1] as const;

/**
 * Linha de otimização, fixa no rodapé. Cada estação é uma vaga com uma peça torta e apagada (a fila de hoje).
 * O robô fica na vaga que está trabalhando; ao responder, a peça se endireita, acende e ganha ✓ e ele anda.
 * No fim da linha, a caixa "Solução otimizada" com o troféu acende nos 100%.
 */
export function Esteira({ feitos, total }: { feitos: number; total: number }) {
  const completo = feitos === total;
  const [andando, setAndando] = useState(false);
  const anterior = useRef(feitos);
  useEffect(() => {
    if (anterior.current === feitos) return;
    anterior.current = feitos;
    setAndando(true);
    const t = window.setTimeout(() => setAndando(false), ANDAR_MS);
    return () => window.clearTimeout(t);
  }, [feitos]);
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ciano/60 bg-[oklch(0.13_0.045_265/0.97)] pb-[env(safe-area-inset-bottom)] shadow-[0_-10px_36px_-10px_oklch(0.82_0.15_210/0.35)] backdrop-blur-md"
      role="progressbar"
      aria-label="Progresso do diagnóstico"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={feitos}
      aria-valuetext={`${feitos} de ${total} estações otimizadas`}
    >
      <div className="mx-auto flex h-[var(--esteira-h)] max-w-6xl items-center gap-3 px-3 md:gap-5 md:px-6">
        {/* A linha: vagas + trilho + laser. */}
        <div className="relative h-full flex-1" aria-hidden>
          {/* Trilho (lona rolando) e o trecho já otimizado. */}
          <div className="absolute inset-x-0 bottom-[10px] h-3 overflow-hidden rounded-full bg-navy-light ring-1 ring-white/15 md:bottom-[14px] md:h-4">
            <div className="lona absolute inset-y-0 -left-6 right-0" />
            <motion.div
              className="absolute inset-y-0 left-0 w-full origin-left bg-ciano/70 shadow-[0_0_14px_var(--ciano)]"
              initial={false}
              animate={{ transform: `scaleX(${feitos / total})` }}
              transition={{ duration: ANDAR_MS / 1000, ease: [0.77, 0, 0.175, 1] }}
            />
          </div>

          {/* As 12 vagas, cada uma com a sua peça. */}
          <div className="absolute inset-x-0 bottom-[26px] grid md:bottom-[34px]" style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
            {Array.from({ length: total }).map((_, i) => {
              const ok = i < feitos;
              const Icone = ICONE_PASSO[i] ?? PECAS[i % PECAS.length].Icone;
              const { cor } = PECAS[i % PECAS.length];
              return (
                <div key={i} className="flex justify-center">
                  <motion.span
                    initial={false}
                    animate={ok ? { rotate: 0, y: 0, opacity: 1, scale: 1 } : { rotate: TORTO[i % TORTO.length], y: i % 2 ? 3 : -2, opacity: 0.45, scale: 0.9 }}
                    transition={ok ? { type: "spring", duration: 0.55, bounce: 0.45, delay: 0.35 } : { duration: 0.3, ease: EASE }}
                    className={cn(
                      "relative grid size-[22px] place-items-center rounded-[6px] border md:size-8 md:rounded-lg",
                      ok ? cn("border-ciano/60 bg-navy shadow-[0_0_10px_oklch(0.82_0.15_210/0.45)]", cor) : "border-dashed border-white/25 bg-white/[0.03] text-white/40",
                    )}
                  >
                    <Icone className="size-3 md:size-4" strokeWidth={2.4} />
                    {ok && (
                      <span className="absolute -right-1.5 -top-1.5 grid size-3 place-items-center rounded-full bg-ok text-ink md:size-4">
                        <Check className="size-2 md:size-2.5" strokeWidth={4} />
                      </span>
                    )}
                  </motion.span>
                </div>
              );
            })}
          </div>

          {/* O robô: fica na vaga que está trabalhando e anda até a próxima a cada resposta. */}
          <div
            className="absolute bottom-[20px] w-0 transition-[left] ease-[cubic-bezier(0.77,0,0.175,1)] md:bottom-[28px]"
            style={{ left: completo ? "100%" : `${((feitos + 0.5) / total) * 100}%`, transitionDuration: `${ANDAR_MS}ms` }}
          >
            <span className="laser absolute bottom-0 left-1/2 h-1.5 w-8 -translate-x-1/2 rounded-full bg-ciano/70 blur-[3px]" />
            <span
              className={cn(
                "robo-mini absolute bottom-0 left-0 block -translate-x-1/2 text-[42px] drop-shadow-[0_0_8px_oklch(0.82_0.15_210/0.7)] md:text-[46px]",
                andando && "andando",
              )}
            />
          </div>
        </div>

        {/* Destino: a solução otimizada. */}
        <div
          className={cn(
            "flex shrink-0 items-center gap-2 rounded-xl border px-2 py-1.5 transition-[background-color,border-color,box-shadow] duration-500 md:px-3 md:py-2",
            completo ? "border-ok/70 bg-ok/15 shadow-[0_0_24px_-4px_var(--ok)]" : "border-dashed border-white/20 bg-white/[0.03]",
          )}
        >
          <span className="relative">
            <Trophy className={cn("size-6 transition-colors duration-500 md:size-7", completo ? "text-warn" : "text-white/35")} strokeWidth={2.2} />
            {!completo && <Lock className="absolute -bottom-1 -right-1 size-3.5 rounded-full bg-ink p-0.5 text-white/70" strokeWidth={2.6} />}
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className={cn("block text-[10px] font-extrabold uppercase tracking-[0.18em]", completo ? "text-ok" : "text-white/40")}>
              {completo ? "Liberada" : "Destino"}
            </span>
            <span className={cn("block text-xs font-black uppercase md:text-sm", completo ? "text-offwhite" : "text-white/50")}>Solução otimizada</span>
          </span>
        </div>
      </div>
    </div>
  );
}
