import { Component} from '@angular/core';
import { Router } from '@angular/router';//rutas

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	mostrarLogin=true;
	mostrarPanelAdmi=false;
	logeado:boolean;
	panelAdmi:boolean;
	//datos del usuario logeado
  users:any=[]
  title = 'AngularPractica';
  constructor(private router:Router)
  {
     this.logeado=false;
     this.panelAdmi=true;
  }
  ngOnInit(): void {
  }

recibirMensaje(mensaje:object)
{   
	this.logeado=true;
	this.panelAdmi=false;
  console.log(mensaje);
  this.users=mensaje;
	this.router.navigate(['inventario/listaArticulos']);
	//alert("hola");
   
}
  
  
}
