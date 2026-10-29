import { gravar, ler } from "@/data/armazenamento";
import { ARPEJO, SEMICOLCHEIA, VOLUME_CAMADA, acordeDoPasso, midiParaHz } from "./musica";

export type Efeito = "clique" | "selecao" | "fase" | "vocesabia" | "revelar" | "erro";

const CHAVE_MUDO = "vcsabia:mudo";
const VOLUME_MESTRE = 0.5;

class MotorDeSom {
  private ctx: AudioContext | null = null;
  private mestre: GainNode | null = null;
  private efeitos: GainNode | null = null;
  private camadas: GainNode[] = [];
  private timer: ReturnType<typeof setInterval> | null = null;
  private proxima = 0;
  private passo = 0;
  private nivel = 0;
  private ouvintes = new Set<() => void>();
  mudo = ler(CHAVE_MUDO) === "1";

  /** Chamar dentro de um clique (exigência dos navegadores para tocar som). */
  iniciar() {
    if (this.ctx) {
      this.ctx.resume().catch(() => {});
      return;
    }
    let ctx: AudioContext | null = null;
    try {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      ctx.resume().catch(() => {});
      const c = ctx;
      const mestre = c.createGain();
      mestre.gain.value = this.mudo ? 0 : VOLUME_MESTRE;
      mestre.connect(c.destination);
      const efeitos = c.createGain();
      efeitos.gain.value = 0.6;
      efeitos.connect(mestre);

      const filtroPad = c.createBiquadFilter();
      filtroPad.type = "lowpass";
      filtroPad.frequency.value = 900;
      filtroPad.connect(mestre);
      const eco = c.createDelay();
      eco.delayTime.value = SEMICOLCHEIA * 3;
      const retorno = c.createGain();
      retorno.gain.value = 0.3;
      eco.connect(retorno).connect(eco);
      eco.connect(mestre);

      const camadas = VOLUME_CAMADA.map((_, i) => {
        const g = c.createGain();
        g.gain.value = 0;
        if (i === 0) g.connect(filtroPad);
        else if (i === 2) {
          g.connect(mestre);
          g.connect(eco);
        } else g.connect(mestre);
        return g;
      });

      // Só publica o contexto depois de o grafo inteiro estar montado.
      this.mestre = mestre;
      this.efeitos = efeitos;
      this.camadas = camadas;
      this.proxima = c.currentTime + 0.1;
      this.ctx = c;
    } catch {
      void ctx?.close().catch(() => {});
      this.ctx = null;
      this.mestre = null;
      this.efeitos = null;
      this.camadas = [];
      return;
    }
    document.addEventListener("visibilitychange", () => {
      if (!this.ctx) return;
      if (document.hidden) this.ctx.suspend().catch(() => {});
      else this.ctx.resume().catch(() => {});
    });
    this.definirNivel(this.nivel);
  }

