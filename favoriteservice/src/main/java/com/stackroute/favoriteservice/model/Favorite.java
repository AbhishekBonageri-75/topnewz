package com.stackroute.favoriteservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/***
 * Entity/Document class for creating entity/document in database using MongoRepository with no-arg and all-args
 * constructor and getters and setters.
 */
@Document(collection = "favorite")
public class Favorite {
    @Id
    private String email;

    private List<News> news;

    public Favorite() {
    }

    /***
     * All-args constructor for creating entity/document object with arguments.
     * @param email - type String variable to represent Id attribute for documents in mongodb collection and stores
     *              unique email of user recieved from frontend.
     * @param news -  type List of type News variable to represent favorite list of News for user with email given
     *             by email param.
     */
    public Favorite(String email, List<News> news) {
        this.email = email;
        this.news = news;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<News> getNews() {
        return news;
    }

    public void setNews(List<News> news) {
        this.news = news;
    }

    @Override
    public String toString() {
        return "Favorite{" +
                "email='" + email + '\'' +
                ", news=" + news +
                '}';
    }
}
