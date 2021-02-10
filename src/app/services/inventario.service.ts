import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  public url="http://localhost/api/views/";
  constructor(private http: HttpClient) { 
    //this.getArticulos();
  }

  getArticulos()
  {
    let articulos;
    const get="get"
    /*return this.http.get('http://localhost/api/getArticulos.php').subscribe(data=>{
    	console.log(data);
    	//return articulos=data;
    });*/
    return this.http.get(this.url+'getArticulos.php');
    //console.log(articulos);
    //return alert(articulos);

 
  }

  saveArticulos(articulo:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'saveArticulos.php', JSON.stringify(articulo));  

  }

  
}

