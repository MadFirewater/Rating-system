package com.chdtu.domain;

import javax.persistence.*;
import java.util.Set;

@Entity
public class
LearningProcess extends BaseEntity {

    @ManyToOne
    private Subject subject;

    @ManyToOne
    private Group group;

    @ManyToMany
    private Set<Teacher> teachers;

    @OneToMany(mappedBy = "learningProcess", fetch = FetchType.EAGER)
    private Set<Topic> topics;

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public Set<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(Set<Teacher> teachers) {
        this.teachers = teachers;
    }

    public Set<Topic> getTopics() {
        return topics;
    }

    public void setTopics(Set<Topic> topics) {
        this.topics = topics;
    }
}
