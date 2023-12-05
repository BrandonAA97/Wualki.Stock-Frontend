import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginDto, Login } from "../models/models";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LoginService {
    private baseURL = "http://localhost:8080/api/v1";
    
    constructor(private httpClient: HttpClient){}

    login(login: Login): Observable<LoginDto>{
        return this.httpClient.post<any>(this.baseURL + "/login", login);
    }
    
  
}
