// En este archivo van las pruebas unitarias al componente
import { IncrementadorComponent } from "./incrementador.component";

describe('Incrementador Component Unit', () => {
    
    let component: IncrementadorComponent;

    // Realizamos una instancia del componente antes de cada prueba
    beforeEach(() => component = new IncrementadorComponent());
    

    it('No debe de pasar de 100 el incrementador', () => {
        
        component.progreso = 100;
        component.cambiarValor(90);

        expect( component.progreso ).toBe(100);
    });
});
