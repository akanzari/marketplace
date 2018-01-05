package com.softparadigm.marketplace.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.softparadigm.marketplace.domain.User;
import com.softparadigm.marketplace.dto.UserDTO;
import com.softparadigm.marketplace.event.OnRegistrationCompleteEvent;
import com.softparadigm.marketplace.service.IUserService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping(value = "/user")
public class RegistrationController {

	@Autowired
	private Logger logger;

	@Autowired
	private IUserService userService;

	@Autowired
	private ApplicationEventPublisher eventPublisher;
	
	@PostMapping(value = "/registration")
	public ResponseEntity<?> registerUserAccount(@RequestBody @Valid final UserDTO accountDto, final HttpServletRequest request) {
		logger.info("Registering user account with information: {}", accountDto);

		final User registered = userService.registerNewUserAccount(accountDto);
		eventPublisher.publishEvent(new OnRegistrationCompleteEvent(registered));
		return new ResponseEntity<User>(registered, HttpStatus.CREATED);
	}
	
}
