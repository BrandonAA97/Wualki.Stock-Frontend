import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginDto, Login, Productos } from "../models/models";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LoginService {
    private baseURL = "http://localhost:8080/api/v1";
    
    constructor(private httpClient: HttpClient){}
    usLog="";
    

    login(login: Login): Observable<LoginDto>{
        return this.httpClient.post<any>(this.baseURL + "/login", login);
    }
    
    // obtenerLosProductos(): Observable<Productos[]>{
    //     return this.httpClient.get<Productos[]>(`${this.baseURL}/allProduc`);
    // }
    // modificarDatosProducto(nombre:string, producto:Productos ): Observable<object>{
    //     return this.httpClient.put(`${this.baseURL}/${nombre}`, producto);
    // }
    // eliminarProducto(nombre: string): Observable<object>{
    //     return this.httpClient.delete(`${this.baseURL}/${nombre}`)
    // }
}
