package com.chdtu.controller;

import com.chdtu.domain.auth.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
public class UserController {

    @RequestMapping(value = "/api/getCurrentUser", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    String getCurrentUserHref(HttpServletRequest request) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String rootUrl = request.getRequestURL().toString().replace(request.getRequestURI(), request.getContextPath());
        String result = "{'href':'" + rootUrl + "/api/users/" + user.getId() + "'}";
        return result;
    }

//    @RequestMapping(value = "/api/getCurrentUserRole", method = RequestMethod.GET, produces = "application/json")
//    public @ResponseBody
//    String getCurrentUserRole() {
//        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        String rootUrl = request.getRequestURL().toString().replace(request.getRequestURI(), request.getContextPath());
//        String result = "{'href':'" + rootUrl + "/api/users/" + user.getId() + "'}";
//        return result;
//    }
}
