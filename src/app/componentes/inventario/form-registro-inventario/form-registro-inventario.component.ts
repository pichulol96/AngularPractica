import { Component, OnInit } from '@angular/core';
import {InventarioService } from '../../.././services/inventario.service';
import {NgForm,FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';




@Component({
  selector: 'app-form-registro-inventario',
  templateUrl: './form-registro-inventario.component.html',
  styleUrls: ['./form-registro-inventario.component.css']
})
export class FormRegistroInventarioComponent implements OnInit {
	articulosRegistrar : FormGroup;
	articuloGuardado='';


  constructor(
  	private InventarioService:InventarioService ,
  	private _builder:FormBuilder
  	) 
    { 
	     this.articulosRegistrar = this._builder.group({
            categoria:['', Validators.required],
            marca:['', Validators.required],
            modelo:['', Validators.required],
            serie:['', Validators.required],
            inventario:['', Validators.required],
            cantidad:['', Validators.required],
            descripcion:['', Validators.required],
            localizacion:['', Validators.required],
            imagen:['', Validators.required]

	     })
    }

  ngOnInit(): void {
  }

	newArticulo(values:object)
	{
		//alert("hola");
       let resul=this.InventarioService.saveArticulos(values).subscribe(data=>{
       //	console.log(data)
         
         	this.articuloGuardado="El Articulo se registro con exito";
         	this.articulosRegistrar.patchValue({

         	
         	categoria:'',
            marca:'',
            modelo:'',
            serie:'',
            inventario:'',
            cantidad:'',
            descripcion:'',
            localizacion:'',
            imagen:''
         });
       });
       console.log(values);
	}
}
