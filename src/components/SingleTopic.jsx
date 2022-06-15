import '../App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleTopic = () => {
  
  const { slug } = useParams();
  const baseURL = "https://be-news-app.herokuapp.com/api/articles";
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getArticles = async () => {
    const fetchedData = await axios.get(baseURL);
    setArticles(fetchedData.data);
  };
  useEffect(() => {
    getArticles();
    setIsLoading(false);
  }, []);

if (isLoading) return <p>Topics are being loaded...</p>;

  return (
    <div className="main">
      <h2>"{ slug }" articles</h2>
      {
        articles.filter(article => article.topic === slug).map(article => {
          return (
            <li key={article.article_id}>{ article.title }</li>
          )
        })
      }
    </div>
  )
};