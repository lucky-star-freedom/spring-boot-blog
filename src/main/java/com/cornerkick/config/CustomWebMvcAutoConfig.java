package com.cornerkick.config;

import com.cornerkick.utils.UploadUtils;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.web.DispatcherServletAutoConfiguration;
import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

/**
 * Created by cornerkick on 2016/8/31.
 */
@Configuration
@AutoConfigureAfter(DispatcherServletAutoConfiguration.class)
public class CustomWebMvcAutoConfig extends WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        registry.addResourceHandler("/images/**").addResourceLocations(UploadUtils.STATIC_FILE_RESOURCE);

        super.addResourceHandlers(registry);
    }
}
