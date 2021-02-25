import { Component, OnInit,EventEmitter  } from '@angular/core';
import {NgForm,FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {ResguardoService } from '../../.././services/resguardo.service';
import { Router } from '@angular/router';//rutas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-resguardo',
  templateUrl: './registro-resguardo.component.html',
  styleUrls: ['./registro-resguardo.component.css']
})
export class RegistroResguardoComponent implements OnInit {
  mostrarResguardo=true;
	resguardoRegistrar : FormGroup;
	existente='';
	personas:any;
	search:any;
	resultado='';
	objetoBuscarPersona:object;
  Colaborador:any=0;//variable  para comunicar dato al hijo
  constructor(private ResguardoService:ResguardoService ,private _builder:FormBuilder,
  	private router:Router) 
  { 
  	 this.personas='';
  	 this.objetoBuscarPersona={};
  	 this.search='';
     this.resguardoRegistrar = this._builder.group({
            numeroColaborador:['', [Validators.required,Validators.maxLength(10)]],
            nombre:['', Validators.required],
            apellido:['', Validators.required],
            correo:['', Validators.required],
            departamento:['', Validators.required],
            puesto:['', Validators.required]
 
	     })
  }
  	
   

  ngOnInit(): void {
  }
  
     searchResguardo()
    {  
    	 let consultaPersona=this.objetoBuscarPersona=
    	 {
           campo:this.search
         }
         //console.log(consultaPersona);
         let resul=this.ResguardoService.searchPersona(consultaPersona).subscribe(data=>{
         this.personas=data;
          //console.log(data);
          if(data!="")
          {
	          	for(let persona of this.personas)
	           	{
			           this.resguardoRegistrar = this._builder.group({ 
			            numeroColaborador:[persona.no_colaborador, Validators.required],
			            nombre:[persona.nombre, Validators.required],
			            apellido:[persona.apellidos, Validators.required],
			            correo:[persona.correo, Validators.required],
			            departamento:[persona.departamento, Validators.required],
			            puesto:[persona.puesto,Validators.required]
		                })
                 //this.Colaborador=persona.no_colaborador;//variable que comunica al hijo
	           	}
	           	this.resultado="Existe";
          }
          else
          {
	            this.resguardoRegistrar = this._builder.group({
	            numeroColaborador:['', [Validators.required,Validators.maxLength(10)]],
	            nombre:['', Validators.required],
	            apellido:['', Validators.required],
	            correo:['', Validators.required],
	            departamento:['', Validators.required],
	            puesto:['', Validators.required]

	 
		     })
	            this.resultado="No existe, registre primero";
          }

         }); //cierra la respuesta de la appi  
    }
    

  newResguardo(values:any)
	{
		//alert("hola");
       if(values)
       {
         this.Colaborador=values.numeroColaborador;
         //se guarda el numero de colaborador para cuminicar al componente hijo
       }
       

       let resul=this.ResguardoService.savePersona(values).subscribe(data=>{
       	console.log(data)
         	this.resguardoRegistrar.patchValue({

         	
         	numeroColaborador:'',
            nombre:'',
            apellido:'',
            correo:'',
            departamento:'',
            puesto:''
            
         });
         	//this.router.navigate(['resguardo/listaArticulos']);
           this.mostrarResguardo=false;
           //this.ResguardoService.colaboraor$.emit("marco antonio");
       });
        
       console.log(values);
	}

  atras()
  {
    this.mostrarResguardo=true;
  }

}
