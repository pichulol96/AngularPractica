import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
status="Formulari no enviado";
valorInput="";
  constructor() { }

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
    alert("hola");

  }

}
