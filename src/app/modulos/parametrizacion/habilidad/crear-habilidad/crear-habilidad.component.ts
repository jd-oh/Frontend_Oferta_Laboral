import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HabilidadModelo } from 'src/app/modelos/habilidad.modelo';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-crear-habilidad',
  templateUrl: './crear-habilidad.component.html',
  styleUrls: ['./crear-habilidad.component.css']
})
export class CrearHabilidadComponent implements OnInit {

  fgValidador: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
    private servicio: HabilidadService,
    private router: Router) {

  }

  ConstruirFormulario() {
    this.fgValidador = this.fb.group({
      nombre: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.ConstruirFormulario();
  }

  get ObtenerFgValidador() {
    return this.fgValidador.controls;
  }

  GuardarRegistro() {
    let nom = this.ObtenerFgValidador.nombre.value;
    let modelo: HabilidadModelo = new HabilidadModelo();
    modelo.nombre = nom;
    this.servicio.AlmacenarRegistro(modelo).subscribe(
      (datos) =>{
        alert("Registro almacenado correctamente.");
        this.router.navigate(["/parametros/listar-habilidades"]);
      },
      (err) =>{
        alert("Error almacenando el registro");
      }
    );
  }
}
