package com.cornerkick.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by cornerkick on 16/8/11.
 */
@Controller
@RequestMapping("blogs")
public class BlogController {

    @RequestMapping("")
    public String index() {
        return "blog/index";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public String detail(@PathVariable Long id, Model model) {
        model.addAttribute("blogId", id);
        return "blog/detail";
    }
}
