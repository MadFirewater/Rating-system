package com.chdtu.repository;

import com.chdtu.domain.Group;
import com.chdtu.domain.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface StudentRepository extends CrudRepository<Student, Long> {
    public Set<Student> findStudentsByGroup(Group group);
}
