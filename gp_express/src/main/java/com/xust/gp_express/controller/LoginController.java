package com.xust.gp_express.controller;

import com.xust.gp_express.entry.Result;
import com.xust.gp_express.entry.Users;
import com.xust.gp_express.repository.UsersRepository;
import com.xust.gp_express.util.ReturnHandle;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-19 19:56
 */
@RestController
@Slf4j
@CrossOrigin
public class LoginController {

    @Autowired
    private UsersRepository usersRepository;

    //登陆
    @RequestMapping("/login")
    public Result login(String userPhoneNumber, String password, HttpServletRequest request){
        log.info("login");
        int flag = 2;
        if (userPhoneNumber != null && password != null){
            log.info("userPhoneNumber："+userPhoneNumber);
            log.info("password："+password);

            Users users = usersRepository.findByUserPhoneNumberAndPassword(userPhoneNumber,password);
            if (users != null && users.getId() != null ){
                List<Users> list = new ArrayList<>();
                list.add(users);
                return ReturnHandle.returnData(users.getFlag(),"登陆成功！",list);
            }
        }
        log.info("bool："+flag);
        return ReturnHandle.returnData(2,"账号或密码错误！");
    }



    //用户注册
    @RequestMapping("/register")
    public Result register(
            String userPhoneNumber,
            String password,
            Boolean flag){
        log.info("注册");

        if (userPhoneNumber == null && password == null && flag == null){
            return ReturnHandle.returnData(2,"参数不能为空!");
        }
        log.info("userPhoneNumber："+userPhoneNumber);
        log.info("password："+password);
        log.info("flag"+flag);

        //收到的手机号做正则验证
        if (!userPhoneNumber.matches("^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\\d{8}$")){
            return ReturnHandle.returnData(3,"请输入正确的手机号！");
        }

        List<Users> users = usersRepository.findAll();
        for (int i = 0; i < users.size() ; i++) {
            if (users.get(i).getUserPhoneNumber().equals(userPhoneNumber)){
                return ReturnHandle.returnData(0,"此账号已存在");
            }
        }
        Users user = new Users();
        user.setFlag(1);
        user.setPassword(password);
        user.setUserPhoneNumber(userPhoneNumber);
        usersRepository.save(user);

        return ReturnHandle.returnData(1,"注册成功！");
    }



    @RequestMapping("/modifyPassword")
    public Result modifyPassword(
            String passwordOld,
            String passwordNew1,
            String passwordNew2,
            Integer id
    ){
        log.info("修改密码！");

        System.out.println(passwordOld);
        System.out.println(passwordNew1);
        System.out.println(passwordNew2);
        System.out.println(id);

        if (passwordOld==null || passwordNew1 == null || passwordNew2 == null){
            return ReturnHandle.returnData(2,"参数不能为空！");
        }

        if (!passwordNew1.equals(passwordNew2)){
            return ReturnHandle.returnData(3,"两次输入的密码不一致！");
        }

        Optional<Users> optional = usersRepository.findById(id);
        if(optional.isPresent() ){
            Users users = optional.get();
            if (users.getPassword().equals(passwordOld)){
                usersRepository.deleteById(id);
                users.setPassword(passwordNew1);
                usersRepository.setPasswordFor(passwordNew1,id);
                return ReturnHandle.returnData(1,"修改密码成功！");
            }
        }
        return ReturnHandle.returnData(4,"其它错误！");
    }
}
