package com.stackroute.favoriteservice.controller;

import com.stackroute.favoriteservice.exception.FavoriteAlreadyExistsException;
import com.stackroute.favoriteservice.exception.FavoriteDoesNotExistsException;
import com.stackroute.favoriteservice.exception.UserNotFoundException;
import com.stackroute.favoriteservice.model.Favorite;
import com.stackroute.favoriteservice.model.News;
import com.stackroute.favoriteservice.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/***
 * Request Handler class for all requests in favorite service.
 */
@CrossOrigin
@RestController
public class FavoriteController {

    /***
     * FavoriteService class variable autowired for providing bussiness login to request handler methods.
     */
    @Autowired
    private FavoriteService favoriteService;

    /***
     * Post request mapping for '/api/v1/news' endpoint handling request to add News to a users favorite list.
     * @param favorite - type Favorite object recieved from request body which contains email and News objects
     *                 for adding News object to favorite list of user with email given by email param.
     * @return - returns 'Http 200-OK' with complete favorite list of news for user with email given by email param
     *              if suceed to add else returns 'Http 409-CONFLICT' with failure message.
     */
    @PostMapping("/api/v1/news")
    public ResponseEntity<?> addToFavorites(@RequestBody Favorite favorite) {
        try {
            Favorite response = favoriteService.addToFavorites(favorite);
            return new ResponseEntity<Favorite>(response, HttpStatus.OK);
        }catch (FavoriteAlreadyExistsException exception){
            return new ResponseEntity<String>("News already exists.", HttpStatus.CONFLICT);
        }

    }

    /***
     * Delete request mapping for '/api/v1/news' endpoint handling request to remove News from a users favorite list.
     * @param email - type String argument containing users email recieved from request parameter with key 'email'.
     * @param title - type String argument contianing news title to be removed recieved from request parameter with
     *              key 'title'.
     * @return - returns 'Http 200-OK' with complete favorite list of news for user with email given by email param
     *              if suceed to add else returns 'Http 409-CONFLICT' with failure message.
     */
    @DeleteMapping("/api/v1/news")
    public ResponseEntity<?> removeFromFavorites(@RequestParam String email, @RequestParam String title) {
        try{
            Favorite response = favoriteService.removeFromFavorites(email, title);
            return new ResponseEntity<Favorite>(response, HttpStatus.OK);
        }catch(FavoriteDoesNotExistsException exception){
            return new ResponseEntity<String>("News does not exists.", HttpStatus.CONFLICT);
        }catch(UserNotFoundException exception){
            return new ResponseEntity<String>("Favorite list does not exists.", HttpStatus.CONFLICT);
        }
    }

    /***
     * Get request mapping for '/api/v1/news' endpoint handling request to fetch favorite News list for a user
     * specified by parameter email.
     * @param email - type String argument containing users email recieved from request parameter with key 'email'.
     * @return - returns 'Http 200-OK' with complete favorite list of news for user with email given by email param
     *              if suceed to add else returns 'Http 409-CONFLICT' with failure message.
     */
    @GetMapping("/api/v1/news")
    public ResponseEntity<?> getFavoriteNews(@RequestParam String email){
        try {
            List<News> response = favoriteService.getFavoriteNews(email);
            return new ResponseEntity<List<News>>(response, HttpStatus.OK);
        }catch (UserNotFoundException exception){
            return new ResponseEntity<>("Favorite list does not exists.", HttpStatus.CONFLICT);
        }
    }
}
