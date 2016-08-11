package com.cornerkick.service.impl;

import com.cornerkick.dao.BlogDao;
import com.cornerkick.domain.Blog;
import com.cornerkick.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by cornerkick on 16/8/11.
 */
@Service
public class BlogServiceImpl implements BlogService {
    @Autowired
    private BlogDao blogDao;

    @Override
    public List<Blog> queryAll() {
        return blogDao.findAll();
    }
}
