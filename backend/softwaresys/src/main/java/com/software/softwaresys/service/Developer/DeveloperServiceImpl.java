package com.software.softwaresys.service.Developer;

import com.software.softwaresys.model.Developer;
import com.software.softwaresys.repository.DeveloperRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeveloperServiceImpl implements DeveloperService {
    @Autowired
    DeveloperRepo developerRepo;
    @Override
    public Developer saveDeveloper(Developer developer) {
        return developerRepo.save(developer);
    }

    @Override
    public List<Developer> getAllDeveloper() {
        return developerRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        developerRepo.deleteById(id);
    }

    @Override
    public Developer updateDeveloper(int id, Developer updatedDeveloper) {
        if(updatedDeveloper == null){
            throw new IllegalArgumentException("Updated developer cannot be null");
        }

        Optional<Developer> optionalDeveloper = developerRepo.findById(id);
        if(optionalDeveloper.isPresent()){
            Developer developer = optionalDeveloper.get();
            developer.setDeveloper_Name(updatedDeveloper.getDeveloper_Name());
            return developerRepo.save(developer);
        }
        return updatedDeveloper;
    }
}
