import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FiltroPipe } from './Pipe/filtro.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { SubirComponent } from './subir/subir.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './Service/Login.Service';
import { ProductoService } from './Service/Producto.Service';
import { HttpClientModule } from '@angular/common/http';
import { ActualizarComponent } from './actualizar/actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    SubirComponent,
    ProductosComponent,
    LoginComponent,
    FiltroPipe,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
