package com.softparadigm.marketplace.error;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.softparadigm.marketplace.util.GenericResponse;

@RestControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler({ UserAlreadyExistException.class })
	public ResponseEntity<Object> handleUserAlreadyExist(final RuntimeException ex) {
		logger.error("409 Status Code", ex);
		final GenericResponse bodyOfResponse = new GenericResponse(
				"An account for that username/email already exists. Please enter a different username.",
				"UserAlreadyExist");
		return new ResponseEntity<Object>(bodyOfResponse, new HttpHeaders(), HttpStatus.CONFLICT);
	}

	@ExceptionHandler({ UserNotFoundException.class })
	public ResponseEntity<Object> handleUserNotFound(final RuntimeException ex) {
		logger.error("404 Status Code", ex);
		final GenericResponse bodyOfResponse = new GenericResponse("User Not Found", "UserNotFound");
		return new ResponseEntity<Object>(bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler({ EmailNotValidException.class })
	public ResponseEntity<Object> handleEmailNotValid(final RuntimeException ex) {
		logger.error("404 Status Code", ex);
		final GenericResponse bodyOfResponse = new GenericResponse("Email Not Valid", "EmailNotValid");
		return new ResponseEntity<Object>(bodyOfResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler({ PasswordNotValidException.class })
	public ResponseEntity<Object> handlePasswordNotValid(final RuntimeException ex) {
		logger.error("404 Status Code", ex);
		final GenericResponse bodyOfResponse = new GenericResponse("Password Not Valid", "PasswordNotValid");
		return new ResponseEntity<Object>(bodyOfResponse, new HttpHeaders(), HttpStatus.BAD_REQUEST);
	}

}
