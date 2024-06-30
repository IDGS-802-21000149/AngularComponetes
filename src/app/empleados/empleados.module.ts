import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    InicioComponent,
    AgregarEmpleadoComponent,
    CabeceraComponent,
    ListadoEmpleadosComponent 
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    InicioComponent,
    AgregarEmpleadoComponent,
    CabeceraComponent,
    ListadoEmpleadosComponent
  ]
})
export class EmpleadosModule { }
