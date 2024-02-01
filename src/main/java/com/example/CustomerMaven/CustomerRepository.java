package com.example.CustomerMaven;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // You can add custom query methods if needed

}
