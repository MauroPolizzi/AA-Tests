import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        const leyenda: string = 'Progreso de carga';
        component.leyenda = leyenda;

        fixture.detectChanges(); // Disparamos la deteccion de cambios de Angular luego de modiicar el html de un cmpt

        // Guardamos en variable el contenido del elemento html que queremos buscar
        // en este caso buscamos el primer <h3></h3> que encuentre.
        const element: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        // Verificamos que contenga lo que mandamos
        expect( element.innerHTML ).toContain( leyenda );
    });

    // Realizamos esta prueba de manera asincronica
    // La function done() determinara cuando termina la prueba
    it('Debe de mostrar en el input el valor del progreso', (done) => {
        
        component.cambiarValor(5);
        fixture.detectChanges();

        // Hay veces que la deteccion de cambios no llega a tiempo, 
        // por esoo usamos el whenStable que devuelve el resultado luego de la deteccion de cambios
        // teniendo asi, siempre el fixture actualizado a lo ultimo.
        fixture.whenStable().then( () => {
            const element: HTMLInputElement = fixture.debugElement.query( By.css('input') ).nativeElement;

            expect( element.valueAsNumber ).toBe(55);
            done();
        });
    });

    it('Debe de incrementar/decrementar al hacer click', () => {
        
        // Obtenemos ambos botones, por su class
        const buttons = fixture.debugElement.queryAll( By.css('.btn-primary') );

        // Asignamos el evento click a los botones
        buttons[0].triggerEventHandler('click', null);

        // Verificamos que de el resultado esperado
        expect( component.progreso ).toBe(45);

        // Verificamos el segundo boton
        buttons[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50); // Aun no se restablecio el valor, por ende esta en 45 el progreso, y si sumo 5 debe dar 50
    });
    
    it('Debe de cambiar el valor del progreso', (done) => {
        
        const valorPorDefectoProgreso: number = component.progreso;

        component.cambiarValor(10);
        fixture.detectChanges();

        fixture.whenStable().then( () => {
            expect( component.progreso ).not.toBe(valorPorDefectoProgreso);
            done();
        });
    });
    
});
