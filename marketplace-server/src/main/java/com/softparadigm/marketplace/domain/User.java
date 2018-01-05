package com.softparadigm.marketplace.domain;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.jboss.aerogear.security.otp.api.Base32;

@Entity
@Table(name = "MP_USER")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_USER")
	private Long id;

	private String password;

	private boolean isUsing2FA;

	private String secret;

	private String gender;

	private Date birthDate;

	private String firstName;
	
	private String lastName;	

	private boolean enabled;

	private String email;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private Collection<Address> addresses;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private Collection<Product> products;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "MP_USERS_ROLES", joinColumns = {
			@JoinColumn(name = "ID_USER", referencedColumnName = "ID_USER") }, inverseJoinColumns = {
					@JoinColumn(name = "ID_ROLE", referencedColumnName = "ID_ROLE") })
	private Collection<Role> roles;

	public User() {
		super();
	}

	public User(String password, String gender, Date birthDate, String firstName, String lastName, String email) {
		super();
		this.password = password;
		this.enabled = false;
		this.gender = gender;
		this.birthDate = birthDate;
		this.firstName = firstName;
		this.secret = Base32.random();
		this.lastName = lastName;
		this.email = email;
	}

	public Collection<Role> getRoles() {
		return roles;
	}

	public void setRoles(Collection<Role> roles) {
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public Collection<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(Collection<Address> addresses) {
		this.addresses = addresses;
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

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public Collection<Product> getProducts() {
		return products;
	}

	public void setProducts(Collection<Product> products) {
		this.products = products;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = (prime * result) + ((email == null) ? 0 : email.hashCode());
		return result;
	}

	@Override
	public boolean equals(final Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (getClass() != obj.getClass()) {
			return false;
		}
		final User user = (User) obj;
		if (!email.equals(user.email)) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		final StringBuilder builder = new StringBuilder();
		builder.append("User [id=").append(id).append(", firstName=").append(firstName).append(", lastName=")
				.append(lastName).append(", email=").append(email).append(", password=").append(password)
				.append(", enabled=").append(enabled).append(", isUsing2FA=").append(isUsing2FA).append(", secret=")
				.append(secret).append(", roles=").append(roles).append("]");
		return builder.toString();
	}

}
