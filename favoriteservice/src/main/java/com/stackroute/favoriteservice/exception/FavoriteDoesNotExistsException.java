package com.stackroute.favoriteservice.exception;

/***
 * Exception class to be used in case when favorite news object user asked to remove from his/her favorite list
 * does not exist in his/her favorite list;
 */
public class FavoriteDoesNotExistsException extends RuntimeException {
    private String message;

    public FavoriteDoesNotExistsException() {
    }

    public FavoriteDoesNotExistsException(String message) {
        super();
        this.message = message;
    }
}
