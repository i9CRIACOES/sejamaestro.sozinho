import type { payloadDiagnostico } from './calc';

/** A resposta confirma apenas o envio do link; o diagnóstico permanece privado. */
export async function registrarAssessment(payload: ReturnType<typeof payloadDiagnostico>, isca: boolean) {
  let resp: Response;
  try {
    resp = await fetch('/api/assessment.php', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...payload, isca: isca ? 'preenchido' : ''}),
      signal: AbortSignal.timeout(20000),
    });
  } catch {
    throw new Error('Não foi possível conectar. Confira sua conexão e tente novamente.');
  }
  const dados = await resp.json().catch(() => null);
  if (!resp.ok || !dados?.ok) {
    throw new Error(typeof dados?.erro === 'string' ? dados.erro : 'Não foi possível enviar o acesso. Tente novamente.');
  }
  return true;
}

export async function obterAssessment(token: string): Promise<{id: string; respostas: number[][]; receita: number}> {
  if (!/^[a-f0-9]{64}$/.test(token)) throw new Error('Este link é inválido ou expirou.');
  const resp = await fetch('/api/assessment.php?acao=resultado', {
    headers: {'X-Resultado-Token': token}, signal: AbortSignal.timeout(15000),
  });
  const json = await resp.json().catch(() => null);
  if (!resp.ok || !json?.ok) throw new Error(typeof json?.erro === 'string' ? json.erro : 'Não foi possível abrir este resultado.');
  const respostas = json.dados?.modulos?.map((m: {respostas: number[]}) => m.respostas);
  if (!Array.isArray(respostas) || !Number.isInteger(json.dados?.receita)) throw new Error('Os dados do resultado estão incompletos.');
  return {id: String(json.id), respostas, receita: json.dados.receita};
}
