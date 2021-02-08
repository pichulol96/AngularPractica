import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

//rutas
import { AppRoutingModule } from './app-routing.module';
//componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './logeo/./login/login.component';
import { PanelAdmiComponent } from './admi/./panel-admi/panel-admi.component';
import { FormRegistroUsuariosComponent } from './usuarios/./form-registro-usuarios/form-registro-usuarios.component';
import { TablaUsuariosComponent } from './usuarios/./tabla-usuarios/tabla-usuarios.component';
import { FormEditarUsuariosComponent } from './usuarios/./form-editar-usuarios/form-editar-usuarios.component';
import { TablaInventarioComponent } from './inventario/./tabla-inventario/tabla-inventario.component';
import { FormEditarInventarioComponent } from './inventario/./form-editar-inventario/form-editar-inventario.component';
import { FormRegistroInventarioComponent } from './inventario/./form-registro-inventario/form-registro-inventario.component';

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
    FormRegistroInventarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
