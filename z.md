## DEPENDENCIAS
ng add @angular/material
ng add @angular/pwa
ng add @angular/fire

npm i @angular/flex-layout



## CREAR MODULO, RUTAS Y COMPONENTES
ng g i aplicacion/modelos/login

ng g m aplicacion/seguridad --routing
ng g c aplicacion/seguridad/login
ng g c aplicacion/seguridad/registro
ng g c aplicacion/seguridad/recuperacion

ng g c aplicacion/paginas
ng g m aplicacion/paginas/inicio --routing
ng g c aplicacion/paginas/inicio/inicio

ng g m aplicacion/paginas/personas --routing
ng g c aplicacion/paginas/personas/persona
ng g c aplicacion/paginas/personas/persona-form

ng g m aplicacion/paginas/cursos --routing
ng g c aplicacion/paginas/cursos/curso
ng g c aplicacion/paginas/cursos/curso-form

ng g m aplicacion/paginas/inscripciones --routing
ng g c aplicacion/paginas/inscripciones/inscripcion
ng g c aplicacion/paginas/inscripciones/inscripcion-form

ng g class aplicacion/modelos/persona
ng g s aplicacion/servicios/persona

