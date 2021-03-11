import { Component, OnInit,Input } from '@angular/core';
import {InventarioService } from '../../.././services/inventario.service';//servicio

@Component({
  selector: 'app-form-editar-inventario',
  templateUrl: './form-editar-inventario.component.html',
  styleUrls: ['./form-editar-inventario.component.css']
})
export class FormEditarInventarioComponent implements OnInit {
 @Input() editar:any=[];
 id:number=0;
 descripcion:string='';
 categoria:string='';
 marca:string='';
 modelo:string='';
 serie:string='';
 noInventario:string='';
 cantidad:number=0;
 localizacion:string='';
 imagen:string='';
 //objeto que guarda los datos para mandar a la api
 ediObjet:object={};
  constructor(private InventarioService:InventarioService) {
     
      
   }

  ngOnInit(): void {
  	this.recorrerEdit()
  }

  recorrerEdit()
  {
  	for(let edit of this.editar)
  	{    
  		 this.id=edit.id;
  		 this.descripcion=edit.descripcion;
  		 this.categoria=edit.categoria;
  		 this.marca=edit.marca;
  		 this.modelo=edit.modelo;
  		 this.serie=edit.serie;
  		 this.noInventario=edit.numeroInventario;
  		 this.cantidad=edit.cantidad;
       this.localizacion=edit.localizacion;
       this.imagen=edit.imagen;

        //this.categoria=edi.categoria
  	}

  }

  editArticulo()
  {
    this.ediObjet=
    {id:this.id,descripcion:this.descripcion,categoria:this.categoria,
     marca:this.marca,modelo:this.modelo,serie:this.serie,
     noInventario:this.noInventario,cantidad:this.cantidad,
     localizacion:this.localizacion
    }
    
    this.InventarioService.editArticulos(this.ediObjet).subscribe(data=>{
      if(data>0)
      {
        alert("Datos actualizados");
      }
      else
      {
        alert("Hubo un erro");
      }
      console.log(data);
    }) 
    //console.log(this.ediObjet);
  }
 
}
