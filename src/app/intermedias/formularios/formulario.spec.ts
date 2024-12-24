import { FormBuilder } from "@angular/forms";
import { FormularioLogin } from "./formulario"

describe ( 'Pruebas a formularios', () => {
    
    // Declaramos variable del tipo de la class
    let component: FormularioLogin;

    // Antes de cada prueba instanciamos la variable y pasamos el builder por parametros al constructor
    beforeEach( () => {
        component = new FormularioLogin(new FormBuilder());
    });


    it('Debe crear un formulario con dos campos', () => {
        
        expect( component.form.contains('email') ).toBeTruthy();
        expect( component.form.contains('password') ).toBeTruthy();
    });

    it('El campo email debe ser obligatorio', () => {

        // Aqui obtenemos el valor del campo 'email' de nuestro formulario
        const campoEmail = component.form.get('email');

        // Inicializamos el campo email vacio
        campoEmail?.setValue('');
        expect( campoEmail?.valid ).toBeFalsy();
    });

    it('El campo email debe ser un email valido', () => {

        const campoEmail = component.form.get('email');
        campoEmail?.setValue('mpolizzi@educaria.com');
        
        expect( campoEmail?.valid ).toBeTruthy();
    });

    it('El campo password debe ser obligatorio', () => {

        const campoPassword = component.form.get('password');
        campoPassword?.setValue('');

        expect( campoPassword?.valid ).toBeFalsy();
    });

    it('El campo email y password deben ser obligatorios', () => {
        
        const campoEmail = component.form.get('email');
        const campoPassword = component.form.get('password');
        
        campoPassword?.setValue('');
        campoEmail?.setValue('');
        
        expect( campoEmail?.valid ).toBeFalsy();
        expect( campoPassword?.valid ).toBeFalsy();

        // Ahora validamos que sean correcto
        campoPassword?.setValue('1234');
        campoEmail?.setValue('mpolizzi@educaria.com');

        expect( campoEmail?.valid ).toBeTruthy();
        expect( campoPassword?.valid ).toBeTruthy();
    });
})