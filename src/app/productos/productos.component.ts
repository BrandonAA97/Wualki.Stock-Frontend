import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../Service/Producto.Service';
import { Productos } from '../models/models';
// import { faCirclePlus} from '@fortawesone/free-solid-svg-icons'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  implements OnInit{
  // faCirclePlus = faCirclePlus;
  producto: Productos[]=[];
  invercion: number = 0;
  plista: number = 0;
  ganancia: number = 0;
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

