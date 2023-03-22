package com.genspark.controllers;

import com.genspark.service.EmailService;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan(basePackages = "com.genspark.entity")
@EnableJpaRepositories(basePackages = "com.genspark.factory")
@ComponentScan(basePackages = "com.genspark.service")
@EnableAutoConfiguration
public class AppConfig {
}
