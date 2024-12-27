import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './avanzadas/routes/app.routes';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedias/espias/medicos.component';
import { MedicoComponent } from './intermedias2/medico/medico.component';

import { MedicoService } from './intermedias2/medico/medico.service';
import { HospitalComponent } from './intermedias2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedias2/incrementador/incrementador.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
