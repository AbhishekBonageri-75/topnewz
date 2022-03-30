import React from "react";
import { Card } from "react-bootstrap";
import "./sytle.css";

function FavoriteNewsCard(props) {
  return (
    <Card className="h-100 border-dark text-end">
      <div>
        <Card.Title className="text-start news-title">
          {props.article.title}
        </Card.Title>

        <div className="text-end fs-3 news-favorite" onClick={props.removeFromFavorites}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
      </div>
      <Card.Img
        className="news-image"
        variant="top"
        src={props.article.urlToImage}
      />
      <Card.Body className="news-body d-flex flex-column">
        <Card.Text className="text-start">
          {" "}
          {props.article.description}{" "}
        </Card.Text>
        <Card.Subtitle className="text-muted">
          - {props.article.author}
        </Card.Subtitle>
        <Card.Link href={props.article.url} target="_blank_">
          Full Story
        </Card.Link>
      </Card.Body>
      <Card.Footer className="mt-auto">
        <small className="text-muted">
          Published At: {props.article.publishedAt}
        </small>
      </Card.Footer>
    </Card>
  );
}

export default FavoriteNewsCard;
