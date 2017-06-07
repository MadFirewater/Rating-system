package com.chdtu.domain.auth;

import com.chdtu.domain.BaseEntity;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "ROLE")
public class UserGroup extends BaseEntity implements GrantedAuthority {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Transient
    @Override
    public String getAuthority() {
        return "ROLE_"+getName();
    }
}
