package com.chdtu.controller;

import com.chdtu.domain.Group;
import com.chdtu.domain.Teacher;
import com.chdtu.domain.auth.User;
import com.chdtu.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class GroupController {

    @Autowired
    GroupRepository groupRepository;

    @PreAuthorize("hasRole('ROLE_TEACHER')")
    @RequestMapping(value = "api/selectGroups", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    List<Group> getRatingForTeacher(@RequestParam int facultyId) {
        Teacher teacher = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getTeacher();
        List<Group> result = new ArrayList<>();
        teacher.getLearningProcesses().forEach((x) -> result.add(x.getGroup()));
        return result;
    }
}
