package com.software.softwaresys.service.Category;

import com.software.softwaresys.model.Category;
import com.software.softwaresys.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;
    @Override
    public Category saveCategory(Category category) {
        return categoryRepo.save(category);
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }

    @Override
    public void deleteById(int id) {
        categoryRepo.deleteById(id);
    }

    @Override
    public Category updateCategory(int id, Category updatedCategory) {
        if (updatedCategory == null){
            throw new IllegalArgumentException("Updated category cannot be null");
        }
        Optional<Category> optionalCategory = categoryRepo.findById(id);

        if(optionalCategory.isPresent()){
            Category category = optionalCategory.get();
            category.setCategory_Name(updatedCategory.getCategory_Name());
            return categoryRepo.save(category);
        }
        return updatedCategory;
    }
}
