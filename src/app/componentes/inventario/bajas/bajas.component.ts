import { Component, OnInit, Input } from '@angular/core';
import {InventarioService } from '../../.././services/inventario.service';
import {ResguardoService } from '../../.././services/resguardo.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-bajas',
  templateUrl: './bajas.component.html',
  styleUrls: ['./bajas.component.css']
})
export class BajasComponent implements OnInit {

 @Input() colaborador:number=0;
articulos:any
objeto:object;
search:any;
filtro:any;
observaciones:any;
listas:any;
Tabla=false;
mensaje:string="pichu";
  constructor(private InventarioService:InventarioService,
  	          private ResguardoService:ResguardoService) {
      this.objeto={};
      this.listas=[];
      this.search='';
      this.filtro='';
      this.observaciones='';

   }

  ngOnInit(): void {
    let resul=this.ResguardoService.colaboraor$.subscribe((data:string)=>{
      this.mensaje=data;
      console.log(data)
    })

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
         console.log(consulta);
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
	      //console.log(this.listas);
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
      if(this.listas=='')
      {
        this.Tabla=false;
      }
      
    }

    registrarArticuloLista()
    {
      //alert(this.observaciones);
       this.Tabla=false;
      this.listas.push({observaciones:this.observaciones,colaborador:this.colaborador});

    	console.log(this.listas);
      

      let consulta=this.listas;
       let resul=this.InventarioService.bajasArticulos(consulta).subscribe(data=>{
         //this.articulos=data;
          console.log(data);
            if(data>0)
            {
              Swal.fire(
                'Baja exitosa!',
                '',
                'success',
              )

              this.listas=[];
              this.articulos=[];
              //window.open('http://192.168.1.75/api/pdf/pdfBajas.php/?id='+data+'', '_blank');
              console.log(data);

            }
         });
    }

  
}
