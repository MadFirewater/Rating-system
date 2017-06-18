package com.chdtu.config;

import com.chdtu.domain.Department;
import com.chdtu.domain.Faculty;
import com.chdtu.domain.Group;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableJpaRepositories(basePackages = "com.chdtu.repository")
public class WebConfig extends WebMvcConfigurerAdapter {
//    @Bean
//    public RepositoryRestConfigurer repositoryRestConfigurer() {
//
//        return new RepositoryRestConfigurerAdapter();
//    }

    @Bean
    public RepositoryRestConfigurer repositoryRestConfigurer() {

        return new RepositoryRestConfigurerAdapter() {
            @Override
            public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
                config.exposeIdsFor(Faculty.class, Department.class, Group.class);
            }
        };
    }
}
