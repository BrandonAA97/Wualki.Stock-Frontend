import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Productos } from "../models/models";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProductoService{
    private baseURL = "http://localhost:8080/api/v1";
    
    constructor(private httpClient: HttpClient){}
    
     obtenerLosProductos(): Observable<Productos[]>{
         return this.httpClient.get<Productos[]>(`${this.baseURL}/allProduct`);
     }
     obtenerUnProd(id: number): Observable<Productos> {
        return this.httpClient.get<Productos>(this.baseURL+ `/producto/${id}`);
      }
     subirProductos(producto: Productos): Observable<any>{
        return this.httpClient.post<any>(this.baseURL + "/addProduct", producto);
    }
     modificarDatosProducto(productId: number, prod: Productos ): Observable<any>{
         return this.httpClient.put<any>(this.baseURL + `/update/${productId}`, prod );
     }
     eliminarProducto(productId: number): Observable<any>{
         return this.httpClient.delete(this.baseURL+ `/deleteProd/${productId}`);
     }
    
}