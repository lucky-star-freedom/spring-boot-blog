package com.cornerkick.dao;

import com.cornerkick.domain.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by cornerkick on 16/8/11.
 */
@Repository
public interface BlogDao extends PagingAndSortingRepository<Blog, Long> {
    Page<Blog> findAll(Pageable pageable);
}
