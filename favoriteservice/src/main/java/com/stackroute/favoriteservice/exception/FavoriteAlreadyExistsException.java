package com.stackroute.favoriteservice.exception;

/***
 * Exception class to be used in case when favorite news object user asked to add to his/her favorite list
 * already exists in his/her favorite list;
 */
public class FavoriteAlreadyExistsException extends RuntimeException {
    private String message;
    public FavoriteAlreadyExistsException(){ }
    public FavoriteAlreadyExistsException(String message){
        super();
        this.message = message;
    }
}
