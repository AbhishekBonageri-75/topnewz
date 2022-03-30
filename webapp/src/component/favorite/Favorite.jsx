import React, { Component } from "react";
import FavoriteNewsCard from "../card/FavoriteNewsCard";
import Header from "../header/Header";
import "./style.css";
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const FAVORITE_API_URL = "http://localhost:9000/favoriteservice/api/v1/news";

//to be removed
const tempToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNjIxMzQ3Njc2fQ.l2RAGIR-9MOobdVuxy3M4ErGCIB8ij3-kf4wqTcP6t4";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      token: "",
      articles: [],
      isEmpty: true,
      snkbarMsg: "",
    };
  }
  componentDidMount() {
    //get token from localStorage
    this.setState({ token: "Bearer " + localStorage.getItem("token") });
    this.setState({ email: localStorage.getItem("email") });
    // this.setState({ token: "Bearer " + tempToken });
    // this.setState({ email: "test12@test.com" });

    if (!localStorage.getItem("email")) return;
    let urlWithParams =
      FAVORITE_API_URL + "?email=" + localStorage.getItem("email");
    console.log(urlWithParams);
    fetch(urlWithParams, {
      method: "GET",
      // headers: {
      //     "Authorization": this.state.token,
      //     'Access-Control-Allow-Origin': '*',
      // },
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw Error(res.statusText);
      })
      .then((result) => {
        console.log(result);
        this.setState({ articles: result, isEmpty: result.length === 0 });
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
        throw Error(res.statusText);
      })
      .then((result) => {
        let temp = this.state.articles;
        delete temp[index];
        this.setState({
          articles: temp,
          snkbarMsg: "news removed from favorites",
          isEmpty: temp.length === 0,
        });
      })
      .catch((err) => console.log(err));
  }
  handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    this.setState({
      email: "",
      token: "",
      articles: [],
      isEmpty: true,
    });
  }

  render() {
    return (
      <div className="parent">
        <Header handleLogout={this.handleLogout} />
        <h2>Your Favorites</h2>
        <div className="favorite">
          {this.state.isEmpty ? (
            <div id="empty-fav-msg">Your favorite list is empty</div>
          ) : null}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {this.state.articles?.map((article, index) => (
              <div className="col" key={index}>
                <FavoriteNewsCard
                  article={article}
                  removeFromFavorites={(e) => this.removeFromFavorites(index)}
                />
              </div>
            ))}
          </div>
        </div>

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

export default Favorite;
