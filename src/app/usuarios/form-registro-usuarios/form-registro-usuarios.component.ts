import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-form-registro-usuarios',
  templateUrl: './form-registro-usuarios.component.html',
  styleUrls: ['./form-registro-usuarios.component.css']
})
export class FormRegistroUsuariosComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
  	alert("hola");
  }
  

}
