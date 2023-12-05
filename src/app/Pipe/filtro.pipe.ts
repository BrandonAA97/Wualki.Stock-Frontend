import { Pipe, PipeTransform } from "@angular/core";
import { Productos } from '../models/models';
@Pipe({
    name: "filtro"
})
export class FiltroPipe implements PipeTransform{
    transform(productos: Productos[], nombre: string): Productos[] {
        console.log(productos)
        console.log(nombre)
        if (!productos || !nombre){
            return productos
        }
        return productos.filter(producto =>
            producto.nombre.toLowerCase().includes(nombre.toLowerCase())
        )
    }
}
    