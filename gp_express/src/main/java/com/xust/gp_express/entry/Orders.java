package com.xust.gp_express.entry;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-19 20:45
 */
@Entity
@Data
public class Orders {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;


    //姓名
    @NotBlank(message = "姓名不能为空")
    private String name;

    //专业班级
    @NotBlank(message = "专业班级不能为空")
    private String classes;

    //电话
    @NotBlank(message = "电话不能为空")
    private String phoneNumber;

    //寄取件数
    @NotNull(message = "寄取件数不能为空")
    private Integer number;

    //寄（取）件信息
    @NotBlank(message = "寄（取）件信息不能为空")
    private String info;

    //预计送（取）时间
    @NotBlank(message = "预计送（取）时间不能为空")
    private String date;

    //预计送（取）地点
    @NotBlank(message = "预计送（取）地点不能为空")
    private String place;


    //预估价格
    @NotNull(message = "预估价格不能为空")
    private Integer price;

    //发布订单的用户
    private Integer userId;

    //评价 0-5
    private Integer evaluate;

    //寄件    取件
    private String flag;

    //是否付款
    private Boolean bool = false;

    //下单时间
    private Date createDate;


}
