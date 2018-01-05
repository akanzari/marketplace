package com.softparadigm.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.softparadigm.marketplace.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);

}
