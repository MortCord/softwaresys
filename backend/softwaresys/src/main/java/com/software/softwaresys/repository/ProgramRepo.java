package com.software.softwaresys.repository;


import com.software.softwaresys.model.Program;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ProgramRepo extends JpaRepository<Program, Integer> {
}
