package com.softparadigm.marketplace.dto;

import java.util.Collection;

public class CategoryDTO {

	private Long id;

	private String name;

	private String slug;

	private String description;

	private Long parentId;

	private Collection<CategoryDTO> subCategory;

	private Collection<MediaDTO> media;

	private Collection<ProductDTO> products;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSlug() {
		return slug;
	}

	public void setSlug(String slug) {
		this.slug = slug;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public Collection<CategoryDTO> getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(Collection<CategoryDTO> subCategory) {
		this.subCategory = subCategory;
	}

	public Collection<MediaDTO> getMedia() {
		return media;
	}

	public void setMedia(Collection<MediaDTO> media) {
		this.media = media;
	}

	public Collection<ProductDTO> getProducts() {
		return products;
	}

	public void setProducts(Collection<ProductDTO> products) {
		this.products = products;
	}

}
