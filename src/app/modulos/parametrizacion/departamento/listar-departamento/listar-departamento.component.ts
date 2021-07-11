import { Component, OnInit } from '@angular/core';
import { DatosGenerales } from 'src/app/config/datos.generales';
import { DepartamentoService } from 'src/app/servicios/departamento.service';
import { DepartamentoModelo } from '../../../../modelos/departamento.modelo';

@Component({
  selector: 'app-listar-departamento',
  templateUrl: './listar-departamento.component.html',
  styleUrls: ['./listar-departamento.component.css']
})
export class ListarDepartamentoComponent implements OnInit {
  pagina: number = 1;
  regPorPagina: number = DatosGenerales.numRegistrosPorPagina;
  listaRegistros: DepartamentoModelo[] = [];
  constructor(private servicio: DepartamentoService) { }

  ngOnInit(): void {
    this.ObtenerListadoDepartamentos();
  }

  ObtenerListadoDepartamentos() {
    this.servicio.ListarRegistros().subscribe(
      (datos) => {
        this.listaRegistros = datos;
      },
      (err) => {
        alert("Error cargando el listado de registros");
      }
    );
  }

  CambioPagina(p: number){
    this.pagina = p;
  }

}
