import { useSyncExternalStore } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { som } from "@/audio/som";

export function BotaoSom() {
  const mudo = useSyncExternalStore(som.assinar, () => som.mudo);
  return (
    <button
      type="button"
      onClick={() => som.alternarMudo()}
      aria-label={mudo ? "Ligar o som" : "Desligar o som"}
      aria-pressed={mudo}
      className="grid size-12 place-items-center rounded-full border border-border bg-navy/70 text-offwhite transition-colors hover:border-ciano/50 hover:text-ciano"
    >
      {mudo ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
    </button>
  );
}
