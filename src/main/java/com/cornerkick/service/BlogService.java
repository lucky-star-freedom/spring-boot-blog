package com.cornerkick.service;

import com.cornerkick.domain.Blog;

import java.util.List;

/**
 * Created by cornerkick on 16/8/11.
 */
public interface BlogService {
    List<Blog> queryAll();

    Blog insert(Blog blog);
}
