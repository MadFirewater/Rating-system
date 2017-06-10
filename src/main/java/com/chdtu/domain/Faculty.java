package com.chdtu.domain;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Faculty extends BaseEntity {

    private String name;

    public Faculty() {
    }

    public Faculty(String name, Set<Department> departments) {
        this.name = name;
        this.departments = departments;
    }

    @OneToMany(mappedBy = "faculty")
    Set<Department> departments;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Department> getDepartments() {
        return departments;
    }

    public void setDepartments(Set<Department> departments) {
        this.departments = departments;
    }
}

