import { useMemo, useState, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { ArrowRight, Building2, CalendarCheck, Car, GraduationCap, Landmark, Plane, RadioTower, ShoppingCart, Store, Warehouse } from 'lucide-react';
import { calcularAssessment, linkEmail, payloadDiagnostico, resumoTexto } from './assessment/calc';
import { MODULOS, NOTA_METODO, RECEITAS, SETORES } from './assessment/data';
import { type Contato } from './assessment/contato';
import { podeEntrar, TOTAL_ESTACOES } from './assessment/fluxo';
import { Radar } from './assessment/Radar';
import { Portao } from './fabrica/Portao';
import { Estacao, Opcoes, RotuloPergunta } from './fabrica/Estacao';
import { Cabecalho } from './fabrica/Cabecalho';
import { TrilhoPassos } from './fabrica/MapaPassos';
import { Esteira } from './fabrica/Esteira';
import { Navegacao } from './fabrica/Navegacao';
import { Cofre } from './fabrica/Cofre';
import { rolarPara, useSecaoVisivel } from './fabrica/rolar';
import { FluxoConvergente } from './components/ui/fluxo-convergente';
import { useEhDesktop } from './lib/useEhDesktop';
import { som } from './audio/som';
import { ResultadoAssessment } from './assessment/Resultado';
import { obterAssessment, registrarAssessment } from './assessment/envio';

const IDS = ['estacao-perfil', ...MODULOS.map(m => `modulo-${m.nome}`)];
const ICONES_SETORES = [Store, ShoppingCart, Landmark, GraduationCap, Plane, Car, RadioTower, Building2];
const ICONES_RECEITAS = RECEITAS.map(() => Warehouse);
const botao = 'mt-8 inline-flex min-h-14 items-center gap-3 rounded-2xl bg-ciano px-6 font-extrabold text-ink';
export default function App() {
  const [scores, setScores] = useState(() => MODULOS.map(() => [5,5,5,5]));
  const [receita, setReceita] = useState(2500);
  const [setor, setSetor] = useState('Varejo');
  const [ligada, setLigada] = useState(false);
  const [feitas, setFeitas] = useState(() => Array<boolean>(TOTAL_ESTACOES).fill(false));
  const [contato, setContato] = useState<Contato | null>(null);
  const [aberto, setAberto] = useState(false);
  const [painel, setPainel] = useState(false);
  const [registro, setRegistro] = useState<string | null>(null);
  const [falha, setFalha] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [token] = useState(() => window.location.hash.startsWith('#resultado=') ? window.location.hash.slice('#resultado='.length) : '');
  const [resultadoLink, setResultadoLink] = useState<{id:string;respostas:number[][];receita:number}|null>(null);
  const [erroLink, setErroLink] = useState<string|null>(null);
  useEffect(() => {
    if (!token) return;
    let ativo = true;
    obterAssessment(token).then(d => { if (ativo) setResultadoLink(d); }).catch(e => { if (ativo) setErroLink(e instanceof Error ? e.message : 'Não foi possível abrir este resultado.'); });
    return () => { ativo = false; };
  }, [token]);
  const r = useMemo(() => calcularAssessment(scores, receita), [scores, receita]);
  const payload = payloadDiagnostico({nome:contato?.nome || '', email:contato?.email || '', empresa:contato?.empresa || '', cel:contato?.whatsapp || '', setor},scores,receita);
  const visivel = useSecaoVisivel(painel);
  const desktop = useEhDesktop();
  const totalFeitas = feitas.filter(Boolean).length;
  useEffect(() => { som.definirNivel(totalFeitas); }, [totalFeitas]);
  const irEstacao = (i: number) => { if (podeEntrar(ligada,feitas,i)) { som.tocar('clique'); rolarPara(IDS[i]); } };
  const confirmar = (i: number) => {
    setFeitas(f => f.map((v,k) => k === i ? true : v));
    som.tocar('selecao');
    rolarPara(i < 5 ? IDS[i+1] : 'cofre', 100);
  };
  const enviar = async (c: Contato, isca: boolean) => {
    if (enviando) return;
    setEnviando(true);
    setFalha(null);
    setContato(c);
    const p = payloadDiagnostico({nome:c.nome,email:c.email,empresa:c.empresa,cel:c.whatsapp,setor},scores,receita);
    try {
      await registrarAssessment(p, isca);
      setEmailEnviado(true); som.tocar('revelar');
    } finally { setEnviando(false); }
  };
  const abrirPainel = () => { setPainel(true); rolarPara('resultado',100); };
  if (token) {
    const resultado = resultadoLink ? calcularAssessment(resultadoLink.respostas, resultadoLink.receita) : null;
    return <MotionConfig reducedMotion="user"><main className="min-h-screen px-5 py-12 md:px-8"><div className="mx-auto max-w-6xl"><img src="/maestro-wordmark.svg" alt="Maestro" className="mb-10 h-9 w-auto" />{erroLink ? <div role="alert" className="rounded-2xl border border-warn/40 bg-navy p-6"><h1 className="text-2xl font-extrabold">Não foi possível abrir o diagnóstico.</h1><p className="mt-3 text-muted-foreground">{erroLink}</p><a className="mt-5 inline-block font-bold text-ciano underline underline-offset-4" href="/">Responder novamente</a></div> : resultado ? <><ResultadoAssessment r={resultado} registro={resultadoLink!.id}/><section className="mt-12 border-t border-white/12 py-10"><h2 className="text-3xl font-extrabold">Da leitura à próxima decisão.</h2><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Este assessment mostrou onde o valor escapa. A Sessão Executiva mostra quanto dá para recuperar — e por onde começar.</p><a href="https://calendly.com/elcio-santos/30min" target="_blank" rel="noopener noreferrer" className={botao}><CalendarCheck className="size-5"/>Agendar Sessão Executiva</a></section><footer className="border-t border-white/12 pt-6 text-xs leading-relaxed text-muted-foreground">* {NOTA_METODO}</footer></> : <p role="status">Abrindo seu diagnóstico…</p>}</div></main></MotionConfig>;
  }
  return <MotionConfig reducedMotion="user">
    <a href="#estacao-perfil" onClick={() => setLigada(true)} className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:z-50 focus:bg-ink focus:p-4">Ir para o questionário</a>
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(60%_50%_at_85%_0%,oklch(0.55_0.25_295/0.16),transparent),radial-gradient(50%_45%_at_0%_100%,oklch(0.82_0.15_210/0.1),transparent)]" />
    <FluxoConvergente className="fixed inset-0 -z-10 opacity-45" />
    <Cabecalho noPortao={visivel===0} estacao={Math.min(Math.max(visivel,1),6)} feitas={feitas} aoIr={irEstacao} />
    <TrilhoPassos mostrar={visivel>0} feitas={feitas} atual={Math.min(Math.max(visivel,1),6)} aoIr={irEstacao} />
    <main className="pb-[calc(var(--esteira-h)+var(--nav-h)+env(safe-area-inset-bottom))] lg:pl-64">
      <Portao id="portao" indice={0} ligada={ligada} desktop={desktop} aoLigar={() => { setLigada(true); som.iniciar(); som.tocar('clique'); rolarPara(IDS[0],100); }} />
      <Estacao id={IDS[0]} indice={1} numero={1} total={6} setor="Recepção" titulo="Antes de tudo: onde a sua empresa joga?" desbloqueada={ligada}>
        <fieldset disabled={aberto || enviando} className="grid gap-6">
          <div><h3 className="mb-3 text-lg font-extrabold">Qual é o seu setor?</h3><Opcoes rotulo="Setor da empresa" opcoes={[...SETORES]} icones={ICONES_SETORES} escolhida={SETORES.indexOf(setor as typeof SETORES[number])} aoEscolher={i=>setSetor(SETORES[i])} /></div>
          <div><h3 className="mb-3 text-lg font-extrabold">Faixa de receita anual</h3><Opcoes rotulo="Faixa de receita anual" opcoes={RECEITAS.map(x=>x.rotulo)} icones={ICONES_RECEITAS} escolhida={RECEITAS.findIndex(x=>x.valor===receita)} aoEscolher={i=>setReceita(RECEITAS[i].valor)} /></div>
        </fieldset>
        <button type="button" className={botao} onClick={()=>confirmar(0)}>Confirmar contexto <ArrowRight className="size-5" /></button>
      </Estacao>
      {MODULOS.map((m,i)=><Estacao key={m.nome} id={IDS[i+1]} indice={i+2} numero={i+2} total={6} setor={`Maestro ${m.nome}`} titulo={m.subtitulo} ajuda="4 perguntas por módulo. Dê uma nota de 0 a 10: quanto maior, menos valor vaza." desbloqueada={podeEntrar(ligada,feitas,i+1)} anterior={`a estação ${i+1}`} lado={i%2?'esq':'dir'} alegoria={<div className="overflow-hidden rounded-2xl border border-ciano/25 bg-navy/80"><div className="fita-zebrada h-2"/><div className="p-6"><h3 className="text-xl font-extrabold text-ciano">Maestro {m.nome}</h3><Radar notas={r.notas}/><p className="text-sm font-bold text-ciano">{m.areas.join(' · ')}</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.prova}</p><p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.fonte}</p></div></div>}>
        <fieldset disabled={aberto || enviando} className="grid gap-8">{m.perguntas.map((q,j)=><div key={q}><label htmlFor={`nota-${i}-${j}`}><RotuloPergunta n={j+1} total={4} texto={q} respondida={feitas[i+1]}/></label><div className="mt-3 flex items-center gap-4"><input id={`nota-${i}-${j}`} aria-label={`${m.nome}, pergunta ${j+1}: ${q}`} type="range" min="0" max="10" step="1" value={scores[i][j]} onChange={e=>{const v=+e.target.value;setScores(s=>s.map((a,k)=>k===i?a.map((n,p)=>p===j?v:n):a));}} className="assessment-range w-full"/><output htmlFor={`nota-${i}-${j}`} className="min-w-10 text-right text-3xl font-extrabold tabular-nums text-ciano">{scores[i][j]}</output></div><div aria-hidden className="mt-1 flex justify-between text-xs text-muted-foreground"><span>0 · Ainda não acontece</span><span>10 · Sob controle</span></div></div>)}</fieldset>
        <button type="button" onClick={()=>confirmar(i+1)} className={botao}>Confirmar {m.nome} <ArrowRight className="size-5"/></button>
      </Estacao>)}
      <Cofre id="cofre" indice={7} desbloqueado={feitas.every(Boolean)} aberto={false} enviado={emailEnviado} nome={contato?.nome} aoEnviar={enviar} aoErro={()=>som.tocar('erro')} aoAbrir={abrirPainel}
        alternativa={<p className="mt-4 text-sm text-muted-foreground">Corrija os dados ou tente novamente. Seu diagnóstico permanece no formulário.</p>}/>
      {painel && <section id="resultado" data-indice={8} aria-label="Painel de controle" className="px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-6xl">{!registro && <p role="status" className="mb-5 rounded-xl border border-warn/30 bg-navy p-4 text-sm text-warn">Este diagnóstico ainda não foi gravado. <button type="button" onClick={()=>rolarPara("cofre")} className="font-bold underline underline-offset-4">Voltar ao formulário para tentar novamente</button></p>}<ResultadoAssessment r={r} registro={registro}/>
        {falha && <div role="alert" className="mt-8 rounded-2xl border border-warn/30 bg-navy p-6"><p className="text-warn">{falha}</p><a href={linkEmail(payload)} className="mt-4 inline-block font-bold text-ciano underline underline-offset-4">Enviar pelo meu e-mail</a><label className="mt-4 block text-sm font-bold">Ou copie o resumo<textarea readOnly value={resumoTexto(payload)} rows={8} className="mt-2 w-full rounded-xl border border-white/15 bg-ink p-4 text-sm font-normal" onFocus={e=>e.target.select()}/></label></div>}
        <section className="mt-12 border-t border-white/12 py-10"><h2 className="text-3xl font-extrabold">Da leitura à próxima decisão.</h2><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Este assessment mostrou onde o valor escapa. A Sessão Executiva mostra quanto dá para recuperar — e por onde começar, com governança e sem trocar o seu stack.</p><a href="https://calendly.com/elcio-santos/30min" target="_blank" rel="noopener noreferrer" className={botao}><CalendarCheck className="size-5"/>Agendar Sessão Executiva</a></section><footer className="border-t border-white/12 pt-6"><p className="text-xs leading-relaxed text-muted-foreground">* {NOTA_METODO}</p><img src="/maestro-wordmark.svg" alt="Maestro" className="mt-8 h-8 w-36"/></footer>
      </div></section>}
    </main>
    <Navegacao mostrar={visivel>=1&&visivel<=6} noPortao={visivel===0} faltam={6-totalFeitas} podeVoltar={visivel>1} podeAvancar={!!feitas[visivel-1]} rotuloProximo={visivel===6?'Resultado':'Próximo'} aoVoltar={()=>irEstacao(visivel-2)} aoAvancar={()=>rolarPara(visivel===6?'cofre':IDS[visivel])}/>
    <Esteira feitos={totalFeitas} total={6}/>
  </MotionConfig>;
}
