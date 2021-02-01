import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-admi',
  templateUrl: './panel-admi.component.html',
  styleUrls: ['./panel-admi.component.css']
})
export class PanelAdmiComponent implements OnInit {
mostrar=false;
mostrar2=false;
myClass=false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarUsuarios(accion: string){
    if(accion=="registrar")
    {
      this.mostrar= !this.mostrar;
      this.mostrar2= false;
    }
    if(accion=="lista")
    {
       this.mostrar2= !this.mostrar2;
       this.myClass=!this.myClass;
       this.mostrar= false;
       


    }
  	
  }

  

 

}
