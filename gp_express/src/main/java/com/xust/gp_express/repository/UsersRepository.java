package com.xust.gp_express.repository;


import com.xust.gp_express.entry.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


/**
 * description:
 * gp_wifi-
 *
 * @Author hufeifei
 * @create 2018-05-12 0:25
 */
@Repository
public interface UsersRepository extends JpaRepository<Users,Integer> {

    Users findByUserPhoneNumberAndPassword(String userPhoneNumber, String password);


    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update Users u set u.password=?1 where u.id=?2")
    Integer setPasswordFor(String password,Integer id);
}
