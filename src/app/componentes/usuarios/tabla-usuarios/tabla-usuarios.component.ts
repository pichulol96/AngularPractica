import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import Swal from 'sweetalert2';//alertas
import {UsuariosService} from '../../.././services/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
   //buscar
 search:any;
 filtro:any;
 objeto:object={};
 users:any;

  //eliminar
 deleteArti:number=0;


  constructor(private UsuariosService:UsuariosService) {
     this.search='';

   }

  ngOnInit(): void {
  }
  
  @Output()
  editarUsuario: EventEmitter<string>=new EventEmitter<string>();
  editUser(){
  	this.editarUsuario.emit('true');
  }

  searchUsuarios()
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
 
         let resul=this.UsuariosService.searchUser(consulta).subscribe(data=>{
         this.users=data;
           if(this.users=='')
           {
             Swal.fire(
            'Noy datos para esta consulta',
            '',
            'error'
          )
            
           }
          console.log(data);
         });
        // console.log(this.objeto);
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
            'Debe selecionar el Usuario a eliminar',
            '',
            'warning'

          )
          return;
         
        }
       
         //alert(this.deleteArti);
            Swal.fire({
            title: 'Estas seguro?',
            text: "id del usuario: "+this.deleteArti,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'

             }).then((result) => {
                      if (result.isConfirmed) 
                      {
                          let id=this.deleteArti;
                          let resul=this.UsuariosService.deleteUser(id).subscribe
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
                         this.users=[];
                        // return this.getArticulos();
                      }   
                      
                    })
                   
        }

}
