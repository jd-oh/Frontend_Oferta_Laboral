import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-eliminar-departamento',
  templateUrl: './eliminar-departamento.component.html',
  styleUrls: ['./eliminar-departamento.component.css']
})
export class EliminarDepartamentoComponent implements OnInit {

  listaDatos: String[] = [];
  id: number = 0;

  constructor(
    private servicio: DepartamentoService,
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
        this.router.navigate(["/parametros/listar-departamentos"]);
      },
      (err) => {
        alert("Error eliminando el registro");
      }
    );
  }
}
