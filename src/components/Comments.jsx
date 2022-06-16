import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

export const Comments = () => {
  
  const [comments, setComments] = useState([]);

  const baseURL = "https://be-news-app.herokuapp.com/api/articles/34/comments";

  const getComments = async () => {
    const fetchedData = await axios.get(baseURL);
    setComments(fetchedData.data);
  };

  useEffect(() => {
    getComments();
  });

  return (
    <div>
      <p className="italic-text">comments are here...</p>
      <ul className="ul-bullet-points">{ comments.map(comment => {
        return (
          <li key={comment.comment_id}>
            {comment.body}
          </li>
        )
      })

      }</ul>
    </div>
  )
};