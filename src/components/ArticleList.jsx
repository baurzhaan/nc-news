import { useState, useEffect } from "react";
import axios from "axios";

export const ArticleList = () => {
  
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

  if (isLoading) return <p>Articles are being loaded...</p>;
  
  return (
    <div>
      <h2>Article List</h2>
      {
        articles.map(article => {
          return (
            <li key={article.article_id}>{ article.title }</li>
          )
        })
      }
    </div>
  )
};