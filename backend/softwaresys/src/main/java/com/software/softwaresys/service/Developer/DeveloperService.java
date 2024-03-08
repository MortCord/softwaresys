package com.software.softwaresys.service.Developer;

import com.software.softwaresys.model.Developer;

import java.util.List;

public interface DeveloperService {
    public Developer saveDeveloper(Developer developer);

    public List<Developer> getAllDeveloper();

    public void deleteById(int id);

    public Developer updateDeveloper(int id, Developer updatedDeveloper);
}
