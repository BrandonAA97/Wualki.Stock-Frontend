import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/models';
import { LoginService } from '../Service/Login.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(
    private router: Router,
    private loginservice: LoginService
  ) {}

    username= "";
    password= "";
    login!: Login;
    isLogged=false;
    usLogueado="";
    errMensj= "";
    errMsj: string ="";



    OnLogin(): void {
      
      this.login = new Login(this.username,this.password);
      this.loginservice.login(this.login).subscribe({
          next: (response: any) => {
            // Manejar la respuesta del backend
            this.loginservice.login(response.username);
            this.loginservice.login(response.password);
            console.log('Usuario autenticado', response);
            this.isLogged=true;
            this.router.navigate(["/bienvenido"])
            
          },
          error: (err) => {
            this.isLogged = false;
            console.log(this.errMsj = "no funca");
          }
          
        });
      }
}
