import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

export const Comments = (props) => {
  
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = `https://be-news-app.herokuapp.com/api/articles/${props.articleId}/comments`;


  const getComments = async () => {
    const fetchedData = await axios.get(baseURL);
    setComments(fetchedData.data);
  };

  useEffect(() => {
    getComments();
    setIsLoading(false);
  });

  if (isLoading) return <p>Topics are being loaded...</p>;

  return (
    <div>
      <p className="italic-text">comments ({ props.comments_count })...</p>
      <ul className="ul-bullet-points">{ comments.map(comment => {
        return (
          <li key={comment.comment_id} className="italic-text">
            {comment.body}
          </li>
        )
      })

      }</ul>
    </div>
  )
};