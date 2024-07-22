import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from 'src/empleado/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseURL = "http://localhost:8090/demo/api/v1/empleados";

  constructor(private httpClient: HttpClient) { }

  //Obtener lista de empleados: 
  
   getListEmpleados(): Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`)
   }

   //Registrar empleado:

   registrarEmpleado(empleado:Empleado): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`, empleado)
   }
  
   //Actualizar empleado: 

   actualizarEmpleado(id:number, empleado:Empleado): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado)
 }

 //Eliminar empleado:

  eliminarEmpleado(id:number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`)
 }

 obtenerEmpleadoID(id: number): Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`)
 }
}
