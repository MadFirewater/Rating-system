package com.chdtu.controller;

import com.chdtu.bean.GroupBean;
import com.chdtu.bean.StudentBean;
import com.chdtu.bean.SubjectBean;
import com.chdtu.domain.Group;
import com.chdtu.domain.LearningProcess;
import com.chdtu.domain.Student;
import com.chdtu.domain.Teacher;
import com.chdtu.domain.auth.User;
import com.chdtu.repository.GroupRepository;
import com.chdtu.repository.LearningProcessRepository;
import com.chdtu.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashSet;
import java.util.Set;

@Controller
public class TeacherController {

    @Autowired
    GroupRepository groupRepository;

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    LearningProcessRepository learningProcessRepository;

    @PreAuthorize("hasRole('ROLE_TEACHER')")
    @RequestMapping(value = "api/selectGroups", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    Set<GroupBean> getTeacherGroups(@RequestParam(required = false) Long departmentId) {
        Teacher teacher = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getTeacher();
        Set<Group> allGroups = new HashSet<>();
        Set<GroupBean> result = new HashSet<>();
        teacher.getLearningProcesses().forEach((x) -> allGroups.add(x.getGroup()));
        for (Group group : allGroups) {
            if (group.getDepartment().getId().equals(departmentId) || departmentId == null) {
                result.add(new GroupBean(group.getId(), group.getName()));
            }
        }
        return result;
    }

    @PreAuthorize("hasRole('ROLE_TEACHER')")
    @RequestMapping(value = "api/selectStudents", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    Set<StudentBean> getTeacherStudents(@RequestParam(required = true) Long groupId) {
        Group group = groupRepository.findOne(groupId);
        Set<Student> students = studentRepository.findStudentsByGroup(group);
        Set<StudentBean> result = new HashSet<>();
        for (Student student : students) {
            result.add(new StudentBean(student.getId(), student.getFirstName(), student.getSecondName()));
        }
        return result;
    }

    @PreAuthorize("hasRole('ROLE_TEACHER')")
    @RequestMapping(value = "api/selectSubjects", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    Set<SubjectBean> getTeacherSubjects(@RequestParam(required = true) Long groupId) {
        Teacher teacher = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getTeacher();
        Set<Teacher> teachers = new HashSet<>();
        teachers.add(teacher);
        Group group = groupRepository.findOne(groupId);
        Set<LearningProcess> learningProcesses = learningProcessRepository.findAllByGroupAndTeachers(group, teachers);
        Set<SubjectBean> result = new HashSet<>();
        for (LearningProcess learningProcess : learningProcesses)
            result.add(new SubjectBean(learningProcess.getSubject().getId(), learningProcess.getSubject().getName()));
        return result;
    }


}