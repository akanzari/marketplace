package com.softparadigm.marketplace.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "MP_ADDRESS")
public class Address implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_ADDRESS")
	private Long id;

	public enum Type {
		SHIPPING,
		BILLING,
		BOTH;	
	}
	@Enumerated(EnumType.STRING)
	private Type typeAddr;

	private String city;

	private String zipCode;

	private String country;

	private String state;

	@ManyToOne
	@JoinColumn(name = "FK_USER")
	private User user;

	public Address() {
		super();
	}

	public Address(String city, String country, String state,String zipCode) {
		super();
		this.city = city;
		this.country = country;
		this.state = state;
		this.zipCode = zipCode;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public Type getTypeAddr() {
		return typeAddr;
	}

	public void setTypeAddr(Type typeAddr) {
		this.typeAddr = typeAddr;
	}


}
