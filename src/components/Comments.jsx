import "../App.css";
// import axios from "axios";
import { useState, useEffect } from "react";
import { getData } from "../api/getData";

export const Comments = (props) => {
  
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = `https://be-news-app.herokuapp.com/api/articles/${props.articleId}/comments`;

  useEffect(() => {
    getData(baseURL)
    .then((comments) => {
      setComments(comments);
    })
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Comments are being loaded...</p>;

  return (
    <div>
      <p className="italic-text">comments ({ props.comments_count })...</p>
      <ul className="ul-bullet-points">{ comments.map(comment => {
        return (
          <li key={comment.comment_id} className="italic-text smaller-text">
            {comment.body}
          </li>
        )
      })

      }</ul>
    </div>
  )
};