package com.softparadigm.marketplace.event;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.softparadigm.marketplace.domain.User;
import com.softparadigm.marketplace.service.IUserService;

@Component
public class RegistrationListener implements ApplicationListener<OnRegistrationCompleteEvent> {

	@Autowired
	private IUserService service;

	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	private Environment env;

	@Override
	public void onApplicationEvent(final OnRegistrationCompleteEvent event) {
		this.confirmRegistration(event);
	}

	private void confirmRegistration(final OnRegistrationCompleteEvent event) {
		final User user = event.getUser();
		final String token = UUID.randomUUID().toString();
		service.createVerificationTokenForUser(user, token);

		final SimpleMailMessage email = constructEmailMessage(event, user, token);
		mailSender.send(email);
	}

	private final SimpleMailMessage constructEmailMessage(final OnRegistrationCompleteEvent event, final User user,
			final String token) {
		final String recipientAddress = user.getEmail();
		final String subject = "Registration Confirmation";
		final String confirmationUrl = env.getProperty("api.endPoint") + "/registrationConfirm?token=" + token;
		final SimpleMailMessage email = new SimpleMailMessage();
		email.setTo(recipientAddress);
		email.setSubject(subject);
		email.setText("You registered successfully. We will send you a confirmation message to your email account." + " \r\n" + confirmationUrl);
		email.setFrom(env.getProperty("support.email"));
		return email;
	}

}
