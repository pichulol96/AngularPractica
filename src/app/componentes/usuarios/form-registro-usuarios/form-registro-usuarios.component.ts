import { Component, OnInit } from '@angular/core';
import {NgForm,FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {RolesService} from '../../.././services/roles.service';
import {UsuariosService} from '../../.././services/usuarios.service';
import  Swal from 'sweetalert2' ;



@Component({
  selector: 'app-form-registro-usuarios',
  templateUrl: './form-registro-usuarios.component.html',
  styleUrls: ['./form-registro-usuarios.component.css']
})
export class FormRegistroUsuariosComponent implements OnInit {
	roles:any;
	registerUser : FormGroup;
  
  constructor(private RolesService:RolesService,private UsuariosService:UsuariosService,
  	private _builder:FormBuilder) {
   let resul=this.RolesService.getRoles().subscribe(data=>{
       this.roles=data;
       console.log(data);
     });
    
    this.registerUser = this._builder.group({
            numeroColaborador:['', [Validators.required,Validators.maxLength(10)]],
            nombre:['', Validators.required],
            apellido_paterno:['', Validators.required],
            apellido_materno:['', Validators.required],
            correo:['', Validators.required],
            departamento:['', Validators.required],
            puesto:['', Validators.required],
            personalExterno:['',Validators.required],
            usuario:['', Validators.required],
            contrasena:['', Validators.required],
            rol:['', Validators.required]

 
	     })
   }

  ngOnInit(): void {
  }

  newUser(values:any)
	{
		

       let resul=this.UsuariosService.saveUser(values).subscribe(data=>{
       	console.log(data)
         if(data>0)
         {
           Swal.fire(
            'Usuario resgistrado con exito',
            '',
            'success'
          )
             this.registerUser.patchValue({
             numeroColaborador:'',
            nombre:'',
            apellido_paterno:'',
            apellido_materno:'',
            correo:'',
            departamento:'',
            puesto:'',
            personalExterno:'',
            usuario:'',
            contrasena:'',
            rol:''
              
           });
         }
         else
         {
           Swal.fire(
            'Error al registrar usuario',
            '',
            'error'
          )
         }
         	
       });
        
       //console.log(values);
	}
  
  

}
