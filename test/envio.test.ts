import { afterEach, describe, expect, it, vi } from 'vitest';
import { obterAssessment, registrarAssessment } from '../src/assessment/envio';
import { payloadDiagnostico } from '../src/assessment/calc';

const payload = payloadDiagnostico({nome:'Teste',email:'teste@example.invalid',cel:'',empresa:'',setor:'Varejo'}, Array.from({length:5},()=>[5,5,5,5]),2500);
afterEach(()=>vi.unstubAllGlobals());
describe('recuperação do envio',()=>{
  it('preserva erro de validação e permite reenviar após correção',async()=>{
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({erro:'Informe um e-mail válido.'}),{status:422}))
      .mockResolvedValueOnce(new Response(JSON.stringify({ok:true}),{status:202}));
    vi.stubGlobal('fetch',fetchMock);
    await expect(registrarAssessment(payload,false)).rejects.toThrow('Informe um e-mail válido.');
    await expect(registrarAssessment(payload,false)).resolves.toBe(true);
  });
  it('não interpreta indisponibilidade ou resposta inválida como sucesso',async()=>{
    vi.stubGlobal('fetch',vi.fn().mockResolvedValueOnce(new Response(JSON.stringify({erro:'Envio automático indisponível.'}),{status:503})).mockResolvedValueOnce(new Response('<html>erro</html>',{status:502})));
    await expect(registrarAssessment(payload,false)).rejects.toThrow('Envio automático indisponível.');
    await expect(registrarAssessment(payload,false)).rejects.toThrow('Tente novamente');
  });
  it('explica falhas de conexão sem bloquear uma nova tentativa',async()=>{
    vi.stubGlobal('fetch',vi.fn().mockRejectedValue(new TypeError('network')));
    await expect(registrarAssessment(payload,false)).rejects.toThrow('Confira sua conexão');
  });
  it('só abre o diagnóstico com token válido e sem dados de contato',async()=>{
    const token = 'a'.repeat(64);
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ok:true,id:'abc',dados:{receita:2500,modulos:Array.from({length:5},()=>({respostas:[5,5,5,5]}))}}),{status:200}));
    vi.stubGlobal('fetch',fetchMock);
    await expect(obterAssessment('invalido')).rejects.toThrow('inválido');
    await expect(obterAssessment(token)).resolves.toEqual({id:'abc',receita:2500,respostas:Array.from({length:5},()=>[5,5,5,5])});
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][1].headers['X-Resultado-Token']).toBe(token);
  });
});
