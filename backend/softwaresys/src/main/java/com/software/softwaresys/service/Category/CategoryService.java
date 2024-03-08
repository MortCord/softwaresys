package com.software.softwaresys.service.Category;

import com.software.softwaresys.model.Category;

import java.util.List;

public interface CategoryService {
    public Category saveCategory(Category category);

    public List<Category> getAllCategories();
    public void deleteById(int id);
    public Category updateCategory(int id, Category updatedCategory);
}
