package com.softparadigm.marketplace.error;

public final class PasswordNotValidException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public PasswordNotValidException() {
		super();
	}

	public PasswordNotValidException(final String message, final Throwable cause) {
		super(message, cause);
	}

	public PasswordNotValidException(final String message) {
		super(message);
	}

	public PasswordNotValidException(final Throwable cause) {
		super(cause);
	}

}
