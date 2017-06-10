package com.chdtu.domain;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class Subject extends BaseEntity {
    private String name;

    @ManyToOne
    private Faculty faculty;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Faculty getFaculty() {
        return faculty;
    }

    public void setFaculty(Faculty faculty) {
        this.faculty = faculty;
    }
}
