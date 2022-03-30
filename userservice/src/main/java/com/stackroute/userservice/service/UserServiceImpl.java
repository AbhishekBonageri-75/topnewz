package com.stackroute.userservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.userservice.exception.InvalidCredentialsException;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.models.User;
import com.stackroute.userservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository repository;
	
	@Override
	public User registerUser(User user) throws UserAlreadyExistsException {
		Optional<User> userOptional = repository.findById(user.getEmail());
		if(userOptional.isPresent()) {
			throw new UserAlreadyExistsException();
		}
			
		return repository.save(user);
		
	}
	
	@Override
	public User editUser(User user) throws UserNotFoundException {
		Optional<User> userExists = repository.findById(user.getEmail());
		if(userExists.isEmpty()) {
			throw new UserNotFoundException("User not found");
		}
		return repository.save(user);
	}
	
	@Override
	public User findByEmailAndPassword(String email, String password) throws InvalidCredentialsException {
		User user = repository.findByEmailAndPassword(email, password);
        if (user == null) {
            throw new InvalidCredentialsException("Invalid Login Credentials, Please check your email and password");
        }
        return user;
	}

	@Override
	public Optional<User> getUser(String email) {
		return repository.findByEmail(email);
	}
	
	
}
