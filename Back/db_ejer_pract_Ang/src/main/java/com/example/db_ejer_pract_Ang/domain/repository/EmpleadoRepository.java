package com.example.db_ejer_pract_Ang.domain.repository;

import com.example.db_ejer_pract_Ang.persistence.entity.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
}
