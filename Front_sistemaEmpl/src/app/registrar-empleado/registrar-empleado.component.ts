import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/empleado/empleado';
import { EmpleadoService } from 'src/services/empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.scss']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  constructor(private empleadoServicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.empleado);
  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(
      dato => {
        console.log(dato);
        this.goToListaEmpleados();
      },
      error => console.log(error)
    );
  }

  goToListaEmpleados() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.guardarEmpleado();
  }
}