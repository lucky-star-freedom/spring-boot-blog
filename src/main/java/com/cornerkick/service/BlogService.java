package com.cornerkick.service;

import com.cornerkick.domain.Blog;
import com.cornerkick.dto.MessageDto;

import java.util.List;

/**
 * Created by cornerkick on 16/8/11.
 */
public interface BlogService {
    List<Blog> queryAll();

    Blog insert(Blog blog);

    MessageDto deleteById(long id);

    Blog update(long id, Blog blog);
}
