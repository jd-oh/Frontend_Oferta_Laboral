import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { HabilidadModelo } from '../modelos/habilidad.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  url: String = DatosGenerales.url;
  token?: String = "";

  constructor(private http: HttpClient, 
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerToken();
  }

  ListarRegistros(): Observable<HabilidadModelo[]> {
    return this.http.get<HabilidadModelo[]>(`${this.url}/habilidad`);
  }


  BuscarRegistro(id: number): Observable<HabilidadModelo> {
    return this.http.get<HabilidadModelo>(`${this.url}/habilidad/${id}`);
  }

  AlmacenarRegistro(modelo: HabilidadModelo): Observable<HabilidadModelo> {
    return this.http.post<HabilidadModelo>(
      `${this.url}/habilidad`,
      {
        nombre: modelo.nombre
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }


  ModificarRegistro(modelo: HabilidadModelo): Observable<HabilidadModelo> {
    return this.http.put<HabilidadModelo>(
      `${this.url}/habilidad/${modelo.id}`,
      {
        nombre: modelo.nombre
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(id: number): Observable<HabilidadModelo> {
    return this.http.delete<HabilidadModelo>(
      `${this.url}/habilidad/${id}`,
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }
}
