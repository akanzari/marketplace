package com.softparadigm.marketplace.dto;

import java.util.Collection;

public class GenericCollectionDTO<T> {

	private Collection<T> data;

	public GenericCollectionDTO() {
	}

	public GenericCollectionDTO(Collection<T> data) {
		super();
		this.data = data;
	}

	public Collection<T> getData() {
		return data;
	}

	public void setData(Collection<T> data) {
		this.data = data;
	}

}
