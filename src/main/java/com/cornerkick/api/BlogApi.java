package com.cornerkick.api;

import com.cornerkick.domain.Blog;
import com.cornerkick.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by cornerkick on 16/8/11.
 */
@RestController
@RequestMapping("api/blogs")
public class BlogApi {

    @Autowired
    private BlogService blogService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Blog> getAllBlogs() {
        List<Blog> blogList = blogService.queryAll();

        return blogList;
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Blog insertBlog(@RequestBody Blog blog) {
         return blogService.insert(blog);
    }
}