  /** Só agenda notas enquanto há som para ouvir: ligado e com pelo menos 1 camada. */
  private atualizarRelogio() {
    const ativo = !!this.ctx && !this.mudo && this.nivel > 0;
    if (ativo && !this.timer) this.timer = setInterval(() => this.agendar(), 25);
    else if (!ativo && this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private nota(destino: AudioNode, freq: number, inicio: number, dur: number, tipo: OscillatorType, pico: number, ataque = 0.01) {
    const ctx = this.ctx!;
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    osc.type = tipo;
    osc.frequency.value = freq;
    env.gain.setValueAtTime(0.0001, inicio);
    env.gain.exponentialRampToValueAtTime(pico, inicio + ataque);
    env.gain.exponentialRampToValueAtTime(0.0001, inicio + dur);
    osc.connect(env).connect(destino);
    osc.start(inicio);
    osc.stop(inicio + dur + 0.05);
  }

  private agendar() {
    const ctx = this.ctx!;
    if (this.proxima < ctx.currentTime) this.proxima = ctx.currentTime + 0.05;
    while (this.proxima < ctx.currentTime + 0.12) {
      const t = this.proxima;
      const acorde = acordeDoPasso(this.passo);
      if (this.passo % 32 === 0) acorde.forEach((m) => this.nota(this.camadas[0], midiParaHz(m), t, SEMICOLCHEIA * 32, "triangle", 0.12, 1.5));
      if (this.passo % 4 === 0) this.nota(this.camadas[1], midiParaHz(acorde[0] - 12), t, SEMICOLCHEIA * 3, "sine", 0.5);
      const m = acorde[ARPEJO[this.passo % ARPEJO.length] % acorde.length] + 12;
      this.nota(this.camadas[2], midiParaHz(m), t, SEMICOLCHEIA * 1.6, "sine", 0.35);
      if (this.passo % 8 === 4) this.nota(this.camadas[3], midiParaHz(acorde[Math.floor(this.passo / 8) % acorde.length] + 24), t, SEMICOLCHEIA * 6, "sine", 0.3, 0.05);
      this.proxima += SEMICOLCHEIA;
      this.passo++;
    }
  }

  /** 0 = silêncio, 1..4 = quantas camadas tocam. */
  definirNivel(n: number) {
    this.nivel = n;
    if (!this.ctx) return;
    const agora = this.ctx.currentTime;
    this.camadas.forEach((g, i) => g.gain.setTargetAtTime(i < n ? VOLUME_CAMADA[i] : 0, agora, 0.8));
    this.atualizarRelogio();
  }

  tocar(e: Efeito) {
    if (!this.ctx || !this.efeitos || this.mudo) return;
    const t = this.ctx.currentTime;
    const d = this.efeitos;
    switch (e) {
      case "clique": this.nota(d, 1400, t, 0.04, "square", 0.08); break;
      case "selecao": this.nota(d, 660, t, 0.08, "triangle", 0.3); this.nota(d, 990, t + 0.07, 0.12, "triangle", 0.3); break;
      case "fase": {
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.type = "sine";
        o.frequency.setValueAtTime(300, t);
        o.frequency.exponentialRampToValueAtTime(900, t + 0.35);
        g.gain.setValueAtTime(0.25, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
        o.connect(g).connect(d);
        o.start(t);
        o.stop(t + 0.45);
        this.nota(d, 1320, t + 0.3, 0.5, "sine", 0.2);
        break;
      }
      case "vocesabia": this.nota(d, 1046.5, t, 1.2, "sine", 0.3); this.nota(d, 1568, t, 0.9, "sine", 0.12); break;
      case "revelar": {
        const o = this.ctx.createOscillator();
        const f = this.ctx.createBiquadFilter();
        const g = this.ctx.createGain();
        o.type = "sawtooth";
        o.frequency.setValueAtTime(120, t);
        o.frequency.exponentialRampToValueAtTime(1200, t + 0.8);
        f.type = "lowpass";
        f.frequency.setValueAtTime(400, t);
        f.frequency.exponentialRampToValueAtTime(4000, t + 0.8);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.15, t + 0.6);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
        o.connect(f).connect(g).connect(d);
        o.start(t);
        o.stop(t + 0.95);
        this.nota(d, 80, t + 0.8, 0.45, "sine", 0.6);
        break;
      }
      case "erro": this.nota(d, 180, t, 0.14, "square", 0.12); break;
    }
  }

  alternarMudo() {
    this.mudo = !this.mudo;
    gravar(CHAVE_MUDO, this.mudo ? "1" : "0");
    if (this.mestre && this.ctx) this.mestre.gain.setTargetAtTime(this.mudo ? 0 : VOLUME_MESTRE, this.ctx.currentTime, 0.1);
    this.atualizarRelogio();
    this.ouvintes.forEach((f) => f());
  }

  assinar = (f: () => void): (() => void) => {
    this.ouvintes.add(f);
    return () => {
      this.ouvintes.delete(f);
    };
  };
}

export const som = new MotorDeSom();
