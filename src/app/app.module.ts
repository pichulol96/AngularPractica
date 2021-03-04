import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

//rutas
import { AppRoutingModule } from './app-routing.module';
// http HttpClientModule
import { HttpClientModule } from '@angular/common/http';

//componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/./logeo/./login/login.component';
import { PanelAdmiComponent } from './componentes/./admi/./panel-admi/panel-admi.component';
import { FormRegistroUsuariosComponent } from './componentes/./usuarios/./form-registro-usuarios/form-registro-usuarios.component';
import { TablaUsuariosComponent } from './componentes/./usuarios/./tabla-usuarios/tabla-usuarios.component';
import { FormEditarUsuariosComponent } from './componentes/./usuarios/./form-editar-usuarios/form-editar-usuarios.component';
import { TablaInventarioComponent } from './componentes/./inventario/./tabla-inventario/tabla-inventario.component';
import { FormEditarInventarioComponent } from './componentes/./inventario/./form-editar-inventario/form-editar-inventario.component';
import { FormRegistroInventarioComponent } from './componentes/./inventario/./form-registro-inventario/form-registro-inventario.component';
import { RegistroResguardoComponent } from './componentes/resguardo/registro-resguardo/registro-resguardo.component';
import { ListaArticulosComponent } from './componentes/resguardo/lista-articulos/lista-articulos.component';
import { ListaResguardosComponent } from './componentes/resguardo/lista-resguardos/lista-resguardos.component';
import { ResguadoBajasComponent } from './componentes/resguardo/resguado-bajas/resguado-bajas.component';
import { BajasComponent } from './componentes/inventario/bajas/bajas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelAdmiComponent,
    FormRegistroUsuariosComponent,
    TablaUsuariosComponent,
    FormEditarUsuariosComponent,
    TablaInventarioComponent,
    FormEditarInventarioComponent,
    FormRegistroInventarioComponent,
    RegistroResguardoComponent,
    ListaArticulosComponent,
    ListaResguardosComponent,
    ResguadoBajasComponent,
    BajasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
