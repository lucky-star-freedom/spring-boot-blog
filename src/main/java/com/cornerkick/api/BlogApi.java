package com.cornerkick.api;

import com.cornerkick.domain.Blog;
import com.cornerkick.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by cornerkick on 16/8/11.
 */
@RestController
@RequestMapping("api/blog")
public class BlogApi {

    @Autowired
    private BlogService blogService;

    @RequestMapping("all")
    public List<Blog> allBlog() {
        List<Blog> blogList = blogService.queryAll();

        return blogList;
    }
}
