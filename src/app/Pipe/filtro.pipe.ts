import { Pipe, PipeTransform } from "@angular/core";
import { Productos } from '../models/models';
@Pipe({
    name: "filtro"
})
export class FiltroPipe implements PipeTransform{
    transform(productos: Productos[], titulo: string): Productos[] {
        console.log(productos)
        console.log(titulo)
        if (!productos || !titulo){
            return productos
        }
        return productos.filter(producto =>
            producto.titulo.toLowerCase().includes(titulo.toLowerCase())
        )
    }
}
    