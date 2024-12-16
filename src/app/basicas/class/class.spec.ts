import { Jugador } from './class';

describe('Pruebas de clases', () => {

    // Declaramos de manera global para todas las pruebas
    let jugador = new Jugador();
    
    // En esta parte vemos los ciclos de vida de las pruebas
    // Estas son functions para colocar logica que todas las pruebas requieran
    // Esto a fin de no repetir codigo.
    // En este ejemplo, pondremos la instancia de la class de Jugador antes de cada prueba
    beforeAll( () => { }); // Se ejecuta antes de todas las pruebas
    beforeEach( () => { jugador = new Jugador() }); // Se ejecuta antes de cada prueba
    afterEach( () => { }); // Se ejecuta despues de cada prueba
    afterAll( () => { }); // Se ejecuta despues de todas las pruebas

    it('Al recibir 0 de daño, debe devolver 100 de vida', () => {
        
        expect( jugador.recibeDanio(0) ).toBe(100);
    });

    it('Al recibir 50 de daño, debe devolver 50 de vida', () => {
        
        expect( jugador.recibeDanio(50) ).toBe(50);
    });

    it('Al recibir 100 de daño, debe devolver 0 de vida', () => {
        
        expect( jugador.recibeDanio(100) ).toBe(0);
    });

    // Adicionalmete veremos como saber el porcentaje de covertura de todo nuestro codigo
    // Tener en cuenta que esto evalua la cobertura de todas las lineas de codigo
    // Se debe ejecutar el siguiente comando: ng test --code-coverage
    // Esto nos crea una carpeta en la rama del proyecto
    // La misma contiene un index.html donde muestra unas metricas de la aplicacion 
});