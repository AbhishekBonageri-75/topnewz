package com.stackroute.favoriteservice.exception;

/***
 * Exception class to be used in case when a request requires to search in database for specific user's favorite list
 * but that user's favorite list is not present in database
 * Ex: GET request to fetch a favorite list corresponding to specific user(email).
 */
public class UserNotFoundException extends RuntimeException {
    private String message;

    public UserNotFoundException() {
    }

    public UserNotFoundException(String message) {
        super();
        this.message = message;
    }
}
