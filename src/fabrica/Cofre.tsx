import { useEffect, useState, type FormEvent, type InputHTMLAttributes, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, KeyRound, Lock, LockOpen } from "lucide-react";
import { validarContato, type Contato } from "@/assessment/contato";
import { cn } from "@/lib/utils";
import { PECAS } from "./Esteira";
import { reduzMovimento } from "./rolar";

const FRASES = ["Reunindo as notas dos módulos", "Identificando a sua maior dor", "Estimando o valor em risco", "Fechando a conta"];
const EASE = [0.23, 1, 0.32, 1] as const;

const rotulo = "flex items-center justify-between gap-2 text-base font-extrabold text-offwhite";
const campo =
  "w-full rounded-xl border border-white/15 bg-ink px-4 py-3.5 text-base text-offwhite outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-ciano aria-[invalid=true]:border-err";

function Campo({ id, nome, erro, ...p }: { id: keyof Contato; nome: string; erro: string | null } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="row-span-3 grid min-w-0 grid-rows-subgrid gap-1.5">
      <label htmlFor={`c-${id}`} className={rotulo}>
        {nome}
        {String(p.value ?? "").trim() ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-ok"><Check className="size-3" strokeWidth={3.4} aria-hidden />ok</span>
        ) : id === "nome" || id === "email" ? (
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-warn">obrigatório</span>
        ) : null}
      </label>
      <input id={`c-${id}`} aria-label={nome} aria-invalid={!!erro} aria-describedby={erro ? `c-${id}-erro` : undefined} className={campo} {...p} />
      {erro && <p id={`c-${id}-erro`} role="alert" className="text-sm text-err">{erro}</p>}
    </div>
  );
}

/**
 * O cofre: o formulário é a porta. Ao desbloquear, a porta gira nas dobradiças e mostra
 * a conta sendo fechada lá dentro (substitui a tela "calculando" da v1).
 */
