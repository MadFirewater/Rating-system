package com.chdtu.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.userDetailsService(userDetailsService)
                .formLogin()
                // NOTE removed .loginPage("/login")
                .permitAll()
                .and()
                .authorizeRequests()
                .antMatchers("/*.ico", "/*.eot", "/*.svg", "/*.woff2", "/*.ttf", "/*.woff", "/index.html",
                        "/*.js","/assets/**","/signin","/app/**").permitAll()
                .antMatchers("/api/users/**" +
                        "").hasRole("ADMIN")
                .antMatchers("/").permitAll()
                .anyRequest()
                .authenticated().and().
                csrf().disable();
//                .loginProcessingUrl("/loginProcessing").successForwardUrl("/loginSuccess")
//                .failureUrl("/login?error").usernameParameter("login").passwordParameter("password").and().logout()
//                .logoutSuccessUrl("/login").and().csrf().disable();
        //http.userDetailsService(userDetailsService);
    }
}
