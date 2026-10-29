import { describe, it, expect } from 'vitest';
import { podeEntrar } from '../src/assessment/fluxo';
import { validarContato } from '../src/assessment/contato';

describe('fluxo da fábrica', () => {
  it('impede atalhos antes de ligar e confirmar as estações anteriores', () => {
    const feitas = [true, false, false, false, false, false];
    expect(podeEntrar(false, feitas, 0)).toBe(false);
    expect(podeEntrar(true, feitas, 1)).toBe(true);
    expect(podeEntrar(true, feitas, 2)).toBe(false);
    expect(podeEntrar(true, [false,true,true,true,true,true], 5)).toBe(false);
    expect(podeEntrar(true, Array(6).fill(true), 5)).toBe(true);
    expect(podeEntrar(true, feitas, 6)).toBe(false);
  });
  it('exige nome e e-mail e mantém empresa e telefone opcionais do artefato', () => {
    const c = {nome:' Ana ',email:' ANA@EXAMPLE.COM ',empresa:'',whatsapp:''};
    expect(validarContato({...c,nome:''}).ok).toBe(false);
    expect(validarContato({...c,email:'inválido'}).ok).toBe(false);
    expect(validarContato(c)).toEqual({ok:true,contato:{nome:'Ana',email:'ana@example.com',empresa:'',whatsapp:''}});
  });
});
