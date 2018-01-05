package com.softparadigm.marketplace.service;

import java.util.ArrayList;
import java.util.Collection;

import javax.transaction.Transactional;

import org.dozer.DozerBeanMapper;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softparadigm.marketplace.domain.Product;
import com.softparadigm.marketplace.dto.ProductDTO;
import com.softparadigm.marketplace.repository.ProductRepository;

@Service
@Transactional
public class ProductService implements IProductService {

	@Autowired
	public ProductRepository productRepository;

	@Autowired
	DozerBeanMapper mapper;
	
	@Autowired
	private Logger logger;

	@Override
	public Collection<ProductDTO> fetchProducts() {
		final Collection<ProductDTO> listProductDTO = new ArrayList<ProductDTO>();
		for (Product product : productRepository.findAll()) {
			listProductDTO.add(mapper.map(product, ProductDTO.class));
		}
		return listProductDTO;
	}

	@Override
	public ProductDTO fetchProductBySlug(String slug) {
		return mapper.map(productRepository.findBySlug(slug), ProductDTO.class);
	}

	@Override
	public Collection<ProductDTO> findProductsByCategorySlug(String slug) {
		final Collection<ProductDTO> listProductDTO = new ArrayList<ProductDTO>();
		final Collection<Product> listProduct = productRepository.findProductsByCategorySlug(slug);
		for (Product product : listProduct) {
			listProductDTO.add(mapper.map(product, ProductDTO.class));
		}
		return listProductDTO;
	}

}
