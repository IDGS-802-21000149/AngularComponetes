import { Injectable } from '@angular/core';
import { IEmpleados } from './interface/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _empleados: IEmpleados[] = [];

  // Método get para obtener la lista de empleados
  get empleados(): IEmpleados[] {
    return this._empleados;
  }

  // Método para agregar un nuevo empleado
  agregarEmpleado(empleado: IEmpleados) {
    this._empleados.push(empleado);
    console.log(empleado,this._empleados)
    this.actualizarLocalStorage();
  }

  // Método para eliminar un empleado por su número de empleado
  eliminarEmpleado(numEmpleado: string) {
    this._empleados = this._empleados.filter(empleado => empleado.numEmpleado !== numEmpleado);
    this.actualizarLocalStorage();
  }

  // Método para actualizar el almacenamiento local
  private actualizarLocalStorage() {
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  constructor() {
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }
}
