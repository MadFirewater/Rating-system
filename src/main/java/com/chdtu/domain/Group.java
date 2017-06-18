package com.chdtu.domain;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "STUDENT_GROUP")
public class Group extends BaseEntity {
    private String name;

    @OneToMany(mappedBy = "group", fetch = FetchType.EAGER)
    private Set<Student> students;

    @ManyToOne
    private Department department;

    @OneToMany(mappedBy = "group")
    private Set<LearningProcess> learningProcesses;

    public Group() {
    }

    public Group(String name, Department department) {
        this.name = name;
        this.department = department;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Set<LearningProcess> getLearningProcesses() {
        return learningProcesses;
    }

    public void setLearningProcesses(Set<LearningProcess> learningProcesses) {
        this.learningProcesses = learningProcesses;
    }
}
