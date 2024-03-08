package com.software.softwaresys.service.Program;

import com.software.softwaresys.model.Program;
import com.software.softwaresys.model.ProgramDetails;

import java.util.List;

public interface ProgramService {
    public Program saveProgram(Program program);
    public List<Program> getAllPrograms();

    public void deleteById(int id);
    public Program updateProgram(int id, Program updatedProgram);

    public List<ProgramDetails> getProgramDetails();
}
