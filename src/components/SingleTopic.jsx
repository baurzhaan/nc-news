import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
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