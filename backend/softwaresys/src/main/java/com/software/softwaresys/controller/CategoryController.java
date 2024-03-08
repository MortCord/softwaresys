package com.software.softwaresys.controller;

import com.software.softwaresys.model.Category;
import com.software.softwaresys.repository.CategoryRepo;
import com.software.softwaresys.service.Category.CategoryService;
import com.software.softwaresys.service.Category.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/add")
    public String add(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "category saved";
    }

    @GetMapping("/getAll")
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }

    @DeleteMapping("delete/{id}")
    public void deleteById(@PathVariable int id){
        categoryService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public Category updateCategory(@PathVariable int id, @RequestBody Category category){
        return categoryService.updateCategory(id, category);
    }

}
