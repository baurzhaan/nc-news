import "../App.css";
import { useState, useEffect } from "react";
import { getData } from "../api/getData";

export const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const articleId = props.articleId;

  const baseURL = `https://be-news-app.herokuapp.com/api/articles/${articleId}/comments`;
  
  useEffect(() => {
    if (articleId) {
      getData(baseURL)
      .then((comments) => {
        setComments(comments);
      })
      setIsLoading(false);
    }
  }, [articleId, comments]);

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