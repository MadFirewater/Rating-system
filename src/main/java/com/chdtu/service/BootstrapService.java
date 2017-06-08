package com.chdtu.service;

import com.chdtu.domain.auth.User;
import com.chdtu.domain.auth.UserGroup;
import com.chdtu.repository.UserGroupRepository;
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
    UserGroupRepository userGroupRepository;

    @Override
    public void afterPropertiesSet() throws Exception {
        if(((List<User>) userRepository.findAll()).size()==0){
            User user=new User();
            UserGroup userGroup=new UserGroup();
            userGroup.setName("ADMIN");
            userGroupRepository.save(userGroup);
            user.setUsername("admin");
            user.setPassword("admin");
            user.setUserGroup(userGroupRepository.findOne(1L));
            userRepository.save(user);
        };

    }
}
