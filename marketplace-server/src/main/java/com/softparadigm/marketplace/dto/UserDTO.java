package com.softparadigm.marketplace.dto;

import java.util.Collection;
import java.util.Date;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Type;

import com.softparadigm.marketplace.annotation.PasswordMatches;
import com.softparadigm.marketplace.annotation.ValidEmail;
import com.softparadigm.marketplace.annotation.ValidPassword;

@PasswordMatches
public class UserDTO {
	
	@NotNull
	@Size(min = 1)
	private String firstName;

	@NotNull
	@Size(min = 1)
	private String lastName;

	@ValidEmail
	@NotNull
	@Size(min = 1)
	private String email;

	@ValidPassword
	private String password;
	
	@NotNull
	@Size(min = 1)
	private String matchingPassword;

	@Type(type = "true_false")
	private boolean isUsing2FA;

	private String secret;

	private String gender;

	private Date birthDate;

	private Collection<AddressDTO> addresses;

	private Collection<ProductDTO> products;

	private Collection<RoleDTO> roles;

	public String getEmail() {
		return email;
	}

	public void setEmail(final String email) {
		this.email = email;
	}

	private Integer role;

	public Integer getRole() {
		return role;
	}

	public void setRole(final Integer role) {
		this.role = role;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(final String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(final String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(final String password) {
		this.password = password;
	}

	public String getMatchingPassword() {
		return matchingPassword;
	}

	public void setMatchingPassword(final String matchingPassword) {
		this.matchingPassword = matchingPassword;
	}

	public boolean isUsing2FA() {
		return isUsing2FA;
	}

	public void setUsing2FA(boolean isUsing2FA) {
		this.isUsing2FA = isUsing2FA;
	}

	public String getSecret() {
		return secret;
	}

	public void setSecret(String secret) {
		this.secret = secret;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public Collection<AddressDTO> getAddresses() {
		return addresses;
	}

	public void setAddresses(Collection<AddressDTO> addresses) {
		this.addresses = addresses;
	}

	public Collection<ProductDTO> getProducts() {
		return products;
	}

	public void setProducts(Collection<ProductDTO> products) {
		this.products = products;
	}

	public Collection<RoleDTO> getRoles() {
		return roles;
	}

	public void setRoles(Collection<RoleDTO> roles) {
		this.roles = roles;
	}

	@Override
	public String toString() {
		final StringBuilder builder = new StringBuilder();
		builder.append("UserDto [firstName=").append(firstName).append(", lastName=").append(lastName)
				.append(", password=").append(password).append(", matchingPassword=").append(matchingPassword)
				.append(", email=").append(email).append(", isUsing2FA=").append(isUsing2FA).append(", role=")
				.append(role).append("]");
		return builder.toString();
	}

}