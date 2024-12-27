import { MedicoComponent } from "src/app/intermedias2/medico/medico.component";
import { ROUTES } from "./app.routes";

describe('Pruebas avanzadas de rutas', () => {
    
    it('Debe de existir la ruta medico/:id', () => {
        
        // Verificamos que exista tal objeto en el arreglo de rutas
        expect( ROUTES ).toContain( {path: 'medico/:id', component: MedicoComponent} );
    });
    
});
