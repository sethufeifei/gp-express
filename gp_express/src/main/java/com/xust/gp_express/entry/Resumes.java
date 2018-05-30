package com.xust.gp_express.entry;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-19 21:38
 */
@Entity
@Data
public class Resumes {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    //姓名
    @NotBlank(message = "姓名不能为空！")
    private String name;

    //学院
    @NotBlank(message = "学院不能为空！")
    private String college;

    //专业班级
    @NotBlank(message = "专业班级不能为空！")
    private String classes;

    //学号
    @NotBlank(message = "学号不能为空！")
    private String schoolNumber;

    //联系方式
    @NotBlank(message = "电话不能为空！")
    private String phoneNumber;

    //单双周空课时间
    @NotBlank(message = "单双周空课时间不能为空！")
    private String emptyLesson;

    //兼职理由
    @NotBlank(message = "兼职理由不能为空！")
    private String info;

    //简历提交时间
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

    private Integer userId;

}
