import { Component, OnInit } from '@angular/core';
import { DatosGenerales } from 'src/app/config/datos.generales';
import { HabilidadModelo } from 'src/app/modelos/habilidad.modelo';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-listar-habilidad',
  templateUrl: './listar-habilidad.component.html',
  styleUrls: ['./listar-habilidad.component.css']
})
export class ListarHabilidadComponent implements OnInit {
  pagina: number = 1;
  regPorPagina: number = DatosGenerales.numRegistrosPorPagina;
  listaRegistros: HabilidadModelo[] = [];
  constructor(private servicio: HabilidadService) { }

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
