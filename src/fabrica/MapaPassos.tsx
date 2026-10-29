import { Check, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

/** Nome curto de cada passo, na ordem das 12 estações. */
export const NOMES_PASSOS = ["Sua empresa", "Flow", "Insights", "Teams", "Composer", "CX"] as const;

/**
 * Mapa dos 12 passos, fixo no topo: feitos em ciano com ✓, o atual grande e brilhando,
 * os que faltam apagados, e o troféu do resultado no fim. Tocar num passo feito volta até ele.
 */
export function MapaPassos({ feitas, atual, aoIr }: { feitas: boolean[]; atual: number; aoIr: (i: number) => void }) {
  const total = feitas.length;
  const todos = feitas.every(Boolean);
  return (
    <nav aria-label="Mapa dos passos" className="relative mx-auto flex h-[var(--mapa-h)] max-w-6xl items-center gap-1 px-4 md:gap-1.5 md:px-6">
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10">
        <span className="block h-full bg-ciano shadow-[0_0_8px_var(--ciano)] transition-[width] duration-700" style={{ width: `${(feitas.filter(Boolean).length / feitas.length) * 100}%` }} />
      </span>
      <ol className="flex flex-1 items-center gap-1 md:gap-1.5">
        {feitas.map((feita, i) => {
          const n = i + 1;
          const eAtual = n === atual;
          return (
            <li key={n} className="min-w-0 flex-1">
              <button
                type="button"
                onClick={() => aoIr(i)}
                disabled={!feita && !eAtual && !(i === 0 || feitas.slice(0, i).every(Boolean))}
                aria-current={eAtual ? "step" : undefined}
                aria-label={`Passo ${n}: ${NOMES_PASSOS[i]}${feita ? " (feito)" : eAtual ? " (você está aqui)" : " (falta)"}`}
                title={NOMES_PASSOS[i]}
                className={cn(
                  "grid h-7 w-full place-items-center rounded-md text-[11px] font-extrabold tabular-nums transition-[background-color,color,transform,box-shadow] duration-300 md:h-8 md:text-xs",
                  feita && !eAtual && "bg-ciano text-ink",
                  eAtual && "scale-110 bg-offwhite text-ink shadow-[0_0_0_2px_var(--ciano),0_0_18px_var(--ciano)] passo-atual",
                  !feita && !eAtual && "border border-white/15 text-white/35",
                )}
              >
                {feita && !eAtual ? <Check className="size-3.5" strokeWidth={3.2} aria-hidden /> : n}
              </button>
            </li>
          );
        })}
      </ol>
      <span
        aria-label={todos ? "Resultado liberado" : "Resultado no fim"}
        className={cn("grid h-7 w-8 shrink-0 place-items-center rounded-md md:h-8 md:w-9", todos ? "bg-warn text-ink" : "border border-dashed border-warn/50 text-warn/60")}
      >
        <Trophy className="size-4" strokeWidth={2.2} aria-hidden />
      </span>
    </nav>
  );
}

/** Desktop: painel HUD fixo à esquerda. Anel com o %, e cada seção com status OK / ABERTA / BLOQ;
 *  a seção que está na tela acende e acompanha a rolagem. */
export function TrilhoPassos({ feitas, atual, aoIr, mostrar }: { feitas: boolean[]; atual: number; aoIr: (i: number) => void; mostrar: boolean }) {
  const total = feitas.length;
  const ok = feitas.filter(Boolean).length;
  const pct = Math.round((ok / total) * 100);
  const R = 30, C = 2 * Math.PI * R;
  return (
    <nav
      aria-label="Seus passos"
      inert={!mostrar}
      className={cn(
        "hud fixed bottom-[calc(var(--esteira-h)+env(safe-area-inset-bottom)+2px)] left-0 top-[var(--cabecalho-h)] z-30 hidden w-64 flex-col border-r border-ciano/25 bg-[oklch(0.12_0.04_265/0.9)] px-4 py-4 font-mono backdrop-blur-md transition-opacity duration-300 lg:flex",
        mostrar ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="mb-4 border-b border-white/10 pb-4">
        <img src="/maestro-wordmark.svg" alt="Maestro by always on" width={89} height={36} className="block h-auto w-full" />
      </div>
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 72 72" className="size-20 shrink-0 -rotate-90" aria-hidden>
          <circle cx="36" cy="36" r={R} fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="6" />
          <circle
            cx="36" cy="36" r={R} fill="none" stroke="var(--ciano)" strokeWidth="6" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={C * (1 - ok / total)}
            className="drop-shadow-[0_0_6px_var(--ciano)] transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
          />
        </svg>
        <div className="leading-none">
          <p className="text-4xl font-bold tabular-nums text-offwhite">{pct}<span className="text-lg text-ciano">%</span></p>
          <p className="mt-1.5 text-xs uppercase tracking-widest text-muted-foreground">{String(ok).padStart(2, "0")}/{String(total).padStart(2, "0")} concluídas</p>
        </div>
      </div>
      <p className="mt-4 border-t border-white/10 pt-3 text-xs uppercase tracking-[0.2em] text-ciano/80">
        Seção <span className="text-offwhite">{String(atual).padStart(2, "0")}</span>/{String(total).padStart(2, "0")}
      </p>
      <ol className="mt-2 flex min-h-0 flex-1 flex-col gap-1 overflow-x-hidden overflow-y-auto px-1">
        {feitas.map((feita, i) => {
          const n = i + 1;
          const eAtual = n === atual;
          const liberada = feita || i === 0 || feitas[i - 1];
          const status = feita ? "OK" : liberada ? "ABERTA" : "BLOQ";
          return (
            <li key={n}>
              <button
                type="button"
                onClick={() => aoIr(i)}
                disabled={!liberada}
                aria-current={eAtual ? "step" : undefined}
                aria-label={`Seção ${n}: ${NOMES_PASSOS[i]}, ${feita ? "feita" : liberada ? "aberta" : "bloqueada"}`}
                className={cn(
                  "relative flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-xs transition-colors duration-200 disabled:cursor-default",
                  eAtual ? "scale-[1.03] bg-ciano/15 text-offwhite shadow-[inset_3px_0_0_var(--ciano),0_0_18px_-6px_var(--ciano)]" : "hover:bg-white/[0.04]",
                )}
              >
                <span className={cn("w-5 shrink-0 tabular-nums", eAtual ? "text-ciano" : feita ? "text-offwhite/70" : "text-white/30")}>{String(n).padStart(2, "0")}</span>
                <span className={cn("min-w-0 flex-1 truncate font-sans text-sm", eAtual ? "font-extrabold uppercase" : feita ? "text-offwhite/80" : liberada ? "text-offwhite/60" : "text-white/30")}>
                  {NOMES_PASSOS[i]}
                </span>
                <span className={cn(
                  "shrink-0 rounded-[3px] px-1.5 py-px text-[10px] font-bold tracking-wider",
                  status === "OK" && "bg-ciano text-ink",
                  status === "ABERTA" && (eAtual ? "passo-atual bg-warn text-ink" : "bg-warn/20 text-warn"),
                  status === "BLOQ" && "text-white/30 ring-1 ring-white/15",
                )}>
                  {status}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-sm">
        <Trophy className={cn("size-4", ok === total ? "text-warn" : "text-warn/40")} strokeWidth={2.2} aria-hidden />
        <span className={cn("font-sans font-bold", ok === total ? "text-warn" : "text-warn/50")}>{ok === total ? "Resultado liberado" : "Resultado"}</span>
      </div>
    </nav>
  );
}
