import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './logeo/./login/login.component';
import { PanelAdmiComponent } from './admi/./panel-admi/panel-admi.component';
import { FormRegistroUsuariosComponent } from './usuarios/./form-registro-usuarios/form-registro-usuarios.component';
import { FormRegistroUsuariosCuentaComponent } from './usuarios/./form-registro-usuarios-cuenta/form-registro-usuarios-cuenta.component';
import { TablaUsuariosComponent } from './usuarios/./tabla-usuarios/tabla-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelAdmiComponent,
    FormRegistroUsuariosComponent,
    FormRegistroUsuariosCuentaComponent,
    TablaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
