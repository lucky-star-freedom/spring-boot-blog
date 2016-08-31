package com.cornerkick.utils;

import java.io.File;
import java.util.UUID;

/**
 * Created by cornerkick on 2016/8/31.
 */
public class UploadUtils {

    public static String STATIC_FILE_RESOURCE = "file:///your_path";

    public static String STATIC_RESOURCE_FOLDER = "your_path";


    private static String[] characters = new String[] { "a", "b", "c", "d", "e", "f",
            "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
            "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5",
            "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
            "W", "X", "Y", "Z" };

    private static String generateShortUuid() {
        StringBuffer shortBuffer = new StringBuffer();
        String uuid = UUID.randomUUID().toString().replace("-", "");
        for (int i = 0; i < 8; i++) {
            String str = uuid.substring(i * 4, i * 4 + 4);
            int x = Integer.parseInt(str, 16);
            shortBuffer.append(characters[x % 0x3E]);
        }
        return shortBuffer.toString();
    }

    public static File generateUploadImage() {
        String imageFileName = generateShortUuid() + ".png";
        return new File(STATIC_RESOURCE_FOLDER, imageFileName);
    }
}
