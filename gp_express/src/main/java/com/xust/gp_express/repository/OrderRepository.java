package com.xust.gp_express.repository;

import com.xust.gp_express.entry.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * description:
 * gp_express-
 *
 * @Author hufeifei
 * @create 2018-05-19 21:46
 */
@Repository
public interface OrderRepository extends JpaRepository<Orders,Integer> {

}
