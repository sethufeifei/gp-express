package com.xust.gp_express.entry;

import lombok.Data;

import java.util.List;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-19 22:23
 */

//返回值模板类
@Data
public class Result {

    private Integer code;

    private String message;

    private List data;

    public Result(){

    }

}
