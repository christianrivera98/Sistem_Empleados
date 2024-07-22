package com.example.db_ejer_pract_Ang.web.controller;

import com.example.db_ejer_pract_Ang.domain.repository.EmpleadoRepository;
import com.example.db_ejer_pract_Ang.persistence.entity.Empleado;
import com.example.db_ejer_pract_Ang.persistence.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/v1")
public class EmpleadoController {

    @Autowired
    private EmpleadoRepository repository;

    //Listar todos los empleados:

    @GetMapping("/empleados")
    public List<Empleado> listarTodosLosEmpleado() {
        return repository.findAll();
    }

    //Guardar empleados en lista:

    @PostMapping("/empleados")
    public Empleado guardarEmpleado(@RequestBody Empleado empleado) {
        return repository.save(empleado);
    }

    //Buscar empleados por ID:

    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerPorId(@PathVariable Long id) {
        Empleado empleado = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe empleado con el ID: " + id));

        return ResponseEntity.ok(empleado);
    }

    //Actualizar empleado

    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Long id, @RequestBody Empleado detallesEmpleado) {
        Empleado empleado = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe empleado con el ID: " + id));

        empleado.setNombre(detallesEmpleado.getNombre());
        empleado.setApellido(detallesEmpleado.getApellido());
        empleado.setEmail(detallesEmpleado.getEmail());

        Empleado empleadoActualizado = repository.save(empleado);
        return ResponseEntity.ok(empleadoActualizado);
    }

    //Eliminar un empleado
    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarEmpleado(@PathVariable Long id){
        Empleado empleado = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID : " + id));

        repository.delete(empleado);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar",Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}