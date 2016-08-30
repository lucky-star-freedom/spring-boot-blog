package com.cornerkick.api;

import com.cornerkick.domain.Blog;
import com.cornerkick.dto.MessageDto;
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
    public List<Blog> getBlogsByPage(@RequestParam(value = "page", defaultValue = "0") int page,
                                     @RequestParam(value = "size", defaultValue = "10") int size) {
        return blogService.findByPage(page, size);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Blog getBlogById(@PathVariable Long id) {
        return blogService.queryById(id);
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Blog insertBlog(@RequestBody Blog blog) {
        return blogService.insert(blog);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public MessageDto deleteBlog(@PathVariable Long id) {
        return blogService.deleteById(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Blog updateBlog(@PathVariable Long id, @RequestBody Blog blog) {
        return blogService.update(id, blog);
    }
}
