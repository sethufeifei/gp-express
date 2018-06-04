package com.xust.gp_express.controller;

import com.xust.gp_express.entry.Orders;
import com.xust.gp_express.entry.Result;
import com.xust.gp_express.entry.Users;
import com.xust.gp_express.repository.OrderRepository;
import com.xust.gp_express.repository.UsersRepository;
import com.xust.gp_express.util.ReturnHandle;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-20 17:19
 */
@RestController
@Slf4j
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UsersRepository usersRepository;

    @RequestMapping("/sendPackage")
    public Result sendPackage(
            @Validated Orders orders,
            BindingResult result
    ){

        log.info(orders.getFlag());
        System.out.println(orders);

        if(result.hasErrors()) {
            //返回 code2   参数不正确
            return ReturnHandle.returnData(2,
                    String.valueOf(result.getAllErrors().get(0)));
        }

        orders.setCreateDate(new Date());
        orderRepository.save(orders);

        return ReturnHandle.returnData(1,"提交成功");
    }


//    @RequestMapping("/takePackage")
//    public Result takePackage(
//            @Validated Orders orders,
//            BindingResult result,
//            HttpServletRequest request
//    ){
//        log.info("取件！");
//
//        if(result.hasErrors()) {
//            //返回 code2   参数不正确
//            return ReturnHandle.returnData(2,
//                    String.valueOf(result.getAllErrors().get(0)));
//        }
//
//        orders.setFlag("取件");
//        orders.setCreateDate(new Date());
//        orderRepository.save(orders);
//
//        return ReturnHandle.returnData(1,"提交成功");
//    }

    //管理员查看所有订单
    @RequestMapping("/findOrderAllList")
    public Result findOrderAllList(Integer id){
        log.info("管理员查看所有订单！");
        log.info("userid ====== "+id);
        return ReturnHandle.returnData(1,"成功！",orderRepository.findAll());
    }

    //根据登陆的用户名查询用户的所有订单
    @RequestMapping("/findOrderList/yi")
    public Result findOrderList(Integer id){

        log.info("根据登陆的用户名查询用户的所有已评价订单！");

        Optional<Users> optional = usersRepository.findById(id);
        if(optional.isPresent() && optional.get().getFlag() == 1){
            List<Orders> list = orderRepository.findAll();
            List<Orders> returnList = new ArrayList<>();
            for (Orders order:list) {
                if (order != null && id.equals(order.getUserId()) && order.getEvaluate() != null){
                    returnList.add(order);
                }
            }

            System.out.println(returnList);
            return ReturnHandle.returnData(1,"成功！",returnList);
        }
        return ReturnHandle.returnData(2,"您不是普通用户！");
    }

    @RequestMapping("/findOrderList/wei")
    public Result findOrderList2(Integer id){

        log.info("根据登陆的用户名查询用户的所有未评价订单！");

        Optional<Users> optional = usersRepository.findById(id);
        if(optional.isPresent() && optional.get().getFlag() == 1){
            List<Orders> list = orderRepository.findAll();
            List<Orders> returnList = new ArrayList<>();
            for (Orders order:list) {
                if (order != null && id.equals(order.getUserId()) &&  order.getEvaluate() == null){
                    returnList.add(order);
                }
            }
            return ReturnHandle.returnData(1,"成功！",returnList);
        }
        return ReturnHandle.returnData(2,"您不是普通用户！");
    }



    //根据订单id确认收货
    @RequestMapping("/confirm")
    public Result confirm(Integer orderId){

        log.info("根据订单id确认收货！");

        System.out.println(orderId);

        if(orderId == null){
            return ReturnHandle.returnData(3,"订单号不能为空！");
        }

            Optional<Orders> optionalOrder = orderRepository.findById(orderId);
            if (optionalOrder.isPresent()){
                Orders orders = optionalOrder.get();
                if (orders.getBool()){
                    return ReturnHandle.returnData(5,"此订单已收货！");
                }
                orderRepository.setBooleanFor(true,orderId);
                return ReturnHandle.returnData(1,"确认收货成功！");
            }
            return ReturnHandle.returnData(4,"此订单不存在！");

    }


    //根据订单id评价
    @RequestMapping("/evaluate")
    public Result evaluate(Integer orderId,Integer evaluate){

        log.info("根据订单id评价！");

        System.out.println(orderId);
        System.out.println(evaluate);

        if(orderId == null){
            return ReturnHandle.returnData(3,"订单号不能为空！");
        }

        if(evaluate == null){
            return ReturnHandle.returnData(5,"评价不能为空！");
        }

        if (evaluate < 0 || evaluate > 5){
            return ReturnHandle.returnData(6,"评价参数有误，评价参数应为0-5！");
        }

            Optional<Orders> optionalOrder = orderRepository.findById(orderId);
            if (optionalOrder.isPresent()){
                Orders orders = optionalOrder.get();
                if (orders.getEvaluate() != null){
                    return ReturnHandle.returnData(7,"此订单已评价！");
                }
                orderRepository.setEvaluateFor(evaluate,orderId);
                System.out.println(evaluate);
                System.out.println(orderId);
                return ReturnHandle.returnData(1,"确认收货成功！");
            }
            return ReturnHandle.returnData(4,"此订单不存在！");
    }

}
