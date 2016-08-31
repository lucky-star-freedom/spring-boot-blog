package com.cornerkick.dao;

import com.cornerkick.App;
import com.cornerkick.domain.Blog;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
        long now = new Date().getTime();
        for (int i = 0; i < 21; i++) {
            now = now - 10000L;
            Blog blog = new Blog();
            blog.setTitle("title " + i);
            blog.setContent("content " + i);
            blog.setCreatedAt(new Date(now));

            blogDao.save(blog);
        }
    }

    @Test
    public void testFindByPage() {
        int page = 1;
        int size = 10;
        Sort sort = new Sort(Sort.Direction.ASC, "id");
        Pageable pageable = new PageRequest(page, size, sort);

        Page<Blog> blogPage = blogDao.findAll(pageable);

        List<Blog> secondPageBlogs = blogPage.getContent();
        Blog firstBlog = secondPageBlogs.get(0);
        System.out.println(firstBlog.getId());
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
