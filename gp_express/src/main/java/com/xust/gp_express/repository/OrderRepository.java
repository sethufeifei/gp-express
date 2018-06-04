package com.xust.gp_express.repository;

import com.xust.gp_express.entry.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-19 21:46
 */
@Repository
public interface OrderRepository extends JpaRepository<Orders,Integer> {

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("update Orders o set o.bool=?1 where o.id=?2")
    Integer setBooleanFor(Boolean bool,Integer id);

    @Transactional
    @Modifying
    @Query("update Orders o set o.evaluate=?1 where o.id=?2")
    Integer setEvaluateFor(Integer evaluate,Integer id);

}
