package com.chdtu.service;

import com.chdtu.domain.Department;
import com.chdtu.domain.Faculty;
import com.chdtu.domain.auth.Role;
import com.chdtu.domain.auth.User;
import com.chdtu.repository.*;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BootstrapService implements InitializingBean {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private FacultyRepository facultyRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Override
    public void afterPropertiesSet() throws Exception {
        if (((List<User>) userRepository.findAll()).size() == 0) {
            roleRepository.save(new Role("ADMIN"));
            roleRepository.save(new Role("TEACHER"));
            roleRepository.save(new Role("STUDENT"));
            bootstrapUser("admin", "admin", 1L);
            bootstrapUser("teacher", "teacher", 2L);
            bootstrapUser("student", "student", 3L);
            Faculty faculty = bootstrapFaculty("ФІТІС");
            Department department = bootstrapDepartment("Програмна інженерія", faculty);
        }

    }

    private void bootstrapUser(String username, String password, Long roleId) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setRole(roleRepository.findOne(roleId));
        userRepository.save(user);
    }

    private Faculty bootstrapFaculty(String name) {
        Faculty faculty = new Faculty(name, null);
        facultyRepository.save(faculty);
        return faculty;
    }

    private Department bootstrapDepartment(String name, Faculty faculty) {
        Department department = new Department(name, faculty);
        departmentRepository.save(department);
        return department;
    }


}
