import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {InventarioService } from '../../.././services/inventario.service';

@Component({
  selector: 'app-tabla-inventario',
  templateUrl: './tabla-inventario.component.html',
  styleUrls: ['./tabla-inventario.component.css']
})
export class TablaInventarioComponent implements OnInit {
//articulos = null;
 articulos:any;
  constructor(private InventarioService:InventarioService) {
       this.getArticulos();

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

}
