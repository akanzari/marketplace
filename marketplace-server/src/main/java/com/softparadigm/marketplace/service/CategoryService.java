package com.softparadigm.marketplace.service;

import java.util.ArrayList;
import java.util.Collection;

import javax.transaction.Transactional;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softparadigm.marketplace.domain.Category;
import com.softparadigm.marketplace.dto.CategoryDTO;
import com.softparadigm.marketplace.repository.CategoryRespository;

@Service
@Transactional
public class CategoryService implements ICategoryService {
	 
	@Autowired
	CategoryRespository categoryRespository;
	
	@Autowired
	DozerBeanMapper mapper;
	
	@Override
	public Collection<CategoryDTO> fetchCategories() {
		final Collection<CategoryDTO> listCategoryDTO = new ArrayList<CategoryDTO>();
		for (Category category : categoryRespository.findAll()) {
			listCategoryDTO.add(mapper.map(category, CategoryDTO.class));
		}
		return listCategoryDTO;
	}

}
