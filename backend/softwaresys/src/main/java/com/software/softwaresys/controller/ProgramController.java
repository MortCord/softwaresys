package com.software.softwaresys.controller;

import com.software.softwaresys.model.Program;
import com.software.softwaresys.service.Program.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @DeleteMapping("/delete/{id}")
    public void deleteResource(@PathVariable int id){
        programService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateProgram(@RequestParam int id, @RequestBody Program program){
        try {
            // Call the service method to update the program
            programService.updateProgram(id, program);
            // Return a success response
            return ResponseEntity.ok().build();
        }catch (Exception e) {
            // Handle generic exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update program");
        }
    }
}
