package com.stackroute.userservice.service;

import java.util.Optional;

import com.stackroute.userservice.exception.InvalidCredentialsException;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.models.User;

public interface UserService {
	
	Optional<User> getUser(String email);
	
	public User registerUser(User user) throws UserAlreadyExistsException;
	
	public User editUser(User user) throws UserNotFoundException;
	
	public User findByEmailAndPassword(String email, String password) throws InvalidCredentialsException;
	

}
