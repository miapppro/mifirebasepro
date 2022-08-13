import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/aplicacion/modelos/persona';
import { PersonaService } from 'src/app/aplicacion/servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  lista?: Persona[];
  constructor(private pServicio: PersonaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.pServicio.obtener().subscribe(res => {
      this.lista = res;
    });
  }

  nuevo() {
    this.pServicio.crear({ nombres: 'Luis', apellidos: 'Mamani Acevedo', telefono: 62657230 }).then((res) => {
      console.log('CREADO:', res);
    });
  }

  editar(fila: any) {
    this.pServicio.editar({ id: fila.id, nombres: 'XXX', apellidos: 'XX', telefono: 50005 }).then((res) => {
      console.log('EDITADO:', res);
    });
  }

  eliminar(fila: any) {
    this.pServicio.eliminar(fila.id).then((res) => {
      console.log('ELIMINADO:', res);
    });
  }
}
