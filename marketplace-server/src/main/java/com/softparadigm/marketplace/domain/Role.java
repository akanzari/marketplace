package com.softparadigm.marketplace.domain;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

@Entity
@Table(name = "MP_ROLE")
public class Role implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID_ROLE")
	private Long id;

	private String name;

	@ManyToMany
	@JoinTable(name = "MP_ROLES_PRIVILEGES", joinColumns = {
			@JoinColumn(name = "ID_ROLE", referencedColumnName = "ID_ROLE") }, inverseJoinColumns = {
					@JoinColumn(name = "ID_PRIVILEGE", referencedColumnName = "ID_PRIVILEGE") })
	private Collection<Privilege> privileges;

	@ManyToMany(mappedBy = "roles")
	private Collection<User> users;

	public Role() {
		super();
	}

	public Role(String name) {
		super();
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Collection<User> getUsers() {
		return users;
	}

	public void setUsers(Collection<User> users) {
		this.users = users;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Collection<Privilege> getPrivileges() {
		return privileges;
	}

	public void setPrivileges(Collection<Privilege> privileges) {
		this.privileges = privileges;
	}

}