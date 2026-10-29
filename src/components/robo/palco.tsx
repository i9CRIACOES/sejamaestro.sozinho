import { useEffect, useState } from "react";
import { CENA_ROBO } from "@/domain/constants";
import { cn } from "@/lib/utils";
import { InteractiveRobotSpline } from "./interactive-3d-robot";
import { infoDoNavegador, podeCarregar3D } from "./regra3d";

/** Robô grande: Spline quando o aparelho aguenta, imagem flutuando quando não. */
export function PalcoDoRobo({ className }: { className?: string }) {
  const [tresD, setTresD] = useState(false);
  useEffect(() => setTresD(podeCarregar3D(infoDoNavegador())), []);

  return (
    <div className={cn("relative", tresD && "overflow-hidden", className)}>
      {tresD ? (
        <>
          {/* O canvas é 120px mais alto que a caixa: o selo "Built with Spline" (pintado
              no rodapé do canvas) fica fora da área visível e é cortado pelo overflow-hidden. */}
          <div className="absolute inset-x-0 top-0 h-[calc(100%+120px)]">
            <InteractiveRobotSpline scene={CENA_ROBO} className="absolute inset-0 h-full w-full" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent" />
        </>
      ) : (
        <img src="/robo.png" alt="Robô do Maestro" className="flutuar absolute inset-0 m-auto max-h-full w-auto object-contain [mask-image:radial-gradient(ellipse_52%_56%_at_50%_42%,#000_58%,transparent_100%)]" />
      )}
    </div>
  );
}
