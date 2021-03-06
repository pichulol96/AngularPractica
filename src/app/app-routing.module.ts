import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { LoginComponent } from './componentes/./logeo/./login/login.component';
import { PanelAdmiComponent } from './componentes/./admi/./panel-admi/panel-admi.component';
import { FormRegistroUsuariosComponent } from './componentes/./usuarios/./form-registro-usuarios/form-registro-usuarios.component';
import { TablaUsuariosComponent } from './componentes/./usuarios/./tabla-usuarios/tabla-usuarios.component';
import { FormEditarUsuariosComponent } from './componentes/./usuarios/./form-editar-usuarios/form-editar-usuarios.component';
import { TablaInventarioComponent } from './componentes/./inventario/./tabla-inventario/tabla-inventario.component';
import { FormEditarInventarioComponent } from './componentes/./inventario/./form-editar-inventario/form-editar-inventario.component';
import { FormRegistroInventarioComponent } from './componentes/./inventario/./form-registro-inventario/form-registro-inventario.component';
import { BajasComponent } from './componentes/./inventario/./bajas/bajas.component';
import { ListaBajasComponent } from './componentes/./inventario/./lista-bajas/lista-bajas.component';
import { RegistroResguardoComponent } from './componentes/resguardo/registro-resguardo/registro-resguardo.component';
import { ListaArticulosComponent } from './componentes/resguardo/lista-articulos/lista-articulos.component';
import { ListaResguardosComponent } from './componentes/resguardo/lista-resguardos/lista-resguardos.component';
import { ResguadoBajasComponent } from './componentes/resguardo/resguado-bajas/resguado-bajas.component';



const routes: Routes = [
     //usuarios
     {path:'user/registrar',component:FormRegistroUsuariosComponent},

     {path:'user/consultar',component:TablaUsuariosComponent},

     //login
     //{path:'',component:LoginComponent},
     {path:'login',component:LoginComponent},

     //inventario
     {path:'inventario/listaArticulos',component:TablaInventarioComponent},

     {path:'inventario/nuevoArticulo',component:FormRegistroInventarioComponent},

     {path:'inventario/editarArticulo',component:FormEditarInventarioComponent},

     {path:'inventario/bajasArticulos',component:BajasComponent},
     {path:'inventario/listaBajasArticulos',component:ListaBajasComponent},
     //resguardo
     {path:'resguardo/nuevoResguardo',component:RegistroResguardoComponent},
     {path:'resguardo/listaArticulos',component:ListaArticulosComponent},
     {path:'resguardo/listaResguardos',component:ListaResguardosComponent},
     //{path:'resguardo/bajasResguardos',component:ResguadoBajasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
