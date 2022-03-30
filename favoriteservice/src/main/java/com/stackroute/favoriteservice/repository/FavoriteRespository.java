package com.stackroute.favoriteservice.repository;

import com.stackroute.favoriteservice.model.Favorite;
import org.springframework.data.mongodb.repository.MongoRepository;

/***
 * Simple mongo repository class for Favorite entity/document class corresponding to id attribute email.
 */
public interface FavoriteRespository extends MongoRepository<Favorite, String> {
}
