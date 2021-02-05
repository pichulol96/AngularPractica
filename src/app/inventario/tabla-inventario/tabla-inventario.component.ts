import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-inventario',
  templateUrl: './tabla-inventario.component.html',
  styleUrls: ['./tabla-inventario.component.css']
})
export class TablaInventarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  inventario: EventEmitter<string>=new EventEmitter<string>();
  editInventario(){
  	this.inventario.emit('true');
  }

}
