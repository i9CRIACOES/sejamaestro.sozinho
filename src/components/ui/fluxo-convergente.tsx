import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Ponto = { x: number; y: number };
type Caminho = { esquerda: boolean; y0: number; t: number; vel: number };
type Onda = { x: number; y: number; raio: number; vida: number };

function bezier(t: number, p0: Ponto, p1: Ponto, p2: Ponto, p3: Ponto): Ponto {
  const u = 1 - t;
  return {
    x: u ** 3 * p0.x + 3 * u ** 2 * t * p1.x + 3 * u * t ** 2 * p2.x + t ** 3 * p3.x,
    y: u ** 3 * p0.y + 3 * u ** 2 * t * p1.y + 3 * u * t ** 2 * p2.y + t ** 3 * p3.y,
  };
}

export function FluxoConvergente({ className, cor = "0, 212, 255" }: { className?: string; cor?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const total = window.innerWidth < 768 ? 30 : 80;
    let w = 0, h = 0, raf = 0, ativo = true;
    let caminhos: Caminho[] = [];
    const ondas: Onda[] = [];

    const dimensionar = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      caminhos = Array.from({ length: total }, (_, i) => ({
        esquerda: i % 2 === 0, y0: (i / total) * h * 1.4 - h * 0.2, t: Math.random(), vel: 0.0015 + Math.random() * 0.002,
      }));
    };

    const quadro = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      for (const o of ondas) { o.raio += 15; o.vida -= 0.015; }
      for (let i = ondas.length - 1; i >= 0; i--) if (ondas[i].vida <= 0) ondas.splice(i, 1);
      for (const c of caminhos) {
        const p0 = { x: c.esquerda ? 0 : w, y: c.y0 };
        const p1 = { x: c.esquerda ? cx * 0.5 : w - cx * 0.5, y: c.y0 };
        const p2 = { x: c.esquerda ? cx * 0.8 : w - cx * 0.8, y: cy };
        const p3 = { x: cx, y: cy };
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
        ctx.strokeStyle = `rgba(${cor}, 0.22)`;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([1, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
        if (!reduzir) {
          c.t += c.vel;
          if (c.t > 1) { c.t = 0; c.y0 += (Math.random() - 0.5) * 10; }
        }
        const pos = bezier(c.t, p0, p1, p2, p3);
        let dx = 0, dy = 0;
        for (const o of ondas) {
          const ex = pos.x - o.x, ey = pos.y - o.y, d = Math.hypot(ex, ey) || 1;
          if (d < o.raio + 120 && d > o.raio - 120) {
            const f = (1 - Math.abs(d - o.raio) / 120) * o.vida;
            dx += (ex / d) * f * 80;
            dy += (ey / d) * f * 80;
          }
        }
        ctx.fillStyle = `rgba(${cor}, 0.75)`;
        ctx.fillRect(pos.x + dx - 1.5, pos.y + dy - 1.5, 3, 3);
      }
      if (ativo && !reduzir) raf = requestAnimationFrame(quadro);
    };

    const clique = (ev: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      ondas.push({ x: ev.clientX - r.left, y: ev.clientY - r.top, raio: 0, vida: 1 });
    };
    const visibilidade = () => {
      ativo = !document.hidden;
      cancelAnimationFrame(raf);
      if (ativo) raf = requestAnimationFrame(quadro);
    };

    dimensionar();
    quadro();
    window.addEventListener("resize", dimensionar);
    window.addEventListener("pointerdown", clique);
    document.addEventListener("visibilitychange", visibilidade);
    return () => {
      ativo = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", dimensionar);
      window.removeEventListener("pointerdown", clique);
      document.removeEventListener("visibilitychange", visibilidade);
    };
  }, [cor]);

  return <canvas ref={ref} aria-hidden className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} />;
}
