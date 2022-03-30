import React, { Component } from "react";
import NewsCard from "../card/NewsCard";
import BaseNavBar from "../header/BaseNavbar";
import Header from "../header/Header";
import "./style.css";
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PaginationNav from "../paginationNav/PaginationNav";

const ALL_NEWS_API_URL = "http://localhost:9000/searchservice/api/v1/news";
const SPORTS_NEWS_API_URL = "http://localhost:9000/searchservice/api/v1/snews";
const BUSSINESS_NEWS_API_URL =
  "http://localhost:9000/searchservice/api/v1/bnews";
const TECH_NEWS_API_URL = "http://localhost:9000/searchservice/api/v1/tnews";
const SEARCH_NEWS_API_URL =
  "http://localhost:9000/searchservice/api/v1/search?queryParam=";

const FAVORITE_API_URL = "http://localhost:9000/favoriteservice/api/v1/news";

//to be removed
const tempToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNjIxMzQ3Njc2fQ.l2RAGIR-9MOobdVuxy3M4ErGCIB8ij3-kf4wqTcP6t4";
// const SEARCH_NEWS_API_URL = "https://newsapi.org/v2/everything?apiKey=51965367e03d47fa9dd8fe571b27a9f7&q=";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      token: "",
      articles: [],
      pageIndex: 0,
      isFavorite: [],
      isLoggedIn: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.changePageIndex = this.changePageIndex.bind(this);
  }
  componentDidMount() {
    this.getNews(ALL_NEWS_API_URL);

    // get token from localStorage
    let token = localStorage.getItem("token");
    let email = localStorage.getItem("email");
    if (token && email) {
      this.setState({ token: "Bearer " + token });
      this.setState({ email: email, isLoggedIn: true });
    }
    // this.setState({ token: "Bearer " + tempToken });
    // this.setState({ email: "test12@test.com" });
    // this.setState({isLoggedIn: true});
  }
  getPageNews(pageIndex) {
    return this.state.articles.slice(pageIndex * 6, pageIndex * 6 + 6);
  }
  changePageIndex(newPageIndex) {
    if (
      newPageIndex > -1 &&
      newPageIndex < Math.floor(this.state.articles.length / 6)
    )
      this.setState({ pageIndex: newPageIndex });
  }
  handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    this.setState({
      email: "",
      token: "",
      articles: [],
      isFavorite: [],
      snkbarMsg: "",
    });
  }
  handleSearch(e) {
    e.preventDefault();

    let queryKeyword = e.target[0].value;
    console.log(queryKeyword);
    if (!queryKeyword) return;
    this.getNews(SEARCH_NEWS_API_URL + queryKeyword);
  }

  getNews(api_url) {
    fetch(api_url)
      .then((res) => {
        if (res.ok) return res.json();
        throw Error(res.statusText);
      })
      .then((result) =>
        this.setState({
          articles: this.refineData(result.articles),
          isFavorite: new Array(result.articles.length).fill(false),
          pageIndex: 0,
        })
      )
      .catch((err) => console.log(err));
  }
  refineData(articles) {
    articles.map((article) => {
      article.source = article.source.name;
      if (article.title.length > 75)
        article.title = article.title.substring(0, 75) + "..";
      article.publishedAt = article.publishedAt.split("T")[0];
      delete article.content;
    });
    return articles;
  }
  addRemoveFavorites(index) {
    if (this.state.isFavorite[index]) this.removeFromFavorites(index);
    else this.addToFavorites(index);
  }
  addToFavorites(index) {
    fetch(FAVORITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //     "Authorization": this.state.token,
        //     'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email: this.state.email,
        news: [this.state.articles[index]],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else if (res.status === 409) return;
        throw Error(res.statusText);
      })
      .then((result) => {
        let temp = this.state.isFavorite;
        temp[index] = !temp[index];
        this.setState({
          isFavorite: temp,
          snkbarMsg: "news added to favorites",
        });
      })
      .catch((err) => console.log(err));
  }
  removeFromFavorites(index) {
    let deleteUrl =
      FAVORITE_API_URL +
      "?email=" +
      this.state.email +
      "&title=" +
      this.state.articles[index].title;
    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        //     "Authorization": this.state.token,
        //     'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        else if (res.conflict) this.addToFavorites(index);
        throw Error(res.statusText);
      })
      .then((result) => {
        let temp = this.state.isFavorite;
        temp[index] = !temp[index];
        this.setState({
          isFavorite: temp,
          snkbarMsg: "news removed from favorites",
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="parent">
        <Header showSearch={true} 
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
        />
        <BaseNavBar
          getAllNews={(e) => this.getNews(ALL_NEWS_API_URL)}
          getSportsNews={(e) => this.getNews(SPORTS_NEWS_API_URL)}
          getBussinessNews={(e) => this.getNews(BUSSINESS_NEWS_API_URL)}
          getTechNews={(e) => this.getNews(TECH_NEWS_API_URL)}
        />
        <div className="dashboard">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {this.getPageNews(this.state.pageIndex).map((article, index) => (
              <div className="col" key={this.state.pageIndex * 6 + index}>
                <NewsCard
                  article={article}
                  isFavorite={
                    this.state.isFavorite[this.state.pageIndex * 6 + index]
                  }
                  isLoggedIn={this.state.isLoggedIn}
                  addRemoveFavorites={(e) =>
                    this.addRemoveFavorites(this.state.pageIndex * 6 + index)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <PaginationNav
          pageIndex={this.state.pageIndex}
          numOfPages={Math.floor(this.state.articles.length / 6)}
          changePageIndex={this.changePageIndex}
        />

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={this.state.snkbarMsg}
          autoHideDuration={2000}
          onClose={(x) => this.setState({ snkbarMsg: "" })}
          message={this.state.snkbarMsg}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={(x) => this.setState({ snkbarMsg: "" })}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    );
  }
}

export default Dashboard;
