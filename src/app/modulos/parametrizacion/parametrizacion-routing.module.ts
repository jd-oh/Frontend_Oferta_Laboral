import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { CrearHabilidadComponent } from './habilidad/crear-habilidad/crear-habilidad.component';
import { EditarHabilidadComponent } from './habilidad/editar-habilidad/editar-habilidad.component';
import { EliminarHabilidadComponent } from './habilidad/eliminar-habilidad/eliminar-habilidad.component';
import { ListarHabilidadComponent } from './habilidad/listar-habilidad/listar-habilidad.component';

const routes: Routes = [
  {
    path: 'listar-departamentos',
    component: ListarDepartamentoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-departamento',
    component: CrearDepartamentoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-departamento/:id',
    component: EditarDepartamentoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-departamento/:id',
    component: EliminarDepartamentoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-ciudades',
    component: ListarCiudadComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-habilidades',
    component: ListarHabilidadComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-habilidad',
    component: CrearHabilidadComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-habilidad/:id',
    component: EditarHabilidadComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-habilidad/:id',
    component: EliminarHabilidadComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
