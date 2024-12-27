import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  private medicos: any[] = [];

  constructor(public _medicoService: MedicoService) { }

  ngOnInit(): void {
  }
  
  public saludarmedico(nombre: string){
    return `Hola ${nombre}`;
  }

  public obtenerMedicos(){
    this._medicoService.getMedicos().subscribe( (resp: any) => this.medicos = resp );
  }
}
