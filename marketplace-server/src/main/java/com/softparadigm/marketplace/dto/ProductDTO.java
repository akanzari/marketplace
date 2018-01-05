package com.softparadigm.marketplace.dto;

import java.util.Collection;
import java.util.Date;

public class ProductDTO {

	private Long id;

	private String name;

	private String description;

	private String slug;

	private double price;

	private double quantity;

	private Date creationDate;

	private CategoryDTO category;

	private Collection<MediaDTO> media;

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSlug() {
		return slug;
	}

	public void setSlug(String slug) {
		this.slug = slug;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public CategoryDTO getCategory() {
		return category;
	}

	public void setCategory(CategoryDTO category) {
		this.category = category;
	}

	public Collection<MediaDTO> getMedia() {
		return media;
	}

	public void setMedia(Collection<MediaDTO> media) {
		this.media = media;
	}
	
}
