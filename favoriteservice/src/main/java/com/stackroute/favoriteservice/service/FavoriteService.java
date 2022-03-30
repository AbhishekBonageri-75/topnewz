package com.stackroute.favoriteservice.service;

import com.stackroute.favoriteservice.exception.FavoriteAlreadyExistsException;
import com.stackroute.favoriteservice.exception.FavoriteDoesNotExistsException;
import com.stackroute.favoriteservice.exception.UserNotFoundException;
import com.stackroute.favoriteservice.model.Favorite;
import com.stackroute.favoriteservice.model.News;

import java.util.List;

/***
 * Interface for service class containing template for providing bussiness logic required in controller class.
 */
public interface FavoriteService {
    public Favorite addToFavorites(Favorite favorite) throws FavoriteAlreadyExistsException;
    public Favorite removeFromFavorites(String email, String title) throws FavoriteDoesNotExistsException;
    public List<News> getFavoriteNews(String email) throws UserNotFoundException;
}
