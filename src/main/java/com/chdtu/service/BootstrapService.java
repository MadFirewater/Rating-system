package com.chdtu.service;

import com.chdtu.domain.auth.Role;
import com.chdtu.domain.auth.User;
import com.chdtu.repository.RoleRepository;
import com.chdtu.repository.UserRepository;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BootstrapService implements InitializingBean {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Override
    public void afterPropertiesSet() throws Exception {
        if (((List<User>) userRepository.findAll()).size() == 0) {
            User user = new User();
            roleRepository.save(new Role("ADMIN"));
            roleRepository.save(new Role("TEACHER"));
            roleRepository.save(new Role("STUDENT"));
            user.setUsername("admin");
            user.setPassword("admin");
            user.setRole(roleRepository.findOne(1L));
            userRepository.save(user);
        }
        ;

    }
}
