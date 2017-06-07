package com.chdtu.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.chdtu.repository")
public class WebConfig {
//    @Bean
//    public RepositoryRestConfigurer repositoryRestConfigurer() {
//
//        return new RepositoryRestConfigurerAdapter();
//    }
}
