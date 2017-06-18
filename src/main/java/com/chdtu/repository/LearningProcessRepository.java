package com.chdtu.repository;

import com.chdtu.domain.Group;
import com.chdtu.domain.LearningProcess;
import com.chdtu.domain.Teacher;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface LearningProcessRepository extends CrudRepository<LearningProcess, Long> {
    Set<LearningProcess> findAllByGroupAndTeachers(Group group, Set<Teacher> teachers);
}
