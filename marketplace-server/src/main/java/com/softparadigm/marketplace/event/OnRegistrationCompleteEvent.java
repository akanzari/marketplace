package com.softparadigm.marketplace.event;

import org.springframework.context.ApplicationEvent;

import com.softparadigm.marketplace.domain.User;

public class OnRegistrationCompleteEvent extends ApplicationEvent {

	private static final long serialVersionUID = 1L;

	private final User user;

	public OnRegistrationCompleteEvent(final User user) {
		super(user);
		this.user = user;
	}

	public User getUser() {
		return user;
	}

}
