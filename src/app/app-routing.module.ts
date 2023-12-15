import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ProductosComponent } from './productos/productos.component';
import { SubirComponent } from './subir/subir.component';
import { LoginComponent } from './login/login.component';
import { ActualizarComponent } from './actualizar/actualizar.component';

const routes: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'subir', component: SubirComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editar/:id', component: ActualizarComponent},
  {path: '**', component: BienvenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
