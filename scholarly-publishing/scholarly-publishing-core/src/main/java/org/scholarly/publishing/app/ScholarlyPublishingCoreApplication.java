package org.scholarly.publishing.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class ScholarlyPublishingCoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScholarlyPublishingCoreApplication.class, args);
	}
}
