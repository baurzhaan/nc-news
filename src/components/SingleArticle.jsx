import '../App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleArticle = () => {
  
  const { article_id } = useParams();
  const baseURL = `https://be-news-app.herokuapp.com/api/articles/${article_id}`;
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState("");
  const [voted, setVoted] = useState(false);

  const getArticle = async () => {
    const fetchedData = await axios.get(baseURL);
    setArticle(fetchedData.data);
    const fetchedDate = new Date(article.created_at);
    setDate(fetchedDate.toLocaleDateString());
  };

  useEffect(() => {
    getArticle();
    setIsLoading(false);
  }, [date]);

  const vote = (thumb) => {
    if (!voted) {
      setVoted(true);
      thumb.target.disabled = true;
      console.log(`change the vote by ${thumb.target.innerText} on the backend optimistically`);
    } else {
      thumb.target.disabled = true;
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
      
      <button id="thumb-down" onClick={ vote }>&#128078;</button>
      <span id="votes">{ article.votes }</span>
      <button id="thumb-up" onClick={ vote }>&#128077;</button>
      
      <p>Article comments: { article.comment_count }</p>
      
    </div>
  )
};