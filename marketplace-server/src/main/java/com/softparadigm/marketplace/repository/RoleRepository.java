package com.softparadigm.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softparadigm.marketplace.domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

	Role findByName(String name);

}