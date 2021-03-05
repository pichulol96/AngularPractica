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

  searchArticulos(consulta:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'searchArticulos.php', JSON.stringify(consulta));  

  }

  saveArticulos(articulo:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'saveArticulos.php', JSON.stringify(articulo));  

  }


  deleteArticulos(idArticulo:number) {
    //console.log(idArticulo);
    return this.http.delete(`${this.url}deleteArticulos.php?id=${idArticulo}`);
   
  }

    bajasArticulos(bajas:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'bajasArticulos.php', JSON.stringify(bajas));  

  }

  listadoBajas(consulta:object)
  {
    //return this.http.post(this.url+'saveArticulos.php',articulo);
    return this.http.post(this.url+'listasBajas.php', JSON.stringify(consulta));  

  }

  
}

