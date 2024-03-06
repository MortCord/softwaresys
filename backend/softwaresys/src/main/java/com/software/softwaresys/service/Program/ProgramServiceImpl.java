package com.software.softwaresys.service.Program;

import com.software.softwaresys.model.Program;
import com.software.softwaresys.repository.ProgramRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
