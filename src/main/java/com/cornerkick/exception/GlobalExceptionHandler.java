package com.cornerkick.exception;

import com.cornerkick.dto.MessageDto;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Set;

/**
 * Created by cornerkick on 2016/8/29.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseBody
    public MessageDto validationExceptionHandler(ConstraintViolationException exception) {
        StringBuffer sb = new StringBuffer();
        Set<ConstraintViolation<?>> violations = exception.getConstraintViolations();
        for (ConstraintViolation violation: violations) {
            sb.append(violation.getMessage());
        }

        MessageDto messageDto = new MessageDto(400, sb.toString());
        return messageDto;
    }
}
