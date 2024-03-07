package com.software.softwaresys.service.Program;

import com.software.softwaresys.model.Program;

import java.util.List;

public interface ProgramService {
    public Program saveProgram(Program program);
    public List<Program> getAllPrograms();

    public void deleteById(int id);
    public void updateProgram(int id, Program program);
}
