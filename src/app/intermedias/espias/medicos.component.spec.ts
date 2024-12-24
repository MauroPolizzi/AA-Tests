import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, Observable, observable, of, scheduled, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    // Aqui creamos un espia para la instancia falsa del metodo get de HttpClient
    const spy = jasmine.createSpyObj('HttpClient', {get: of({}) });
    // Y se la pasamos por parametro al servicio
    const servicio = new MedicosService( spy );

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los medicos', () => {

       const medicos = ['medico 1', 'medico 2', 'medico 3'];

       // Utilizamos la function de spia
       spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return from( [medicos] );
       });

       // Llamamos al metodo donde utiliza el get de HttpClient
       componente.ngOnInit();

       // Comprobamos que sea mayor a cero
       expect( componente.medicos.length ).toBeGreaterThan(0);
    });

    it('Debe de llamar al servicio cuando agrega un medico', () => {

        // Creamos una constante para encapsular el valor del espia
        const espia = spyOn( servicio, 'agregarMedico' ).and.callFake( () => new Observable() );

        // Llamamos al metodo del componente
        componente.agregarMedico();

        // Validamos que el espia haya sido llamado
        expect( espia ).toHaveBeenCalled();
    });

    it('Debe de agregar un medico al array de medicos', () => {
        
        // Creamos un objeto de medico
        const medico = { id: 1, nombre: 'Juan' };

        // Creamos el espia y pasamos el obj del medico
        spyOn( servicio, 'agregarMedico' ).and.returnValue( from( [medico] ) );

        componente.agregarMedico();

        // Verificamos que dentro del array de medicos este el medico que pasamos anteriormente
        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);
    });

    it('Si falla, se debe de capturar el error del servidor', () => {
        
        const error = 'No se pudo agregar al medico';

        // Creamos el espia y devolvemos un error
        spyOn( servicio, 'agregarMedico' ).and.returnValue( throwError( error ) );

        componente.agregarMedico();

        //console.log(componente.mensajeError);
        expect( componente.mensajeError ).toBe( error );
    });

    it('Debe de llamar al servicio cuando borra un medico', () => {

        // Creamos un espia para simular la respuesta en el alert de confirmacion
        spyOn( window, 'confirm' ).and.returnValue(true);

        const espia = spyOn( servicio, 'borrarMedico' ).and.callFake( () => new Observable() );

        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1');
    });

    it('No debe de llamar al servicio cuando no se borra un medico', () => {

        // Creamos un espia para simular la respuesta en el alert de confirmacion
        spyOn( window, 'confirm' ).and.returnValue(false);

        const espia = spyOn( servicio, 'borrarMedico' ).and.callFake( () => new Observable() );

        componente.borrarMedico('1');

        expect( espia ).not.toHaveBeenCalledWith('1');
    });
});
