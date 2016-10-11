package com.cornerkick.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by luzy.fnst on 2016/10/11.
 */
@Controller
public class TestController {

    @RequestMapping("/jasmine")
    public String index() {
        return "jasmine/index";
    }
}
