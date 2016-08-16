package com.cornerkick.api;

import com.cornerkick.domain.Blog;
import com.cornerkick.dto.MessageDto;
import com.cornerkick.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.MultiValueMap;
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

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public MessageDto deleteBlog(@PathVariable Long id) {
        MessageDto messageDto = blogService.deleteById(id);
        return messageDto;
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Blog updateBlog(@PathVariable Long id,
                           @RequestBody MultiValueMap<String,String> body) {
        String title = body.getFirst("title");
        String content = body.getFirst("content");
        Blog blog = new Blog();
        blog.setTitle(title);
        blog.setContent(content);

        Blog updatedBlog = blogService.update(id, blog);
        return updatedBlog;
    }
}
