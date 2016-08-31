package com.cornerkick.service;

import com.cornerkick.dto.MessageDto;
import org.springframework.web.multipart.MultipartFile;

/**
 * Created by cornerkick on 2016/8/31.
 */
public interface UploadService {
    MessageDto uploadImage(MultipartFile uploadImage);
}
