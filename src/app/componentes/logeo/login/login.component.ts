import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
status="Formulari no enviado";
// evento de hijo a padre
@Output()
comunicacion: EventEmitter<boolean>=new EventEmitter<boolean>();

valorInput="";
true=true;
//false="true";
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
    this.comunicacion.emit(this.true);

  }

}
