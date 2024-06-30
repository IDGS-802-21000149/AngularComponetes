import { Component, Input } from '@angular/core';
import { IEmpleados } from '../interface/empleados';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css'
})
export class ListadoEmpleadosComponent {  

  constructor(private empleadosService: EmpleadosService) { }

  get empleados(): IEmpleados[] {
    return this.empleadosService.empleados;
  }

  eliminarEmpleado(id: string){
    this.empleadosService.eliminarEmpleado(id)
  }

}
