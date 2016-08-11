package com.cornerkick.dao;

import com.cornerkick.domain.Blog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by cornerkick on 16/8/11.
 */
@Repository
public interface BlogDao extends CrudRepository<Blog, Long> {
    List<Blog> findAll();
}
