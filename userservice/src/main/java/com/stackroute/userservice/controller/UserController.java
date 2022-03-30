package com.stackroute.userservice.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.userservice.exception.InvalidCredentialsException;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.jwt.SecurityToken;
import com.stackroute.userservice.models.User;
import com.stackroute.userservice.repository.UserRepository;
import com.stackroute.userservice.service.UserServiceImpl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class UserController {
	@Autowired
	private UserServiceImpl userService;
	
	@GetMapping("/{email}")
	public ResponseEntity<?> getUser(@PathVariable String email ) {
		return new ResponseEntity<>(userService.getUser(email), HttpStatus.OK);
	}
	
	@PostMapping("/user")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		try {

			User response = userService.registerUser(user);
			return new ResponseEntity<User>(response, HttpStatus.OK);
			
		} catch (UserAlreadyExistsException e) {
			
			return new ResponseEntity<String>("User already exists", HttpStatus.CONFLICT);
			
		}
	}
	
	@PutMapping("/user")
	public ResponseEntity<?> editUser(@RequestBody User user){
		try {
			
			User editResponse = userService.editUser(user);
			return new ResponseEntity<User>(editResponse, HttpStatus.OK);
			
		} catch (UserNotFoundException e) {
			return new ResponseEntity<>("{ \"message\": \"" + e.getMessage() + "\"}", HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User userLogin) {


        try {


            String email = userLogin.getEmail();
            String password = userLogin.getPassword();

            User user = userService.findByEmailAndPassword(email, password);

            // Generating the security token
            SecurityToken securityTokenGenrator = (User userDetails) -> {

                String jwtToken = "";
                jwtToken = Jwts.builder().setId(user.getEmail()).setIssuedAt(new Date())
                        .signWith(SignatureAlgorithm.HS256, "secretkey").compact();

                Map<String, String> map1 = new HashMap<>();
                map1.put("email", email);
                map1.put("token", jwtToken);
                map1.put("message", "User successfully logged in");
                return map1;
            };


            Map<String, String> map = securityTokenGenrator.generateToken(user);

            return new ResponseEntity<>(map, HttpStatus.OK);


        } catch (InvalidCredentialsException exception) {

            return new ResponseEntity<>("{ \"message\": \"" + exception.getMessage() + "\"}", HttpStatus.UNAUTHORIZED);
        }


    }
}