export function Cofre({ id, indice, desbloqueado, aberto, enviado, nome, aoEnviar, aoErro, aoAbrir, alternativa }: {
  id: string; indice: number; desbloqueado: boolean; aberto: boolean; enviado?: boolean; nome?: string;
  aoEnviar: (c: Contato, isca: boolean) => void | Promise<void>; aoErro: () => void; aoAbrir: () => void;
  alternativa?: ReactNode;
}) {
  const [v, setV] = useState<Contato>({ nome: "", email: "", empresa: "", whatsapp: "" });
  const [isca, setIsca] = useState("");
  const [erro, setErro] = useState<{ campo: keyof Contato; mensagem: string } | null>(null);
  const [frase, setFrase] = useState(0);
  const [pronto, setPronto] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [falhaEnvio, setFalhaEnvio] = useState<string | null>(null);
  const muda = (k: keyof Contato) => (e: { target: { value: string } }) => { setV({ ...v, [k]: e.target.value }); setFalhaEnvio(null); setErro(null); };
  const erroDe = (k: keyof Contato) => (erro?.campo === k ? erro.mensagem : null);

  useEffect(() => {
    if (!aberto || pronto) return;
    const rapido = reduzMovimento();
    const frases = window.setInterval(() => setFrase((x) => Math.min(x + 1, FRASES.length - 1)), 600);
    const fim = window.setTimeout(() => { setPronto(true); aoAbrir(); }, rapido ? 400 : 2600);
    return () => { window.clearInterval(frases); window.clearTimeout(fim); };
  }, [aberto]); // eslint-disable-line react-hooks/exhaustive-deps

  const enviar = async (e: FormEvent) => {
    e.preventDefault();
    if (enviando) return;
    const r = validarContato(v);
    if (!r.ok) {
      setErro({ campo: r.campo, mensagem: r.mensagem });
      document.getElementById(`c-${r.campo}`)?.focus();
      aoErro();
      return;
    }
    setErro(null);
    setFalhaEnvio(null);
    setEnviando(true);
    try { await aoEnviar(r.contato, isca.trim() !== ""); }
    catch (erro) {
      setFalhaEnvio(erro instanceof Error && erro.name !== "TimeoutError" && erro.name !== "TypeError" ? erro.message : "Não conseguimos enviar seu acesso. Confira sua conexão e tente novamente.");
      aoErro();
    } finally { setEnviando(false); }
  };

  return (
    <section id={id} data-indice={indice} aria-labelledby={`${id}-t`} className="relative flex min-h-[100dvh] items-center px-5 py-20 md:px-8">
      {!desbloqueado && (
        <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center px-6">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-ink/90 text-center shadow-[0_24px_48px_-16px_oklch(0.05_0.03_265)]">
            <div className="fita-zebrada h-2.5" />
            <div className="px-6 py-5">
              <Lock className="mx-auto size-8 text-warn" strokeWidth={2} />
              <p className="mt-2 font-bold">Cofre trancado</p>
              <p className="mt-1 text-sm text-muted-foreground">Passe pelas 6 estações para abrir.</p>
            </div>
          </div>
        </div>
      )}
      <div className={cn("mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-14", !desbloqueado && "pointer-events-none opacity-40 blur-[6px]")} inert={!desbloqueado}>
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-navy/80 py-1 pl-1 pr-3 text-xs font-semibold">
            <span className="grid size-6 place-items-center rounded-full bg-warn text-ink"><KeyRound className="size-3.5" strokeWidth={2.6} /></span>
            O cofre
          </p>
          <h2 id={`${id}-t`} className="mt-4 text-balance text-[2rem] font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            {enviado ? "Confira seu e-mail." : aberto ? "Cofre aberto." : "Desbloqueie os seus resultados."}
          </h2>
          <p className="mt-4 max-w-[46ch] text-pretty leading-relaxed text-muted-foreground md:text-lg">
            {enviado ? "Enviamos um link pessoal para você acessar seu diagnóstico. Confira também a pasta de spam." : aberto
              ? `Pronto${nome ? `, ${nome.split(" ")[0]}` : ""}. O painel de controle com os seus números está logo abaixo.`
              : "Seis estações, cinco módulos avaliados. Informe seu e-mail para receber o link pessoal do resultado."}
          </p>
        </div>

        <div className="relative rounded-[2.4rem] border border-white/10 bg-[oklch(0.1_0.035_265)] p-2.5 shadow-[inset_0_2px_6px_oklch(0.03_0.02_265)] [perspective:1600px] md:p-3">
          {/* Interior do cofre: aparece quando a porta gira. */}
          <div className="absolute inset-2.5 grid place-items-center overflow-hidden rounded-[2rem] border border-ciano/30 md:inset-3 bg-[radial-gradient(70%_60%_at_50%_45%,oklch(0.82_0.15_210/0.22),oklch(0.11_0.04_265)_70%)]" aria-live="polite">
            {aberto && (
              <div className="px-6 text-center">
                <div className="mx-auto mb-6 grid w-max grid-cols-4 gap-x-3 gap-y-2 border-b-2 border-ciano/30 pb-2">
                  {PECAS.concat(PECAS, PECAS).map(({ Icone, cor }, k) => (
                    <motion.span
                      key={k}
                      initial={{ opacity: 0, transform: "translateY(10px) scale(0.9)" }}
                      animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
                      transition={{ duration: 0.35, delay: 0.7 + k * 0.05, ease: EASE }}
                      className={cn("grid size-9 place-items-center rounded-lg border border-white/15 bg-navy", cor)}
                    >
                      <Icone className="size-4" strokeWidth={2.2} />
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  initial={{ opacity: 0, transform: "scale(0.9)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  transition={{ duration: 0.4, delay: 0.5, ease: EASE }}
                  className="mx-auto grid size-16 place-items-center rounded-full bg-ciano text-ink"
                >
                  {pronto ? <Check className="size-8" strokeWidth={3} /> : <LockOpen className="size-8" strokeWidth={2.2} />}
                </motion.span>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={pronto ? "pronto" : frase}
                    initial={{ opacity: 0, transform: "translateY(6px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="mt-5 text-lg font-bold"
                  >
                    {pronto ? "Conta fechada. Desça até o painel." : "Seu diagnóstico está pronto."}
                  </motion.p>
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* A porta (com o formulário). */}
          <motion.div
            initial={false}
            animate={aberto ? { rotateY: -108, opacity: 0.0 } : { rotateY: 0, opacity: 1 }}
            transition={{ rotateY: { duration: 1.4, ease: [0.77, 0, 0.175, 1] }, opacity: { duration: 0.5, delay: 1.0 } }}
            style={{ transformOrigin: "0% 50%" }}
            className={cn("relative rounded-[2rem] border border-white/15 bg-[linear-gradient(160deg,oklch(0.24_0.05_265),oklch(0.14_0.045_265))] p-5 shadow-[inset_0_1px_0_oklch(1_0_0/0.12),0_40px_80px_-30px_oklch(0.04_0.03_265)] md:p-8", aberto && "pointer-events-none")}
            inert={aberto}
          >
            {/* Rebites e dobradiças. */}
            {["left-3 top-3", "right-3 top-3", "bottom-3 left-3", "bottom-3 right-3"].map((p) => (
              <span key={p} aria-hidden className={cn("absolute size-2 rounded-full bg-white/25 shadow-[inset_0_1px_0_oklch(1_0_0/0.35)]", p)} />
            ))}
            <span aria-hidden className="absolute -left-1.5 top-10 h-10 w-3 rounded-full bg-white/25" />
            <span aria-hidden className="absolute -left-1.5 bottom-10 h-10 w-3 rounded-full bg-white/25" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-offwhite/90">Preencha e abra o cofre</p>
              <motion.span
                key={aberto ? "aberto" : "fechado"}
                aria-hidden
                initial={{ opacity: 0, transform: "scale(0.7) rotate(-12deg)" }}
                animate={{ opacity: 1, transform: "scale(1) rotate(0deg)" }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.4 }}
                className={cn(
                  "grid size-14 place-items-center rounded-2xl border-2 md:size-16",
                  aberto ? "border-ok/60 bg-ok/15 text-ok" : "border-warn/50 bg-warn/10 text-warn",
                )}
              >
                {aberto ? <LockOpen className="size-7 md:size-8" strokeWidth={2.2} /> : <Lock className="size-7 md:size-8" strokeWidth={2.2} />}
              </motion.span>
            </div>
            {enviado ? <div role="status" className="mt-6 rounded-xl border border-ciano/35 bg-ciano/10 p-5 text-base leading-relaxed text-offwhite">Seu diagnóstico está pronto. Abra o link que enviamos ao seu e-mail para ver os resultados. O acesso vale por sete dias.</div> : <form onSubmit={enviar} noValidate className="@container mt-4">
              <fieldset disabled={enviando} className="grid gap-x-3.5 gap-y-1.5 @min-[26rem]:grid-cols-2">
                <Campo id="nome" nome="Nome" erro={erroDe("nome")} autoComplete="name" value={v.nome} onChange={muda("nome")} />
                <Campo id="email" nome="E-mail corporativo" erro={erroDe("email")} type="email" inputMode="email" autoComplete="email" value={v.email} onChange={muda("email")} />
                <Campo id="empresa" nome="Empresa (opcional)" erro={erroDe("empresa")} autoComplete="organization" value={v.empresa} onChange={muda("empresa")} />
                <Campo id="whatsapp" nome="WhatsApp (opcional)" erro={erroDe("whatsapp")} type="tel" inputMode="tel" autoComplete="tel" value={v.whatsapp} onChange={muda("whatsapp")} />
                <input type="text" name="ref_url_x" tabIndex={-1} autoComplete="off" aria-hidden value={isca} onChange={(e) => setIsca(e.target.value)} className="absolute -left-[9999px] h-0 w-0 opacity-0" />
              </fieldset>
              {falhaEnvio && <div className="mt-4"><p role="alert" className="text-sm text-err">{falhaEnvio}</p>{alternativa}</div>}
              <button
                type="submit"
                disabled={enviando}
                aria-busy={enviando}
                className="mt-6 inline-flex min-h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-ciano px-6 text-base font-extrabold text-ink shadow-[0_12px_28px_-12px_oklch(0.82_0.15_210/0.8)] transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] md:w-auto"
              >
                <KeyRound className="size-5" strokeWidth={2.4} />
                {enviando ? "Enviando acesso…" : "Enviar link por e-mail"}
              </button>
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-muted-foreground">
                Seus dados e o diagnóstico são encaminhados à equipe Always On para acompanhamento.
              </p>
            </form>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
