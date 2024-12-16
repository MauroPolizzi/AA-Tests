import { mensaje } from "./string";

// Archivo propio de pruebas

// Doy una descripcion general de lo que se probará en este archivo de pruebas
describe('Pruebas de string', () => {

    it('Debe regresar un string', () => {
        // Guardamos el contenido de la function en una const
        const resp = mensaje('Mauro');
    
        // Evaluamos el valor de la resp
        // Evalua el tipo de dato que es resp
        expect( typeof resp ).toBe('string');
    });
    
    it('Debe contener el parametro proporcionado', () => {
        // Guardamos el valor del parametro
        const nombre = 'Mauro';
        // Guardamos el contenido de la function en una const
        const resp = mensaje(nombre);
    
        // Evaluamos el valor de la resp
        // Evalua que contenga el paramtro proporcionado
        expect( resp ).toContain(nombre);
    });
});