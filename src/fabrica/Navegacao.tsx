import { ArrowLeft, ArrowRight } from "lucide-react";
import { BotaoSom } from "@/components/BotaoSom";
import { cn } from "@/lib/utils";

/**
 * Canto inferior direito, logo acima da esteira: quantos passos faltam, Voltar, Próximo e o som,
 * todos na mesma altura e pequenos, para não ficarem na frente do conteúdo.
 * O Próximo pulsa quando o passo está respondido. No celular o som mora na fileira de passos do topo
 * (aqui ele só aparece no portão).
 */
export function Navegacao({ mostrar, noPortao, faltam, podeVoltar, podeAvancar, rotuloProximo, aoVoltar, aoAvancar }: {
  mostrar: boolean; noPortao: boolean; faltam: number; podeVoltar: boolean; podeAvancar: boolean; rotuloProximo: string;
  aoVoltar: () => void; aoAvancar: () => void;
}) {
  return (
    <div className="fixed bottom-[calc(var(--esteira-h)+env(safe-area-inset-bottom)+0.5rem)] right-3 z-40 flex items-center gap-2 md:right-6">
      {!noPortao && (
        <span className="hidden h-12 items-center rounded-full border border-white/10 bg-ink/85 px-3 text-xs font-semibold tabular-nums text-muted-foreground backdrop-blur-md lg:flex">
          {faltam === 0 ? "Todos os passos feitos" : `Faltam ${faltam} ${faltam === 1 ? "passo" : "passos"}`}
        </span>
      )}
      {mostrar && (
        <>
          <button
            type="button"
            onClick={aoVoltar}
            disabled={!podeVoltar}
            aria-label="Voltar"
            className="flex h-12 items-center gap-1.5 rounded-full border border-white/15 bg-ink/90 px-3.5 text-sm font-bold text-offwhite backdrop-blur-md transition-[opacity,transform] duration-150 active:scale-[0.97] disabled:opacity-30 md:px-4"
          >
            <ArrowLeft className="size-4" strokeWidth={2.6} aria-hidden />
            <span className="hidden md:inline">Voltar</span>
          </button>
          <button
            type="button"
            onClick={aoAvancar}
            disabled={!podeAvancar}
            className={cn(
              "flex h-12 items-center gap-1.5 rounded-full px-4 text-sm font-extrabold uppercase tracking-wide transition-[background-color,color,transform,opacity] duration-200 active:scale-[0.97] md:px-5",
              podeAvancar ? "proximo-pronto bg-ciano text-ink" : "border border-dashed border-white/20 bg-ink/85 text-white/40 backdrop-blur-md",
            )}
          >
            {rotuloProximo}
            <ArrowRight className="size-4" strokeWidth={2.8} aria-hidden />
          </button>
        </>
      )}
      <div className={cn(noPortao ? "block" : "hidden lg:block")}><BotaoSom /></div>
    </div>
  );
}
