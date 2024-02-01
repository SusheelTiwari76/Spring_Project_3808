package com.example.CustomerMaven;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface CustomerService {

    List<Customer> getAllCustomers();

    Customer getCustomerById(Long id);

    Customer saveCustomer(Customer customer);

    void deleteCustomer(Long id);
}