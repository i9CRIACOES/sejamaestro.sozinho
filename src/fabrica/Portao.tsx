import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Factory, Power } from "lucide-react";
import { PalcoDoRobo } from "@/components/robo/palco";
import { PalavraGirando } from "@/components/ui/palavra-girando";
import { cn } from "@/lib/utils";
import { LogoMontado } from "./marca";
import { usePerto } from "./rolar";

const DADOS = [
  { n: "89%", t: "dizem que o criativo decide a performance" },
  { n: "3,6%", t: "otimizam o criativo de fato" },
  { n: "<10%", t: "dos criativos são testados antes de ir ao ar" },
];
const EASE = [0.23, 1, 0.32, 1] as const;

/** Portão da fábrica: o logo se monta, o título gira, e o botão liga a linha (e o som). */
export function Portao({ id, indice, ligada, aoLigar, desktop }: { id: string; indice: number; ligada: boolean; aoLigar: () => void; desktop: boolean }) {
  const palco = useRef<HTMLDivElement>(null);
  const reduz = useReducedMotion();
  const perto = usePerto(palco, "200px");
  return (
    <section id={id} data-indice={indice} aria-labelledby={`${id}-t`} className="relative flex min-h-[100dvh] items-center px-5 pb-[calc(var(--esteira-h)+3rem)] pt-20 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-6">
        <div>
          <LogoMontado className="-ml-2 w-[min(100%,22rem)] md:w-[28rem]" />
          <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-warn/40 bg-warn/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-warn md:mt-10 md:text-sm">
            <Factory className="size-4" strokeWidth={2.4} aria-hidden /> Fábrica de soluções
          </p>
          <h1 id={`${id}-t`} className="mt-4 text-[2.3rem] font-black leading-[1.02] tracking-tight md:text-[3.3rem]">
            Passe pelas <span className="text-ciano">6 estações</span> da nossa fábrica.
          </h1>
          <p className="mt-5 text-xl font-bold leading-snug text-offwhite/90 md:text-2xl">
            E descubra onde a sua operação
          </p>
          <PalavraGirando palavras={["trava?", "perde valor?", "pode evoluir?"]} className="mt-1 text-5xl md:text-7xl" />
          <p className="mt-5 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Onde está a sua maior dor de decisão? Avalie Flow, Insights, Teams, Composer e CX. Em 20 perguntas, descubra onde o valor escapa e por onde começar.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              type="button"
              onClick={aoLigar}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "group inline-flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl px-6 text-lg font-extrabold transition-colors duration-200",
                ligada ? "bg-ok text-ink" : "bg-ciano text-ink shadow-[0_14px_32px_-14px_oklch(0.82_0.15_210/0.9)]",
              )}
            >
              <span className={cn("grid size-8 place-items-center rounded-full bg-ink/15 transition-transform duration-300", !ligada && "group-hover:rotate-90")}>
                <Power className="size-5" strokeWidth={2.8} />
              </span>
              {ligada ? "Fábrica ligada" : "Ligar a fábrica"}
            </motion.button>
            <p className="max-w-[22ch] text-xs leading-snug text-muted-foreground">Tem som. Dá pra desligar no botão do canto. 6 estações, uns 4 minutos.</p>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-5">
            {DADOS.map((d, i) => (
              <motion.li
                key={d.n}
                initial={reduz ? false : { opacity: 0, transform: "translateY(8px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.5, delay: 1.9 + i * 0.08, ease: EASE }}
              >
                <strong className="block text-2xl font-extrabold text-ciano tabular-nums md:text-3xl">{d.n}</strong>
                <span className="mt-1 block text-xs leading-snug text-muted-foreground">{d.t}</span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] text-muted-foreground/80">EMARKETER com Perion (abr/2026) e com Toluna (mai/2026).</p>
        </div>

        <div ref={palco} className="relative hidden h-[64vh] md:block">
          {desktop && perto && <PalcoDoRobo className="h-full" />}
        </div>
      </div>
    </section>
  );
}
