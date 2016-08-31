package com.cornerkick.service.impl;

import com.cornerkick.dto.MessageDto;
import com.cornerkick.service.UploadService;
import com.cornerkick.utils.UploadUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

/**
 * Created by cornerkick on 2016/8/31.
 */
@Service
public class UploadServiceImp implements UploadService {
    @Override
    public MessageDto uploadImage(MultipartFile uploadImage) {
        File localImage = UploadUtils.generateUploadImage();
        try {
            uploadImage.transferTo(localImage);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        MessageDto messageDto = new MessageDto(200, "upload image successfully");
        return messageDto;
    }
}
