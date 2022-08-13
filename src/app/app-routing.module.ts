import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginasComponent } from './aplicacion/paginas/paginas.component';

const routes: Routes = [
  {
    path: 'seguridad',
    loadChildren: () => import('./aplicacion/seguridad/seguridad.module').then((m) => m.SeguridadModule),
    title: 'Seguridad'
  },
  {
    path: '',
    component: PaginasComponent,
    children: [
      { path: '', loadChildren: () => import('./aplicacion/paginas/inicio/inicio.module').then(m => m.InicioModule), data: { breadcrumb: 'Inicio' } },
      { path: 'personas', loadChildren: () => import('./aplicacion/paginas/personas/personas.module').then(m => m.PersonasModule), data: { breadcrumb: 'PalabrasEN' } },
      { path: 'cursos', loadChildren: () => import('./aplicacion/paginas/cursos/cursos.module').then(m => m.CursosModule), data: { breadcrumb: 'PalabrasES' } },
      { path: 'inscripciones', loadChildren: () => import('./aplicacion/paginas/inscripciones/inscripciones.module').then(m => m.InscripcionesModule), data: { breadcrumb: 'FrasesEN' } },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
