import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../config/datos.generales';
import { DepartamentoModelo } from '../modelos/departamento.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url: String = DatosGenerales.url;
  token?: String = "";

  constructor(private http: HttpClient, 
    private servicioSeguridad: SeguridadService) {
    this.token = this.servicioSeguridad.ObtenerToken();
  }

  ListarRegistros(): Observable<DepartamentoModelo[]> {
    return this.http.get<DepartamentoModelo[]>(`${this.url}/departamento`);
  }


  BuscarRegistro(id: number): Observable<DepartamentoModelo> {
    return this.http.get<DepartamentoModelo>(`${this.url}/departamento/${id}`);
  }

  AlmacenarRegistro(modelo: DepartamentoModelo): Observable<DepartamentoModelo> {
    return this.http.post<DepartamentoModelo>(
      `${this.url}/departamento`,
      {
        nombre: modelo.nombre
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }


  ModificarRegistro(modelo: DepartamentoModelo): Observable<DepartamentoModelo> {
    return this.http.put<DepartamentoModelo>(
      `${this.url}/departamento/${modelo.id}`,
      {
        nombre: modelo.nombre
      },
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }

  EliminarRegistro(id: number): Observable<DepartamentoModelo> {
    return this.http.delete<DepartamentoModelo>(
      `${this.url}/departamento/${id}`,
      {
        headers: new HttpHeaders({
          "Authorization":`Bearer ${this.token}`
        })
      });
  }
}
