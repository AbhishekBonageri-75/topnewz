package com.stackroute.userservice.repository;


import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.userservice.models.User;


@Repository
public interface UserRepository extends CrudRepository<User, String> {
	
	User findByEmailAndPassword(String email, String password);
	
	Optional<User> findByEmail(String email);
	
	
}
