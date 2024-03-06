package com.software.softwaresys.controller;

import com.software.softwaresys.model.Program;
import com.software.softwaresys.service.Program.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/program")
public class ProgramController {
    @Autowired
    private ProgramService programService;

    @PostMapping("/add")
    public String add(@RequestBody Program program){
        programService.saveProgram(program);
        return "New program is added";
    }

    @GetMapping("/getAll")
    public List<Program> getAllPrograms(){
        return programService.getAllPrograms();
    }
}
