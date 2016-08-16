package com.cornerkick.dao;

import com.cornerkick.App;
import com.cornerkick.domain.Blog;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;
import java.util.List;

/**
 * Created by cornerkick on 16/8/11.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes=App.class)
public class BlogDaoTest {

    @Autowired
    private BlogDao blogDao;

    @Test
    public void testInsertDummy() {
        Blog blog = new Blog();
        blog.setTitle("test Blog");
        blog.setContent("test Blog content");
        blog.setCreatedAt(new Date());

        blogDao.save(blog);
    }

    @Test
    public void testFindAll() {
        List<Blog> blogList = blogDao.findAll();

        for (Blog blog: blogList) {
            System.out.println(blog.getId() + ", " + blog.getTitle());
        }
    }

    @Test
    public void testDeleteById() {
        long id = 8;

        blogDao.delete(id);
    }
}
