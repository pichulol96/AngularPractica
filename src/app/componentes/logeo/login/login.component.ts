import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router';//rutas
import {LoginService } from '../../.././services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
status="Formulari no enviado";
// evento de hijo a padre
@Output()
comunicacion: EventEmitter<object>=new EventEmitter<object>();

valorInput="";
true=true;
//false="true";
objeto:object={};
resultado:object={};

//Variables logeo
  user :string='';
  password:string='';

  constructor(private router:Router, private LoginService:LoginService) {

   }

  ngOnInit(): void {
  }
  logeandoUsuario(){
  	this.status="Formulario Enviado";
  }
  AsignarNombreInput(){
  	if(this.valorInput=="")
  	{
  		this.valorInput="pichu";
  	}
  	else
  	{
  		this.valorInput="";
  	}
  }

  logeando(){
    //this.comunicacion.emit(this.true);

  }

  login()
  {
   
     //alert("usuario logeado");
      
      let login=this.objeto={
           user:this.user,
           password:this.password
           }

         //console.log(this.objeto);
         let resul=this.LoginService.Logeando(login).subscribe(data=>{
           if(data!="")
           {
             this.resultado=data;
              console.log(data);
              this.comunicacion.emit(this.resultado);
            }

            else{
              alert("Datos incorrectos");
              console.log(data);
            } 
         });


     //this.router.navigate(['inventario/listaArticulos'])
  }

}
