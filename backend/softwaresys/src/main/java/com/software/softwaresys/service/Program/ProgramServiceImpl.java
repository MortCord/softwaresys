package com.software.softwaresys.service.Program;

import com.software.softwaresys.model.Category;
import com.software.softwaresys.model.Developer;
import com.software.softwaresys.model.Program;
import com.software.softwaresys.model.ProgramDetails;
import com.software.softwaresys.repository.CategoryRepo;
import com.software.softwaresys.repository.DeveloperRepo;
import com.software.softwaresys.repository.ProgramRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProgramServiceImpl implements ProgramService {
    @Autowired
    private ProgramRepo programRepo;

    private final DeveloperRepo developerRepo;
    private final CategoryRepo categoryRepo;

    @Autowired
    public ProgramServiceImpl(DeveloperRepo developerRepo, CategoryRepo categoryRepo) {
        this.developerRepo = developerRepo;
        this.categoryRepo = categoryRepo;
    }


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
    public Program updateProgram(int id, Program updatedProgram) {
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
            return programRepo.save(program);
        }
        return updatedProgram;
    }

    @Override
    public List<ProgramDetails> getProgramDetails() {
        return programRepo.findAll().stream()
                .map(program -> {
                    Category category = categoryRepo.findById(program.getIdCategory()).orElse(null);
                    Developer developer = developerRepo.findById(program.getIdDeveloper()).orElse(null);
                    if (category != null && developer != null) {
                        ProgramDetails dto = new ProgramDetails();
                        dto.setId_prog(program.getId_prog());
                        dto.setCategoryName(category.getCategory_Name());
                        dto.setProgramName(program.getProg_name());
                        dto.setProgramDesc(program.getProg_desc());
                        dto.setDeveloperName(developer.getDeveloper_Name());
                        dto.setProgramLink(program.getProg_link());
                        dto.setCategoryId(category.getId_cat());
                        dto.setDeveloperId(developer.getId_dev());
                        return dto;
                    } else {
                        return null;
                    }
                })
                .filter(dto -> dto != null)
                .collect(Collectors.toList());
    }


}



