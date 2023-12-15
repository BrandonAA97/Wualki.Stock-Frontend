import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../Service/Producto.Service';
import { ActivatedRoute, Router, } from '@angular/router';
import { Productos } from '../models/models';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  producto! : Productos ;
  id!: number;

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ){}


  ngOnInit() {
    this.route.params.subscribe(
      params => {
      this.id = params['id'];
      console.log(this.id)})
      this.productoService.obtenerUnProd(this.id).subscribe(
      res=> { 
        this.producto =res;
        console.log(res);
      }
      );
  }
  

  Update( productId : number): void{

    this.id = productId;
    this.productoService.modificarDatosProducto(productId, this.producto).subscribe(
      res=> {
        console.log(res + " Producto actualizado");
        this.router.navigate(["/productos"])
      }
    )
  }
}

