package com.cornerkick.service;

import com.cornerkick.App;
import com.cornerkick.domain.Blog;
import com.cornerkick.dto.MessageDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;

/**
 * Created by cornerkick on 16/8/8.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes=App.class)
public class BlogServiceTest {

    @Autowired
    private BlogService blogService;

    @Test
    public void testInsert() {
        Blog blog = new Blog();
        blog.setTitle("test Blog");
        blog.setContent("test Blog content");
        blog.setCreatedAt(new Date());

        Blog insertBlog = blogService.insert(blog);

        System.out.println(insertBlog);
    }

    @Test
    public void testDeleteById() {
        long id = 9;

        MessageDto messageDto = blogService.deleteById(id);

        System.out.println(messageDto.getStatusCode());
        System.out.println(messageDto.getMessage());
    }

    @Test
    public void testUpdate() {
        long id = 3;
        Blog blog = new Blog();
        blog.setTitle("C test");
        blog.setContent("C test content");

        Blog updateBlog = blogService.update(id, blog);
        System.out.println(updateBlog.getTitle());
        System.out.println(updateBlog.getContent());
    }
}