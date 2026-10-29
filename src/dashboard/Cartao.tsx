import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE, useReduz } from "./movimento";

/** Painel com cara de chapa industrial: parafusos nos cantos, etiqueta de código e título. */
export function Cartao({ codigo, titulo, sub, children, className, atraso = 0, id }: {
  codigo?: string; titulo?: string; sub?: string; children: ReactNode; className?: string; atraso?: number; id?: string;
}) {
  const reduz = useReduz();
  return (
    <motion.section
      aria-labelledby={titulo && id ? id : undefined}
      initial={reduz ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, ease: EASE, delay: atraso }}
      className={cn(
        "relative min-w-0 rounded-2xl border border-white/10 bg-navy/75 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.05),0_24px_48px_-28px_rgb(0_0_0/0.8)] md:p-6",
        className,
      )}
    >
      <Parafusos />
      {(codigo || titulo) && (
        <header className="mb-4">
          {codigo && (
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-4 bg-ciano/60" aria-hidden />
              {codigo}
            </p>
          )}
          {titulo && <h3 id={id} className="mt-1.5 text-lg font-bold leading-snug text-offwhite md:text-xl">{titulo}</h3>}
          {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
        </header>
      )}
      {children}
    </motion.section>
  );
}

function Parafusos() {
  const p = "absolute size-1.5 rounded-full bg-white/[0.09] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.06)]";
  return (
    <span aria-hidden>
      <span className={cn(p, "left-2.5 top-2.5")} />
      <span className={cn(p, "right-2.5 top-2.5")} />
      <span className={cn(p, "bottom-2.5 left-2.5")} />
      <span className={cn(p, "bottom-2.5 right-2.5")} />
    </span>
  );
}

/** Tabela só para leitor de tela: o equivalente acessível de cada gráfico. */
export function TabelaSr({ legenda, linhas }: { legenda: string; linhas: [string, string][] }) {
  return (
    <table className="sr-only">
      <caption>{legenda}</caption>
      <tbody>
        {linhas.map(([k, v]) => (
          <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
        ))}
      </tbody>
    </table>
  );
}

export function Legenda({ itens }: { itens: { cor: string; rotulo: string; valor?: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
      {itens.map((i) => (
        <li key={i.rotulo} className="inline-flex items-center gap-1.5">
          <span className="size-2.5 rounded-[3px]" style={{ background: i.cor }} aria-hidden />
          {i.rotulo}
          {i.valor && <span className="font-semibold text-offwhite">{i.valor}</span>}
        </li>
      ))}
    </ul>
  );
}
