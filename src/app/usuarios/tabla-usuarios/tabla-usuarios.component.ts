import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output()
  editarUsuario: EventEmitter<string>=new EventEmitter<string>();
  editUser(){
  	this.editarUsuario.emit('true');
  }

}
