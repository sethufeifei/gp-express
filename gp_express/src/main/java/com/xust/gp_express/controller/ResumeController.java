package com.xust.gp_express.controller;

import com.xust.gp_express.entry.Result;
import com.xust.gp_express.entry.Resumes;
import com.xust.gp_express.entry.Users;
import com.xust.gp_express.repository.ResumeRepository;
import com.xust.gp_express.repository.UsersRepository;
import com.xust.gp_express.util.ReturnHandle;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.Optional;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-19 21:48
 */
@RestController
@Slf4j
@CrossOrigin
public class ResumeController {

    @Autowired
    private ResumeRepository resumeRepository;

    @Autowired
    private UsersRepository usersRepository;

    //普通用户提交简历
    @RequestMapping("/submitResume")
    public Result submitResume(
            @Validated Resumes resumes,
            BindingResult result
            ){

        log.info("普通用户提交简历");
        System.out.println(resumes);
        if(result.hasErrors()) {
            return ReturnHandle.returnData(2, result.getAllErrors().toString());
        }
        resumes.setCreateDate(new Date());
        resumeRepository.save(resumes);
        return ReturnHandle.returnData(1,"成功！");

    }

    //管理员获取已投递简历列表
    @RequestMapping("/getResume")
    public Result getResume(){
        log.info("管理员获取已投递简历列表");
        return ReturnHandle.returnData(1,"成功！",resumeRepository.findAll());
    }

    @RequestMapping("/deleteResume")
    public void deleteResume(){
        resumeRepository.deleteAll();
    }
}
