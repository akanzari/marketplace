package com.softparadigm.marketplace.service;

import java.util.Collection;

import com.softparadigm.marketplace.dto.ProductDTO;

public interface IProductService {
	
	Collection<ProductDTO> fetchProducts();
	
	ProductDTO fetchProductBySlug(String slug);
	
	Collection<ProductDTO> findProductsByCategorySlug(String slug);

}
