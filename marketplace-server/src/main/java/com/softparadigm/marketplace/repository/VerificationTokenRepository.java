package com.softparadigm.marketplace.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.softparadigm.marketplace.domain.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

	@Modifying
	@Query("delete from VerificationToken t where t.expiryDate <= ?1")
	void deleteAllExpiredSince(Date now);

}
