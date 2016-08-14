package com.cornerkick.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by cornerkick on 16/8/13.
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String index() {
        return "home/index";
    }
}
