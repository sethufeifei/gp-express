package com.xust.gp_express.util;

import com.xust.gp_express.entry.Result;

import java.util.List;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-20 17:28
 */
public class ReturnHandle {

    private static Result result ;

    public static Result returnData(Integer code,String message, List data){
        result = new Result();
        result.setCode(code);
        result.setMessage(message);
        result.setData(data);
        return result;
    }
    public static Result returnData(Integer code,String message){
        result = new Result();
        result.setCode(code);
        result.setMessage(message);
        return result;
    }
}
