package com.software.softwaresys.service.Program;

import com.software.softwaresys.model.Program;
import com.software.softwaresys.repository.ProgramRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProgramServiceImpl implements ProgramService {
    @Autowired
    private ProgramRepo programRepo;
    @Override
    public Program saveProgram(Program program) {
        return programRepo.save(program);
    }

    @Override
    public List<Program> getAllPrograms() {
        return programRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        programRepo.deleteById(id);
    }

    @Override
    public void updateProgram(int id, Program updatedProgram) {
        if (updatedProgram == null) {
            throw new IllegalArgumentException("Updated program cannot be null");
        }

        Optional<Program> optionalProgram = programRepo.findById(id);
        if (optionalProgram.isPresent()) {
            Program program = optionalProgram.get();
            // Update program fields if the program exists
            program.setProg_name(updatedProgram.getProg_name());
            program.setIdCategory(updatedProgram.getIdCategory());
            program.setIdDeveloper(updatedProgram.getIdDeveloper());
            program.setProg_desc(updatedProgram.getProg_desc());
            program.setProg_link(updatedProgram.getProg_link());
            programRepo.save(program);
        }
    }
}
