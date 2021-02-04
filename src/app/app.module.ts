import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './logeo/./login/login.component';
import { PanelAdmiComponent } from './admi/./panel-admi/panel-admi.component';
import { FormRegistroUsuariosComponent } from './usuarios/./form-registro-usuarios/form-registro-usuarios.component';
import { TablaUsuariosComponent } from './usuarios/./tabla-usuarios/tabla-usuarios.component';
import { FormEditarUsuariosComponent } from './usuarios/./form-editar-usuarios/form-editar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelAdmiComponent,
    FormRegistroUsuariosComponent,
    TablaUsuariosComponent,
    FormEditarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
