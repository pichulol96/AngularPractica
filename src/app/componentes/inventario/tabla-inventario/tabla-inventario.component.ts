import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {InventarioService } from '../../.././services/inventario.service';//servicio
//formularios
import {NgForm,FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';//rutas
import Swal from 'sweetalert2';//alertas

@Component({
  selector: 'app-tabla-inventario',
  templateUrl: './tabla-inventario.component.html',
  styleUrls: ['./tabla-inventario.component.css']
})
export class TablaInventarioComponent implements OnInit {
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
  constructor(private InventarioService:InventarioService,private router:Router) {
       //this.getArticulos(); //trate todos datos de la tabla al cargar el componente
       this.listas=[];
       this.deleteArti=0;
       this.search='';
       this.filtro='';
       this.objeto={};

   }

  ngOnInit(): void {
  }

  @Output()
  inventario: EventEmitter<string>=new EventEmitter<string>();
  editInventario(){
  	this.inventario.emit('true');
  }

    getArticulos()
    {
     let resul=this.InventarioService.getArticulos().subscribe(data=>{
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
         let resul=this.InventarioService.searchArticulos(consulta).subscribe(data=>{
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
                          let resul=this.InventarioService.deleteArticulos(id).subscribe
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
                         
                      }
                    })
                   
        }
    }

  

}
