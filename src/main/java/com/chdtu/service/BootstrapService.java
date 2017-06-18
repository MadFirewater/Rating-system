package com.chdtu.service;

import com.chdtu.domain.*;
import com.chdtu.domain.auth.Role;
import com.chdtu.domain.auth.User;
import com.chdtu.repository.*;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    @Autowired
    private SubjectRepository subjectRepository;

    @Autowired
    private CriteriaRepository criteriaRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private LearningProcessRepository learningProcessRepository;

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private GradeRepository gradeRepository;

    @Override
    public void afterPropertiesSet() throws Exception {
        if (((List<User>) userRepository.findAll()).size() == 0) {
            roleRepository.save(new Role("ADMIN"));
            roleRepository.save(new Role("TEACHER"));
            roleRepository.save(new Role("STUDENT"));
            bootstrapUser("admin", "admin", 1L, null, null);
            Faculty faculty = bootstrapFaculty("ФІТІС");
            Department department = bootstrapDepartment("Програмна інженерія", faculty);
            bootstrapFaculty("БФ");
            bootstrapFaculty("ФТМД");
            bootstrapFaculty("ФЕТ");
            bootstrapFaculty("ФХТСО");
            bootstrapFaculty("ФЕУ");
            bootstrapFaculty("ЛФ");
            bootstrapDepartment("Комп. науки", faculty);
            bootstrapDepartment("Інф. технології", faculty);
            bootstrapDepartment("Мережі", faculty);
            Group group = bootstrapGroup("ПЗ-144", department);
            Group group2 = bootstrapGroup("СКС-123", department);
            bootstrapGroup("ФМЛ-134", department);
            bootstrapGroup("ЗПЗ-144", department);
            Subject subject = bootstrapSubject("Матан");
            Subject subject2 = bootstrapSubject("Фізика");
            Subject subject3 = bootstrapSubject("Програмування");
            bootstrapSubject("Мережі");
            bootstrapCriteria("Attendance");
            bootstrapCriteria("Theory");
            bootstrapCriteria("Practice");
            Teacher teacher = bootstrapTeacher("Іван", "Іваненко", department);
            bootstrapUser("teacher", "teacher", 2L, teacher, null);
            Teacher teacher2 = bootstrapTeacher("Василь", "Василенко", department);
            bootstrapTeacher("Олексій", "Олексієнко", department);
            Student student = bootstrapStudent("Ніколай", "Ніколенко", group, "n1");
            bootstrapUser("student", "student", 3L, null, student);
            bootstrapStudent("Аліна", "Петренко", group, "n2");
            bootstrapStudent("Анна", "Ніколаевна", group, "n34");
            bootstrapStudent("Єлена", "Петренко", group, "n35");
            bootstrapLearningProcess(subject, new HashSet<>(Arrays.asList(teacher)), group);
            bootstrapLearningProcess(subject3, new HashSet<>(Arrays.asList(teacher)), group);
//            bootstrapLearningProcess(subject2, new HashSet<>(Arrays.asList(teacher2)), new HashSet<>(Arrays.asList(group2)));
            bootstrapRandomGradesForLearningProcesses();
        }

    }

    private User bootstrapUser(String username, String password, Long roleId, Teacher teacher, Student student) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setRole(roleRepository.findOne(roleId));
        user.setTeacher(teacher);
        user.setStudent(student);
        userRepository.save(user);
        return user;
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

    private Group bootstrapGroup(String name, Department department) {
        Group group = new Group();
        group.setName(name);
        group.setDepartment(department);
        groupRepository.save(group);
        return group;
    }

    private Subject bootstrapSubject(String name) {
        Subject subject = new Subject();
        subject.setName(name);
        subjectRepository.save(subject);
        return subject;
    }

    private Criteria bootstrapCriteria(String name) {
        Criteria criteria = new Criteria();
        criteria.setName(name);
        criteriaRepository.save(criteria);
        return criteria;
    }

    private Teacher bootstrapTeacher(String firstName, String secondName, Department department) {
        Teacher teacher = new Teacher();
        teacher.setFirstName(firstName);
        teacher.setSecondName(secondName);
        teacher.setDepartment(department);
        teacherRepository.save(teacher);
        return teacher;
    }

    private Student bootstrapStudent(String firstName, String secondName, Group group, String recordBookNumber) {
        Student student = new Student();
        student.setFirstName(firstName);
        student.setSecondName(secondName);
        student.setGroup(group);
        student.setRecordBookNumber(recordBookNumber);
        studentRepository.save(student);
        return student;
    }

    private LearningProcess bootstrapLearningProcess(Subject subject, Set<Teacher> teachers, Group group) {
        LearningProcess learningProcess = new LearningProcess();
        learningProcess.setSubject(subject);
        learningProcess.setTeachers(teachers);
        learningProcess.setGroup(group);
        learningProcessRepository.save(learningProcess);
        Set<Topic> topics = new HashSet<>();
        topics.add(bootstrapTopic(learningProcess, "topic1"));
        topics.add(bootstrapTopic(learningProcess, "topic2"));
        topics.add(bootstrapTopic(learningProcess, "topic3"));
        topics.add(bootstrapTopic(learningProcess, "topic4"));
        topics.add(bootstrapTopic(learningProcess, "topic5"));
        learningProcessRepository.save(learningProcess);
        return learningProcess;
    }

    private Topic bootstrapTopic(LearningProcess learningProcess, String name) {
        Topic topic = new Topic();
        topic.setLearningProcess(learningProcess);
        topic.setName(name);
        topicRepository.save(topic);
        return topic;
    }

    private Grade bootstrapGrade(Student student, Topic topic, Criteria criteria, int value) {
        Grade grade = new Grade();
        grade.setStudent(student);
        grade.setTopic(topic);
        grade.setCriteria(criteria);
        grade.setValue(value);
        gradeRepository.save(grade);
        return grade;
    }

    private void bootstrapRandomGradesForLearningProcesses() {
        for (LearningProcess learningProcess : learningProcessRepository.findAll()) {
           Group group=learningProcess.getGroup();
                for (Student student : group.getStudents()) {
                    for (Topic topic : learningProcess.getTopics()) {
                        for (Criteria criteria : criteriaRepository.findAll()) {
                            Integer randomValue = new Integer(1 + (int) (Math.random() * 4));
                            bootstrapGrade(student, topic, criteria, randomValue);
                        }
                    }
                }

        }
    }
}
