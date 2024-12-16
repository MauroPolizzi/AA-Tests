import { incrementar } from './number';

describe('Prueba de numeros', () => {

    it('Debe de regresar siempre un number', () => {
        // guardamos el valor que devuelve la function
        const number = incrementar(1);

        expect( typeof number ).toBe('number');
    });

    it('Al pasar un number mayor a 100, debe devolver 100', () => {
        
        // Verificamos que al pasar un valor mayor a 100, nos devuleve 100
        expect( incrementar(200) ).toBe(100);
    });

    it('Al pasar un number menor a 100, debe devolver el number + 1', () => {

        expect( incrementar(20) ).toBe(21);
    });

})