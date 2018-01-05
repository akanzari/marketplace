package com.softparadigm.marketplace.controller;

import java.util.ArrayList;
import java.util.Collection;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softparadigm.marketplace.dto.CategoryDTO;
import com.softparadigm.marketplace.service.CategoryService;

@RestController
@RequestMapping("/categories")
public class CategoryController {

	@Autowired
	private Logger logger;

	@Autowired
	private CategoryService categoryService;

	@GetMapping
	public ResponseEntity<?> listAllCategories() {
		Collection<CategoryDTO> categories = categoryService.fetchCategories();
		Collection<CategoryDTO> categoriesToDisplay = new ArrayList<CategoryDTO>();
		if (categories.isEmpty()) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			for (CategoryDTO category : categories) {
				if (category.getParentId() == null) {
					categoriesToDisplay.add(category);
				}
			}
		}
		return new ResponseEntity<Collection<CategoryDTO>>(categoriesToDisplay, HttpStatus.OK);
	}

}
