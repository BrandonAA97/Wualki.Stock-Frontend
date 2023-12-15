import { Component } from '@angular/core';
import { Productos, ProductosDto } from '../models/models';
import { ProductoService } from '../Service/Producto.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent {
  id!: number;

  constructor(
    private productoService : ProductoService,
    private router: Router
  
    ){}
  errMsj: string ="";
  nombre:string ="";
  invercion!: number;
  stock!: number;
  plista!: number;
  
  
  AddProduc(){
    const prod = new Productos(this.id, this.nombre, this.stock,this.plista,this.invercion)
    this.productoService.subirProductos(prod).subscribe(
      res => {
        console.log( res + "Agregado correctamente");
        this.router.navigate(["/bienvenido"])
      }), console.error("El producto no se pudo agregar");
    
  }
}

