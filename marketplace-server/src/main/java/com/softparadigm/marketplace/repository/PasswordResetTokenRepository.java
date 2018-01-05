package com.softparadigm.marketplace.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.softparadigm.marketplace.domain.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {

	@Modifying
	@Query("delete from PasswordResetToken t where t.expiryDate <= ?1")
	void deleteAllExpiredSince(Date now);

}
