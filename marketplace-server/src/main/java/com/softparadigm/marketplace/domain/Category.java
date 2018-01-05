package com.softparadigm.marketplace.domain;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "MP_CATEGORY")
public class Category implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_CATEGORY")
	private Long id;

	private String name;

	private String slug;

	@Lob
	private String description;

	private Long parentId;

	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "MP_SUBCAT_CATEGORY", joinColumns = @JoinColumn(name = "ID_CATEGORY"), inverseJoinColumns = @JoinColumn(name = "ID_SUBCATEGORY"))
	private Collection<Category> subCategory;

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	private Collection<Media> media;

	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	private Collection<Product> products;

	public Category() {
		super();
	}

	public Category(String name, String slug, String description, Long parentId) {
		super();
		this.name = name;
		this.slug = slug;
		this.description = description;
		this.parentId = parentId;
	}

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

	public Collection<Category> getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(Collection<Category> subCategory) {
		this.subCategory = subCategory;
	}

	public Collection<Media> getMedia() {
		return media;
	}

	public void setMedia(Collection<Media> media) {
		this.media = media;
	}

	public Collection<Product> getProducts() {
		return products;
	}

	public void setProducts(Collection<Product> products) {
		this.products = products;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

}
