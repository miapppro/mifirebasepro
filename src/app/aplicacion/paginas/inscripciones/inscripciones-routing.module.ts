import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionComponent } from './inscripcion/inscripcion.component';

const routes: Routes = [
  { path: '', component: InscripcionComponent, title: 'Inscripciones' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
