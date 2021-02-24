import { Component, OnInit } from '@angular/core';
import {InventarioService } from '../../.././services/inventario.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
articulos:any
objeto:object;
search:any;
filtro:any;
listas:any;
Tabla=false;
  constructor(private InventarioService:InventarioService) {
      this.objeto={};
      this.listas=[];
      this.search='';
      this.filtro='';
   }

  ngOnInit(): void {
  }

  searchArticulos()
    {
     //alert(this.search+' :'+this.filtro);
        if(this.filtro=='')
       {
         alert("Sellecione filtro ");

       }
       else
       {
       
            let consulta=this.objeto={
           filtro:this.filtro,
           campo:this.search
           }
         //console.log(this.objeto);
         let resul=this.InventarioService.searchArticulos(consulta).subscribe(data=>{
         this.articulos=data;
          console.log(data);
         });
       }
    }

    agregarArticuloLista(id:number,descripcion:any,foto:any)
    {
      //alert(id);
      
	     
	          this.Tabla=true;
	          if(this.listas=="")
	          {
                 this.listas.push({id:id,title:descripcion,foto:foto});
	          }
	          else
	          {
		          for(let lista of this.listas)
		          {
		          	if(id==lista.id)
		          	{
		          		alert("Este articulo ya esta agregado a la lista");
		          		return;
		          	}
		          	

		          }
		          
		          		this.listas.push({id:id,title:descripcion,foto:foto});
		          	
	          }
	      	  
	     // alert (this.lista);
	      console.log(this.listas);
    }

    eliminarArticuloLista(id:number)
    {
      //alert(id);
      let c=0;//contador
      for(let lista of this.listas)
		{
		    
		    if(id==lista.id)
		    {
		      this.listas.splice(c,1) ;    		
		    }
		      c++;   	

		}
      
    }

    registrarArticuloLista()
    {
    	console.log(this.listas);
    }

}
