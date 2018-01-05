package com.softparadigm.marketplace.service;

import com.softparadigm.marketplace.domain.User;
import com.softparadigm.marketplace.dto.UserDTO;
import com.softparadigm.marketplace.error.UserAlreadyExistException;

public interface IUserService {
	
	User registerNewUserAccount(UserDTO accountDto) throws UserAlreadyExistException;

    void createVerificationTokenForUser(User user, String token);

}
