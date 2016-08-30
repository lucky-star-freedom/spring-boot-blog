package com.cornerkick.service.impl;

import com.cornerkick.dao.BlogDao;
import com.cornerkick.domain.Blog;
import com.cornerkick.dto.MessageDto;
import com.cornerkick.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by cornerkick on 16/8/11.
 */
@Service
public class BlogServiceImpl implements BlogService {
    @Autowired
    private BlogDao blogDao;

    private Sort sortById = new Sort(Sort.Direction.ASC, "id");


    @Override
    public List<Blog> findByPage(int pageNum, int size) {
        Pageable pageable = new PageRequest(pageNum, size, sortById);
        Page<Blog> blogPage = blogDao.findAll(pageable);

        return blogPage.getContent();
    }

    @Override
    public Blog insert(Blog blog) {
        return blogDao.save(blog);
    }

    @Override
    public MessageDto deleteById(long id) {
        blogDao.delete(id);

        MessageDto messageDto = new MessageDto(200, "blog deleted successfully");

        return messageDto;
    }

    @Override
    public Blog update(long id, Blog blog) {
        Blog updateBlog = blogDao.findOne(id);

        updateBlog.setTitle(blog.getTitle());
        updateBlog.setContent(blog.getContent());

        return blogDao.save(updateBlog);
    }

    @Override
    public Blog queryById(long id) {
        return blogDao.findOne(id);
    }
}
