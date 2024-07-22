import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import {BcTableModule} from '@bancolombia/design-system-web/bc-table';
import {BcInputModule} from '@bancolombia/design-system-web/bc-input';
import {BcCardContainerModule} from '@bancolombia/design-system-web/bc-card-container';
import{BcButtonModule} from '@bancolombia/design-system-web/bc-button';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import {BcIconModule} from '@bancolombia/design-system-web/bc-icon';


@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    BcButtonModule,
    BcTableModule,
    BcInputModule,
    BcCardContainerModule,
    BcIconModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
