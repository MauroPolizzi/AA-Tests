// En las pruebas de integracion importamos esta clase para referenciar las las propiedades de los componentes de Angular
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { MedicoComponent } from "./medico.component";
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Pruebas de integracion - Medico component', () => {
    
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    // Configuramos la class de TestBed para simular el componente que queremos testear
    beforeEach( () => {

        TestBed.configureTestingModule({
            // En estas configuraciones, irán las clases, cmpt o servicios a usar
            // Es el modulo propio para nuestra prueba de integracion
            declarations: [MedicoComponent], // Declaramos el componente a probar
            providers: [MedicoService], // Proveemos el servicio que utiliza el MedicoComponent
            imports: [HttpClientModule] // Iportamos el modulo de http que utiliza el servicio de MedicoService
        });

        // Esto crea el componente y devuelve un fixture, el cual contiene el html donde podremos 
        // tener acceso al DOM del componente
        fixture = TestBed.createComponent( MedicoComponent ); // Crea el cmpt y es asignado a la variable
        component = fixture.componentInstance; // Tenemos la instancia del componente
    });

    // Verificamos que la configuracion de la crear el componente se realizo ok
    it('Debe de crearse el componente', () => {
        
        expect( component ).toBeTruthy();
    });

    // Verificamos una function propia del componente creado e instanciado
    it('Debe de retornar un saludo con el nombre enviado', () => {
        
        const nombre = 'Mauro';
        const response = component.saludarmedico(nombre);
        
        expect( response ).toContain( nombre );
    });
});