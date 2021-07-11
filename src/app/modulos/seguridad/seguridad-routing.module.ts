import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorNoSesionGuard } from 'src/app/guardianes/validador-no-sesion.guard';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ResetearClaveComponent } from './resetear-clave/resetear-clave.component';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
    canActivate: [ValidadorNoSesionGuard]
  },
  {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'resetear-clave',
    component: ResetearClaveComponent,
    canActivate: [ValidadorNoSesionGuard]
  },
  {
    path: 'cambiar-clave',
    component: CambiarClaveComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
