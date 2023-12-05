import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../Service/Producto.Service';
import { Productos } from '../models/models';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  implements OnInit{

  producto: Productos[]=[];
  constructor(private productoService: ProductoService){}

  datoBuscado="";

  ngOnInit(): void {
    this.todosLosProductos();
  }
  private todosLosProductos(){
    this.productoService.obtenerLosProductos().subscribe(
      res =>{
        this.producto =res;
        console.log(res);
      })
  }
}


