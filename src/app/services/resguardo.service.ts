import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResguardoService {
	 public url="http://192.168.1.75/api/views/";
   colaboraor$ = new EventEmitter<string>();

  constructor( private http: HttpClient) { }

  searchPersona(consulta:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    //return console.log(consulta);
    return this.http.post(this.url+'resguardo/searchPersona.php', JSON.stringify(consulta));  

  }

   savePersona(articulo:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'resguardo/savePersona.php', JSON.stringify(articulo));  

  }

   saveResguardo(resguardo:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'resguardo/saveResguardo.php', JSON.stringify(resguardo));  

  }

}


