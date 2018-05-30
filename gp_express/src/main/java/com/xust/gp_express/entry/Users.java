package com.xust.gp_express.entry;

import lombok.Data;
import org.springframework.lang.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-19 15:23
 */
@Entity
@Data
public class Users {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    //用户账号
    @NotBlank(message = "账号不能为空！")
    @Pattern(regexp = "^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\\d{8}$",
    message = "请输入正确的手机号！")
    private String userPhoneNumber;

    //用户密码
    @NotBlank(message = "用户密码不能为空！")
    private String password;

    //是否是管理员  0为管理员  1为普通
    @NotNull(message = "是否是管理员不能为空！")
    @DecimalMax("1")
    private int flag ;


    public Users(){

    }
}
