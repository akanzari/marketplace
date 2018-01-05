package com.softparadigm.marketplace.controller;

import java.util.Collection;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.softparadigm.marketplace.dto.GenericCollectionDTO;
import com.softparadigm.marketplace.dto.ProductDTO;
import com.softparadigm.marketplace.service.ProductService;
import com.softparadigm.marketplace.util.CustomErrorType;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private Logger logger;

	@Autowired
	private ProductService productService;

	@GetMapping
	public ResponseEntity<?> listAllProducts() {
		Collection<ProductDTO> products = productService.fetchProducts();
		if (products.isEmpty()) {
			return new ResponseEntity<GenericCollectionDTO<ProductDTO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Collection<ProductDTO>>(products, HttpStatus.OK);
	}

	@GetMapping("/category/{slug}")
	public ResponseEntity<?> findAllProductById(@PathVariable("slug") String slug) {
		logger.info("Fetching category slug id {}", slug);
		Collection<ProductDTO> products = productService.findProductsByCategorySlug(slug);
		if (products == null || products.isEmpty()) {
			logger.error("Category with slug {} not found.", slug);
			return new ResponseEntity<Object>(new CustomErrorType("Category with slug " + slug + " not found"),
					HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Collection<ProductDTO>>(products, HttpStatus.OK);
	}

	@GetMapping("/{slug}")
	public ResponseEntity<?> getProduct(@PathVariable("slug") String slug) {
		logger.info("Fetching product slug id {}", slug);
		ProductDTO product = productService.fetchProductBySlug(slug);
		if (product == null) {
			logger.error("Product with slug {} not found.", slug);
			return new ResponseEntity<Object>(new CustomErrorType("Product with slug " + slug + " not found"),
					HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<ProductDTO>(product, HttpStatus.OK);
	}

}
