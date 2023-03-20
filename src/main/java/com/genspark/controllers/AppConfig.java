package com.genspark.controllers;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@Configuration
@EntityScan(basePackages = "")
@EnableJpaRepositories(basePackages = "src/main/java/factory")
@ComponentScan(basePackages = "src/main/java/entity")
@EnableAutoConfiguration
public class AppConfig {
}
