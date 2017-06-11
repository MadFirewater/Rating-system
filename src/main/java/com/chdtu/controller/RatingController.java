package com.chdtu.controller;

import com.chdtu.bean.GroupRatingBean;
import com.chdtu.domain.Teacher;
import com.chdtu.domain.auth.User;
import com.chdtu.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class RatingController {

    @Autowired
    RatingService ratingService;

//    @Autowired
//    TeacherRepository teacherRepository;

    @PreAuthorize("hasRole('ROLE_TEACHER')")
    @RequestMapping(value = "api/rating", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    List<GroupRatingBean> getRatingForTeacher() {
        Teacher teacher = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getTeacher();
        return ratingService.getGroupRatingsForTeacher(teacher.getId());
    }
}
