import { Component, OnInit } from '@angular/core';
import {InventarioService } from '../../.././services/inventario.service';//servicio
import {ResguardoService } from '../../.././services/resguardo.service';

import { Router } from '@angular/router';//rutas
import Swal from 'sweetalert2';//alertas

@Component({
  selector: 'app-lista-resguardos',
  templateUrl: './lista-resguardos.component.html',
  styleUrls: ['./lista-resguardos.component.css']
})
export class ListaResguardosComponent implements OnInit {
	//articulos = null;
 //buscar
 search:any;
 filtro:any;
 objeto:object;
 //obtener
 articulos:any;
 //eliminar
 deleteArti:number;
 //lista
 listas:any;

  constructor(private ResguardoService:ResguardoService,private router:Router) {
        this.listas=[];
       this.deleteArti=0;
       this.search='';
       this.filtro='';
       this.objeto={};
   }

  ngOnInit(): void {
  }

  getArticulos()
    {
     let resul=this.ResguardoService.searchResguardo(this.filtro).subscribe(data=>{
       this.articulos=data;
       console.log(data);
     });
     
     //this.articulos=this.InventarioService.getArticulos();
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
         let resul=this.ResguardoService.searchResguardo(consulta).subscribe(data=>{
         this.articulos=data;
           if(this.articulos=='')
           {
             Swal.fire(
            'Noy datos para esta consulta',
            '',
            'error'
          )
            
           }
          console.log(data);
         });
       }
    }

    deleteArticulos(id:number)
    {
       //alert(id);
       this.deleteArti=id;
    }
    deleteArticulosConfirm()
    {
        if(this.deleteArti==0)
        {

          //alert("Debe seleccionar algun articulo que quiera eliminar primero");
          Swal.fire(
            'Debe selecionar el articulo que desea eliminar',
            '',
            'warning'
          )
         
        }
        else
        {
         //alert(this.deleteArti);
            Swal.fire({
            title: 'Estas seguro?',
            text: "id del articulo: "+this.deleteArti,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'

             }).then((result) => {
                      if (result.isConfirmed) 
                      {
                          let id=this.deleteArti;
                         /* let resul=this.ResguardoService.deleteArticulos(id).subscribe
                          (data=>{
                           if(data=="eliminado")
                           {
                              Swal.fire(
                            'Eliminado!',
                            'El articulo fue eliminado.',
                            'success'
                             )
                           }
                           console.log(data);
                         });
                         this.deleteArti=0;
                         this.articulos=[];
                        // return this.getArticulos();
                         
                      */}
                    })
                   
        }
    }

}
