import { Component } from '@angular/core';
import { IEmpleados } from '../interface/empleados';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})

export class AgregarEmpleadoComponent {

  empleado: IEmpleados = {
    numEmpleado: "",
    nombre: "",
    correo: "",
    telefono: "",
    fechaNacimiento: "",
    sexo: ""
  };

  radioOptions = [
    { key: 'masculino', value: 'Masculino' },
    { key: 'femenino', value: 'Femenino' }
  ];

  // Inyectamos el servicio de empleados
  constructor(private empleadosService: EmpleadosService) { }

  agregar() {
    console.log(this.empleado)
    // Validaciones
    if (!this.empleado.numEmpleado || !this.empleado.nombre || !this.empleado.correo || !this.empleado.fechaNacimiento || !this.empleado.sexo) {
      return;
    }

    // Agregamos el nuevo empleado a través del servicio
    this.empleadosService.agregarEmpleado(this.empleado);

    // Limpiamos el formulario
    this.empleado = {
      numEmpleado: "",
      nombre: "",
      correo: "",
      telefono: "",
      fechaNacimiento: "",
      sexo: ""
    };
  }

}
