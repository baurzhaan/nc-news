import '../App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comments } from './Comments';

export const SingleArticle = () => {
  
  const { article_id } = useParams();
  const baseURL = `https://be-news-app.herokuapp.com/api/articles/${article_id}`;
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState("");
  
  const [isVoted, setIsVoted] = useState(false);

  const getArticle = async () => {
    try {
      const fetchedData = await axios.get(baseURL);
      setArticle(fetchedData.data);
      const fetchedDate = new Date(article.created_at);
      setDate(fetchedDate.toLocaleDateString());
    } catch ({response}) {
      const alertMessage = `Error message: ${response.data.msg}. Make sure that you are making a valid request. Please try again`;
      alert(alertMessage);
    };
  };

  useEffect(() => {
    getArticle();
    setIsLoading(false);
  }, [date]);

  const patchArticle = async (increment) => {
    try {
      const patchRequest = await axios.patch(baseURL, {
        "inc_votes" : increment
    });
    } catch ({ response }) {
      const alertMessage = `Error message: ${response.data.msg}. Make sure that you are making a valid request. Please try again`;
      alert(alertMessage);
    };
  };

  const toVote = ({ target }) => {
    if (!isVoted) {
      const increment = target.innerText === '👎' ? -1 : 1;

      const tempArticle = {...article};
      tempArticle.votes = tempArticle.votes + increment;
      setArticle(tempArticle);

      patchArticle(increment);

      target.disabled = true;

      setIsVoted(true);
    } else {
      target.disabled = true;
      alert("Sorry, but you have already voted");
    }
  };

  if (isLoading) return <p>Topics are being loaded...</p>;

  return (
    <div className="main">
      <h2>{ article.title }</h2>
      <p className="italic-text"> of: { article.topic }</p>
      <p className="italic-text"> by: { article.author }</p>
      <p className="italic-text">created { date === "Invalid Date" ? "loading..." : date }</p>
      <p>{ article.body }</p>
      
      <span className="italic-text">like the article?</span>
      <button id="thumb-up" onClick={ toVote }>&#128077;</button>
      <span id="votes">{ article.votes }</span>
      <button id="thumb-down" onClick={ toVote }>&#128078;</button>

      <Comments articleId={ article.article_id } comments_count={ article.comment_count }/>

    </div>
  )
};