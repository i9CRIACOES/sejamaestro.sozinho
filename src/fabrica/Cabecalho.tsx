import { BotaoSom } from "@/components/BotaoSom";
import { MapaPassos } from "./MapaPassos";

/**
 * Sem barra fixa no desktop: o logo mora no topo do painel de passos (à esquerda).
 * No celular, só a fileira fina dos 12 passos no topo, com o som na ponta.
 * O resto (faltam N, Voltar, Próximo, som no desktop) fica no canto inferior direito, em <Navegacao>.
 */
export function Cabecalho({ noPortao, estacao, feitas, aoIr }: { noPortao: boolean; estacao: number; feitas: boolean[]; aoIr: (i: number) => void }) {
  return (
    <>
      {!noPortao && (
        <header className="fixed inset-x-0 top-0 z-40 flex items-center border-b border-white/8 bg-ink/80 pr-2 pt-[env(safe-area-inset-top)] backdrop-blur-md lg:hidden">
          <div className="min-w-0 flex-1"><MapaPassos feitas={feitas} atual={estacao} aoIr={aoIr} /></div>
          <BotaoSom />
        </header>
      )}
    </>
  );
}
