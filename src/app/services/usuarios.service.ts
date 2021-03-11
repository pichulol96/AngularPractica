import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public url="http://localhost/api/views/";
  constructor(private http:HttpClient) { }

   saveUser(user:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'usuarios/saveUser.php', JSON.stringify(user));  

  }

   searchUser(consulta:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'usuarios/searchUser.php', JSON.stringify(consulta));  

  }

  deleteUser(idUser:number) {
    //console.log(idArticulo);
    return this.http.delete(`${this.url}usuarios/deleteUser.php?id=${idUser}`);
  
   
  }


}
