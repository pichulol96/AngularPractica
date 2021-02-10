import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-admi',
  templateUrl: './panel-admi.component.html',
  styleUrls: ['./panel-admi.component.css']
})
export class PanelAdmiComponent implements OnInit {
mostrar=false;
mostrar2=false;
editar=false;
//inventario
inventarioLista=false;
editarInve=false;
registrarInve=false;

myClass=false;
salir=false;
@Output()
CerraSesion: EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarUsuarios(accion: string){
    if(accion=="registrar")
    {
      this.mostrar= !this.mostrar;
      this.mostrar2= false;
      this.editar=false;
      this.inventarioLista=false;
      this.editarInve=false;
      this.registrarInve=false;
    }
    if(accion=="lista")
    {
       this.mostrar2= !this.mostrar2;
       this.myClass=!this.myClass;
       this.mostrar= false;
       this.editar=false;
       this.inventarioLista=false;
       this.editarInve=false;
       this.registrarInve=false;
       


    }
  	
  }

  mostrarInventario(accion:string)
  {
    if(accion=="lista")
    {
      this.mostrar= false;
      this.mostrar2= false;
      this.editar=false;
      this.editarInve=false;
      this.registrarInve=false;
      this.inventarioLista=!this.inventarioLista;
    }
    if(accion=="nuevo")
    {
       this.mostrar= false;
      this.mostrar2= false;
      this.editar=false;
      this.editarInve=false;
      this.registrarInve=!this.registrarInve;
      this.inventarioLista=false;
    }
  }

  saliendo(){
     alert("Cerrando session");
    this.CerraSesion.emit(this.salir);


  }
//comunicacion
  editarUser(){
     this.editar=!this.editar;
     this.mostrar2=!this.mostrar2;


  }

   editarInventario(){
     this.inventarioLista=!this.inventarioLista;
     this.editarInve=!this.editarInve;


  }
  

}
