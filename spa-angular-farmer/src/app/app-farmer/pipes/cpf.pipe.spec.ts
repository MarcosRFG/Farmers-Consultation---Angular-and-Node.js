import { CpfPipe } from './cpf.pipe';

describe('pipe: CpfPipe', () => {
    let cpf: CpfPipe;

    beforeEach(()=> {
        cpf = new CpfPipe();
    });

    it('Pipe: format CPF ', ()=>{
        expect(cpf.transform('01234567891')).toBe('012.345.678-91');
    });

});