import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { InscripcionFormComponent } from './inscripcion-form/inscripcion-form.component';


@NgModule({
  declarations: [
    InscripcionComponent,
    InscripcionFormComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule { }
