package com.stackroute.favoriteservice.service;

import com.stackroute.favoriteservice.exception.FavoriteAlreadyExistsException;
import com.stackroute.favoriteservice.exception.FavoriteDoesNotExistsException;
import com.stackroute.favoriteservice.exception.UserNotFoundException;
import com.stackroute.favoriteservice.model.Favorite;
import com.stackroute.favoriteservice.model.News;
import com.stackroute.favoriteservice.repository.FavoriteRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/***
 * Service class for creating service bean in order to provide bussiness logic for request handlers.
 */
@Service
public class FavoriteServiceImpl implements FavoriteService{

    /***
     * type FavoriteRepository variable autowired to provide repository objects.
     */
    @Autowired
    private FavoriteRespository favoriteRespository;

    /***
     * providing bussiness logic for addToFavorites request handler in FavoriteController class.
     * @param favorite - Favorite type object recieved containing email and News to be added to favorite list of
     *                 user with email provided by attribute 'email'
     * @return - returns favorite list of user with email recieved from request handler in case of success.
     * @throws FavoriteAlreadyExistsException - exception thrown in case if the News object recieved from request
     *                  handler already exists in user's favorite list.
     */
    @Override
    public Favorite addToFavorites(Favorite favorite) throws FavoriteAlreadyExistsException {

        Optional<Favorite> favoriteResult = favoriteRespository.findById(favorite.getEmail());
        if(favoriteResult.isPresent()){
            List<News> newsList = favoriteResult.get().getNews();
            boolean present = false;
            for(News news: newsList){
                if(news.getTitle().equals(favorite.getNews().get(0).getTitle())){
                    present = true;
                }
            }
            if(present) throw new FavoriteAlreadyExistsException();

            favoriteResult.get().getNews().add(0, favorite.getNews().get(0));
            return favoriteRespository.save(favoriteResult.get());
        }else return favoriteRespository.save(favorite);

    }

    /***
     * providing bussiness logic for removeFromFavorites request handler in FavoriteController class.
     * @param email - type String variable for finding specific user's favorite list.
     * @param title - type String variable for finding specific news from user's favorite list.
     * @return - returns favorite list of user with email in case of success.
     * @throws RuntimeException - throws FavoriteListDoesNotExistsException in case the requested favorite list
     *          does not exists and FavoriteDoesNotExistsException in case the requested news does not exists in
     *          user's favorite list.
     */
    @Override
    public Favorite removeFromFavorites(String email, String title) throws RuntimeException {

        Optional<Favorite> favoriteResult = favoriteRespository.findById(email);

        if(favoriteResult.isEmpty()) throw new UserNotFoundException();

        List<News> newsList = favoriteResult.get().getNews();
        int foundNewsIndex = -1;
        for(int i=0; i<newsList.size(); i++){
            if (newsList.get(i).getTitle().equals(title))
                foundNewsIndex = i;
        }
        if(foundNewsIndex==-1) throw new FavoriteDoesNotExistsException();

        newsList.remove(foundNewsIndex);
        favoriteRespository.save(favoriteResult.get());
        return favoriteResult.get();

    }

    /***
     * providing bussiness logic for getFavoriteNews request handler in FavoriteController class.
     * @param email - type String variable for finding specific user's favorite list.
     * @return - returns favorite list of user with email in case of success.
     * @throws UserNotFoundException in case the requested favorite list does not exists.
     */
    @Override
    public List<News> getFavoriteNews(String email) throws UserNotFoundException {
        Optional<Favorite> favoriteOptional = favoriteRespository.findById(email);
        if(favoriteOptional.isEmpty()) throw new UserNotFoundException();

        return favoriteOptional.get().getNews();
    }

}
