package com.stackroute.userservice.jwt;

import java.util.Map;

import com.stackroute.userservice.models.User;

@FunctionalInterface
public interface SecurityToken {
	
	Map<String, String> generateToken(User user);

}

