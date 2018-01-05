package com.softparadigm.marketplace;

import java.util.Arrays;
import java.util.List;

import org.dozer.DozerBeanMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InjectionPoint;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.softparadigm.marketplace.validation.EmailValidator;
import com.softparadigm.marketplace.validation.PasswordMatchesValidator;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@ConfigurationProperties(prefix = "api")
@EnableScheduling
public class MarketplaceServerApplication {

	private String endPoint;

	private String pathPattern;

	public static void main(String[] args) {
		SpringApplication.run(MarketplaceServerApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping(pathPattern).allowedOrigins(endPoint);
			}
		};
	}

	@Bean
	@Scope("prototype")
	Logger logger(InjectionPoint injectionPoint) {
		return LoggerFactory.getLogger(injectionPoint.getMember().getDeclaringClass());
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
    public EmailValidator usernameValidator() {
        return new EmailValidator();
    }

    @Bean
    public PasswordMatchesValidator passwordMatchesValidator() {
        return new PasswordMatchesValidator();
    }
    
    @Bean(name = "org.dozer.Mapper")
    public DozerBeanMapper dozerBean() {
      List<String> mappingFiles = Arrays.asList(
        "classpath:dozer/category-mappings.xml", 
        "classpath:dozer/profile-mappings.xml"
      );
      DozerBeanMapper dozerBean = new DozerBeanMapper();
      dozerBean.setMappingFiles(mappingFiles);
      return dozerBean;
    }

	public String getEndPoint() {
		return endPoint;
	}

	public void setEndPoint(String endPoint) {
		this.endPoint = endPoint;
	}

	public String getPathPattern() {
		return pathPattern;
	}

	public void setPathPattern(String pathPattern) {
		this.pathPattern = pathPattern;
	}

}
