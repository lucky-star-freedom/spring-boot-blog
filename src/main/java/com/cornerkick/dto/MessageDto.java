package com.cornerkick.dto;

/**
 * Created by cornerkick on 2016/8/16.
 */
public class MessageDto {

    private int statusCode;

    private String message;

    public MessageDto(int statusCode, String message) {
        this.statusCode = statusCode;
        this.message = message;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
