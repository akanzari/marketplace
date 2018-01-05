package com.softparadigm.marketplace.error;

public final class EmailNotValidException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public EmailNotValidException() {
		super();
	}

	public EmailNotValidException(final String message, final Throwable cause) {
		super(message, cause);
	}

	public EmailNotValidException(final String message) {
		super(message);
	}

	public EmailNotValidException(final Throwable cause) {
		super(cause);
	}

}
