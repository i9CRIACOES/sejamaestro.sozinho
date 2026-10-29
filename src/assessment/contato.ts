export type Contato = { nome: string; email: string; empresa: string; whatsapp: string };
export function validarContato(c: Contato): {ok: true; contato: Contato} | {ok: false; campo: keyof Contato; mensagem: string} {
  const contato = {nome: c.nome.trim().slice(0,120), email: c.email.trim().toLowerCase().slice(0,254), empresa: c.empresa.trim().slice(0,120), whatsapp: c.whatsapp.trim().slice(0,120)};
  if (!contato.nome) return {ok:false,campo:'nome',mensagem:'Informe seu nome.'};
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contato.email)) return {ok:false,campo:'email',mensagem:'Informe um e-mail válido.'};
  return {ok:true,contato};
}
