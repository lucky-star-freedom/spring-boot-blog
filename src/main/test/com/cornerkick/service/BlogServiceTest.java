package com.cornerkick.service;

import com.cornerkick.App;
import com.cornerkick.domain.Blog;
import com.cornerkick.domain.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;
import java.util.List;

/**
 * Created by cornerkick on 16/8/8.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes=App.class)
public class BlogServiceTest {

    @Autowired
    private BlogService blogService;

    @Test
    public void testGetAll() throws Exception {
        List<Blog> blogList = blogService.queryAll();

        for (Blog blog: blogList) {
            System.out.println(blog.getId() + ", " + blog.getTitle());
        }
    }

    @Test
    public void testInsert() {
        Blog blog = new Blog();
        blog.setTitle("test Blog");
        blog.setContent("test Blog content");
        blog.setCreatedAt(new Date());

        Blog insertBlog = blogService.insert(blog);

        System.out.println(insertBlog);
    }
}