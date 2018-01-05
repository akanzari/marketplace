package com.softparadigm.marketplace.service;

import java.util.Collection;

import com.softparadigm.marketplace.dto.CategoryDTO;

public interface ICategoryService {
	
	Collection<CategoryDTO> fetchCategories();

}
