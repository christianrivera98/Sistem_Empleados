import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/empleado/empleado';
import { EmpleadoService } from 'src/services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {
  
  empleados:Empleado[];
  
  constructor(private empleadoServicio: EmpleadoService, private router: Router){}

  ngOnInit(): void{
    this.getEmpleados();
  }

  private getEmpleados(){
    this.empleadoServicio.getListEmpleados().subscribe(dato =>{
      this.empleados = dato;
    })
  }

  actualizarEmpleado(id: number){
    this.router.navigate(['actualizar-empleado', id]);
  }

  eliminarEmpleado(id: number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      
      this.getEmpleados();
    })
  }
}
