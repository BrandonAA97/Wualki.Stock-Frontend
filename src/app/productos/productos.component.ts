import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../Service/Producto.Service';
import { Productos } from '../models/models';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  implements OnInit{
  // faCirclePlus = faCirclePlus;
  producto: Productos[]=[]; 


  precio: number | null = null;
  plista: number = 0;
  ganancia: number = 0;
  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

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
  
  deleteProduct(productId: number){
    this.productoService.eliminarProducto(productId).subscribe(
      res =>{
        console.log( "Eliminado correctamente");
        this.router.navigate(["/productos"])
        location.reload()
      })

  }
  update( productId: number){
    this.router.navigate(["/editar/" + productId])
  }
}


