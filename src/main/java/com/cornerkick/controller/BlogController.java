package com.cornerkick.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by cornerkick on 16/8/11.
 */
@Controller
public class BlogController {

    @RequestMapping("/blogs")
    public String index() {
        return "blog/index";
    }
}
