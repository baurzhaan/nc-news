import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h2>article with id "{ article_id }" </h2>
      <p>Article title: { article.title }</p>
      <p>Article topic: { article.topic }</p>
      <p>Article author: { article.author }</p>
      <p>{ article.body }</p>
      <p>Article votes: { article.votes }</p>
      <p>Article comments: { article.comment_count }</p>
      <p>Article created date: { date === "Invalid Date" ? "loading..." : date }</p>
    </div>
  )
};