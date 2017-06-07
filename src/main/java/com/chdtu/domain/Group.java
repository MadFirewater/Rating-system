package com.chdtu.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "User_Group")
public class Group extends BaseEntity {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
