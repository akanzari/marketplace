package com.softparadigm.marketplace.service;

import java.util.Arrays;

import javax.transaction.Transactional;

import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.softparadigm.marketplace.domain.User;
import com.softparadigm.marketplace.domain.VerificationToken;
import com.softparadigm.marketplace.dto.UserDTO;
import com.softparadigm.marketplace.error.UserAlreadyExistException;
import com.softparadigm.marketplace.repository.RoleRepository;
import com.softparadigm.marketplace.repository.UserRepository;
import com.softparadigm.marketplace.repository.VerificationTokenRepository;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
@Transactional
public class UserService implements IUserService {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserRepository repository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private VerificationTokenRepository tokenRepository;
	
	@Autowired
	DozerBeanMapper mapper;

	@Override
	public User registerNewUserAccount(final UserDTO accountDto) {
		if (emailExist(accountDto.getEmail())) {
			throw new UserAlreadyExistException("There is an account with that email adress: " + accountDto.getEmail());
		}
		final User user = mapper.map(accountDto, User.class);
		user.setPassword(passwordEncoder.encode(accountDto.getPassword()));
		 user.setRoles(Arrays.asList(roleRepository.findByName("ROLE_USER")));
		return repository.save(user);
	}

	@Override
	public void createVerificationTokenForUser(final User user, final String token) {
		final VerificationToken myToken = new VerificationToken(token, user);
		tokenRepository.save(myToken);
	}

	private boolean emailExist(final String email) {
		return repository.findByEmail(email) != null;
	}

}
