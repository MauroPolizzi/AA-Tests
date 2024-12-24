import { Jugador2 } from "./jugador2";

describe('Pruebas EventEmitter', () => {
    
    let jugador: Jugador2;
    beforeEach( () => jugador = new Jugador2() );

    it('Debe de emitir un evento cuando recibe daño', () => {
        let nuevaVida = 0;
        jugador.cambioPuntosVida.subscribe(vida => { nuevaVida = vida; })

        jugador.recibeDanio(1000);
        
        expect( nuevaVida ).toBe(0);
    })

})
