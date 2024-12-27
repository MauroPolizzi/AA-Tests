import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])] // Aqui usamos el modulo de testing para probar nuestras rutas
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PruebasTests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PruebasTests');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('PruebasTests app is running!');
  });

  it('Debe contener el router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    // Buscamos el elemento por la directiva (etiqueta del html)
    const element = fixture.debugElement.query( By.directive( RouterOutlet ) );

    // Verificamos que no sea null
    expect( element ).not.toBeNull();
  });

  it('Debe de existir un routerLink hacia medico', () => {
    
    const fixture = TestBed.createComponent(AppComponent);
    const elements = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );

    //console.log(elements);

    let existeElement: boolean = false;

    for( const element of elements ){
      if(element.attributes['routerLink'] === 'medico/:id'){
        existeElement = true;
        break;
      }
    }

    expect( existeElement ).toBeTruthy();
  });
  
  
});
