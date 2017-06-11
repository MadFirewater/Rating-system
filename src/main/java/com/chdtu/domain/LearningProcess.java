package com.chdtu.domain;

import javax.persistence.*;
import java.util.Set;

@Entity
public class
LearningProcess extends BaseEntity {

    @ManyToOne
    private Subject subject;

    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Group> groups;

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

    public Set<Group> getGroups() {
        return groups;
    }

    public void setGroups(Set<Group> groups) {
        this.groups = groups;
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
