package com.example.CustomerMaven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.CustomerMaven")
public class CustomerMavenApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerMavenApplication.class, args);
	}

}
