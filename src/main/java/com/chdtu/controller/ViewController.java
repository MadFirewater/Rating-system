package com.chdtu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/signIn"})
    public String index() {
        return "forward:/index.html";
    };

    @RequestMapping({"/app/**"})
    public String other() {
        return index();
    };
}
