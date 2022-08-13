import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursoComponent } from './curso/curso.component';
import { CursoFormComponent } from './curso-form/curso-form.component';


@NgModule({
  declarations: [
    CursoComponent,
    CursoFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
