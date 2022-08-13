import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonaComponent } from './persona/persona.component';
import { PersonaFormComponent } from './persona-form/persona-form.component';


@NgModule({
  declarations: [
    PersonaComponent,
    PersonaFormComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule
  ]
})
export class PersonasModule { }
