package com.softparadigm.marketplace.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.softparadigm.marketplace.domain.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	Product findBySlug(String slug);
	
	@Query("FROM Product AS p WHERE p.category.slug = ?1")
	Collection<Product> findProductsByCategorySlug(String Slug);
}
