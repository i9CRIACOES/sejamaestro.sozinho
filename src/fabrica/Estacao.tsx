import type { ReactNode } from "react";
import { Check, Lock, type LucideIcon } from "lucide-react";
import { TextoGigante } from "@/components/ui/parallax";
import { cn } from "@/lib/utils";

/**
 * Casca de uma estação: placa "Estação N de 12", pergunta, ajuda e a tranca.
 * Trancada = desfoque + cadeado + fita zebrada; o conteúdo fica `inert` (fora do Tab e do leitor de tela).
 */
export function Estacao({
  id, indice, numero, total, setor, titulo, ajuda, desbloqueada, anterior, alegoria, lado = "dir", children,
}: {
  id: string; indice: number; numero: number; total: number; setor: string; titulo: string; ajuda?: string;
  desbloqueada: boolean; anterior?: string; alegoria?: ReactNode; lado?: "esq" | "dir"; children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-indice={indice}
      aria-labelledby={`${id}-t`}
      className="relative isolate flex min-h-[100dvh] items-center overflow-x-clip px-5 py-20 md:px-8 md:py-24"
    >
      {/* Número gigante no fundo, mais lento que a página (profundidade). */}
      <TextoGigante
        texto={String(numero).padStart(2, "0")}
        className={cn("pointer-events-none absolute top-1/2 -z-10 -translate-y-1/2 text-[62vw] md:text-[30rem]", lado === "esq" ? "-left-[4vw]" : "-right-[4vw]")}
      />
      {/* Divisória entre as seções: a junta da esteira com o número da estação. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 flex items-center gap-3 px-5 md:px-8">
        <span className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-ciano/50" />
        <span className="rounded-full border-2 border-ciano/50 bg-ink px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ciano">
          Estação {numero}
        </span>
        <span className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-ciano/50" />
      </div>
      <div
        inert={!desbloqueada}
        className={cn(
          "mx-auto grid w-full max-w-6xl gap-6 transition-[filter,opacity] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:gap-12",
          alegoria && "md:grid-cols-2 md:items-start",
          !desbloqueada && "pointer-events-none select-none opacity-40 blur-[6px]",
        )}
      >
        <div className={cn(alegoria && lado === "esq" && "md:order-2")}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{setor}</p>
          <p className="mt-1 whitespace-nowrap text-[2.6rem] font-black uppercase leading-none tracking-tight tabular-nums sm:text-5xl md:text-[clamp(2.6rem,4vw,4.5rem)]">
            <span className="text-ciano">Passo {String(numero).padStart(2, "0")}</span>
            <span className="text-offwhite/35"> de {total}</span>
          </p>
          <p className={cn(
            "mt-3 inline-flex rounded-md px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider md:text-sm",
            numero === total ? "bg-ok text-ink" : "bg-warn/15 text-warn",
          )}>
            {numero === total ? "Último passo!" : `Faltam ${total - numero} depois deste`}
          </p>
          <h2 id={`${id}-t`} className="mt-4 text-balance text-[1.7rem] font-extrabold leading-[1.1] tracking-tight md:text-[2.6rem]">{titulo}</h2>
          {ajuda && <p className="mt-3 max-w-[60ch] text-pretty text-[0.95rem] leading-relaxed text-muted-foreground md:text-base">{ajuda}</p>}
          {alegoria && <div id={`${id}-alegoria`} className="mt-6 scroll-mt-16 md:hidden">{alegoria}</div>}
          <div className="mt-6">{children}</div>
        </div>
        {/* Desktop: a janela da animação gruda no meio da tela enquanto as opções passam (o mouse nunca fica longe dela). */}
        {alegoria && (
          <div className={cn("hidden md:sticky md:top-[max(1.5rem,calc((100dvh-var(--esteira-h)-var(--nav-h)-22rem)/2))] md:block", lado === "esq" && "md:order-1")}>
            {alegoria}
          </div>
        )}
      </div>

      {!desbloqueada && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center px-6">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-ink/90 text-center shadow-[0_24px_48px_-16px_oklch(0.05_0.03_265)]">
            <div className="fita-zebrada h-2.5" />
            <div className="px-6 py-5">
              <Lock className="mx-auto size-8 text-warn" strokeWidth={2} />
              <p className="mt-2 font-bold">Estação trancada</p>
              {anterior && <p className="mt-1 text-sm text-muted-foreground">Responda {anterior} para liberar.</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/** Botões de opção: interruptores com luz-piloto. */
export function Opcoes({ rotulo, opcoes, icones, escolhida, aoEscolher, travado, aoPrever }: {
  rotulo: string; opcoes: string[]; escolhida: number | undefined; aoEscolher: (i: number) => void; travado?: boolean;
  icones?: LucideIcon[];
  /** Mouse em cima de uma opção: a animação mostra como ficaria, antes de clicar. */
  aoPrever?: (i: number | null) => void;
}) {
  return (
    <div role="radiogroup" aria-label={rotulo} className="grid gap-2.5" onPointerLeave={() => aoPrever?.(null)}>
      {opcoes.map((op, i) => {
        const sel = escolhida === i;
        const Icone = icones?.[i];
        return (
          <button
            key={op}
            type="button"
            role="radio"
            aria-checked={sel}
            tabIndex={sel || (escolhida === undefined && i === 0) ? 0 : -1}
            disabled={travado && !sel}
            onKeyDown={(ev) => {
              if (travado || !['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(ev.key)) return;
              ev.preventDefault();
              const proxima = ev.key === 'Home' ? 0 : ev.key === 'End' ? opcoes.length - 1
                : (i + (ev.key === 'ArrowRight' || ev.key === 'ArrowDown' ? 1 : -1) + opcoes.length) % opcoes.length;
              const botoes = ev.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="radio"]');
              if (botoes?.[proxima] && !botoes[proxima].disabled) { aoEscolher(proxima); botoes[proxima].focus(); }
            }}
            onClick={() => { aoPrever?.(null); aoEscolher(i); }}
            onPointerEnter={(ev) => { if (ev.pointerType === "mouse" && !travado) aoPrever?.(i); }}
            className={cn(
              "group flex min-h-14 w-full cursor-pointer items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-[background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40",
              sel ? "border-ciano bg-ciano/12 shadow-[0_8px_24px_-12px_oklch(0.82_0.15_210/0.6)]" : "border-white/12 bg-navy/70 hover:border-white/30 hover:bg-navy-light/80",
            )}
          >
            <span className={cn("grid size-7 shrink-0 place-items-center rounded-full border-2 transition-colors duration-200", sel ? "border-ciano bg-ciano text-ink" : "border-white/25 bg-ink")}>
              {sel ? <Check className="size-4" strokeWidth={3} /> : <span className="size-1.5 rounded-full bg-white/30" />}
            </span>
            {Icone && <Icone aria-hidden className={cn("size-5 shrink-0", sel ? "text-ciano" : "text-muted-foreground")} strokeWidth={1.8} />}
            <span className="text-base font-semibold leading-snug">{op}</span>
          </button>
        );
      })}
    </div>
  );
}

/** Rótulo de pergunta secundária (dentro de uma estação): número em selo, texto grande e o status. */
export function RotuloPergunta({ n, total, texto, respondida }: { n: number; total: number; texto: string; respondida: boolean }) {
  return (
    <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="grid h-7 min-w-7 place-items-center rounded-lg bg-ciano px-1.5 text-xs font-black tabular-nums text-ink">
        {n}/{total}
      </span>
      <span className="text-lg font-extrabold leading-snug text-offwhite md:text-xl">{texto}</span>
      <span className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wider",
        respondida ? "bg-ok/15 text-ok" : "animate-pulse bg-warn/15 text-warn",
      )}>
        {respondida ? <><Check className="size-3" strokeWidth={3.4} aria-hidden />Respondida</> : "Responda"}
      </span>
    </span>
  );
}
