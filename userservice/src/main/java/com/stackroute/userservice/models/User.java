package com.stackroute.userservice.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "user")
public class User {
    
	@Id
	private String email;
    private String password;

	public User() {
		super();
	}

	@Override
	public String toString() {
		return "User [email=" + email + ", password=" + password + "]";
	}

	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

    






}