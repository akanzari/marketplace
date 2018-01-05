package com.softparadigm.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softparadigm.marketplace.domain.Category;

public interface CategoryRespository extends JpaRepository<Category, Long> {


}
