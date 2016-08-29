package com.cornerkick.dao;

import com.cornerkick.App;
import com.cornerkick.domain.Blog;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.validation.ConstraintViolationException;
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
    public void testUpdate() {
        long id = 3;
        Blog blog = blogDao.findOne(id);
        System.out.println(blog.getContent());
    }

    @Test(expected = ConstraintViolationException.class)
    public void testInsertBlogWithEmptyTitle() {
        Blog blog = new Blog();
        blog.setContent("empty title");

        blogDao.save(blog);
    }

    @Test(expected = ConstraintViolationException.class)
    public void testInsertBlogWithLongTitle() {
        Blog blog = new Blog();

        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < 200; i++) {
            sb.append(i);
        }

        blog.setTitle(sb.toString());
        blog.setContent("long title");

        blogDao.save(blog);
    }
}
