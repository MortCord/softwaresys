package com.software.softwaresys.controller;

import com.software.softwaresys.model.Developer;
import com.software.softwaresys.service.Developer.DeveloperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dev")
public class DeveloperController {
    @Autowired
    private DeveloperService developerService;

    @PostMapping("/add")
    public String add(@RequestBody Developer developer){
        developerService.saveDeveloper(developer);
        return "Developer added";
    }

    @GetMapping("/getAll")
    public List<Developer> getAll(){
        return developerService.getAllDeveloper();
    }

    @DeleteMapping("delete/{id}")
    public void deleteById(@PathVariable int id){
        developerService.deleteById(id);
    }

    @PutMapping("update/{id}")
    public Developer updateDeveloper(@PathVariable int id, @RequestBody Developer developer){
        return developerService.updateDeveloper(id,developer);
    }
}
