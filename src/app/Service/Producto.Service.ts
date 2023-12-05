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
     modificarDatosProducto(nombre:string, producto:Productos ): Observable<object>{
         return this.httpClient.put(`${this.baseURL}/${nombre}`, producto);
     }
     eliminarProducto(nombre: string): Observable<object>{
         return this.httpClient.delete(`${this.baseURL}/${nombre}`)
     }
}