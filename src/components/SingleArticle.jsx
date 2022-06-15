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

  if (isLoading) return <p>Topics are being loaded...</p>;

  return (
    <div className="main">
      <h2>{ article.title }</h2>
      <p className="italic-text"> of: { article.topic }</p>
      <p className="italic-text"> by: { article.author }</p>
      <p className="italic-text">created { date === "Invalid Date" ? "loading..." : date }</p>
      <p>{ article.body }</p>
      
      <span id="thumb-down" onClick={() => {console.log("decrease")}}>&#128078;</span>
      <span id="votes">{ article.votes }</span>
      <span id="thumb-up" onClick={() => {console.log("increase")}}>&#128077;</span>
      
      <p>Article comments: { article.comment_count }</p>
      
    </div>
  )
};