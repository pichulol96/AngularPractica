import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url="http://localhost/api/views/";
  constructor(private http:HttpClient) { }

   Logeando(login:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'login/login.php', JSON.stringify(login));  

  }
}
