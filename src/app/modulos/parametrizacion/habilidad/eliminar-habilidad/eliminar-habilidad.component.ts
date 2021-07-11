import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-eliminar-habilidad',
  templateUrl: './eliminar-habilidad.component.html',
  styleUrls: ['./eliminar-habilidad.component.css']
})
export class EliminarHabilidadComponent implements OnInit {

  listaDatos: String[] = [];
  id: number = 0;

  constructor(
    private servicio: HabilidadService,
    private router: Router,
    private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.ObtenerRegistroPorId(id);
  }

  ObtenerRegistroPorId(id: number) {
    this.servicio.BuscarRegistro(id).subscribe(
      (datos) => {
        if (datos.id && datos.nombre) {
          this.listaDatos.push(datos.id?.toString());
          this.listaDatos.push(datos.nombre);
          this.id = datos.id;
        }
      },
      (err) => {
        alert("No se encuentra el registro con id " + id);
      }
    );
  }

  EliminarRegistro() {
    let id = this.id;
    this.servicio.EliminarRegistro(id).subscribe(
      (datos) => {
        alert("Registro eliminado correctamente.");
        this.router.navigate(["/parametros/listar-habilidades"]);
      },
      (err) => {
        alert("Error eliminando el registro");
      }
    );
  }
}
