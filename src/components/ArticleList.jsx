import '../App.css';
// import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from '../utils/apiCalls';

export const ArticleList = () => {
  
  const baseURL = "https://be-news-app.herokuapp.com/api/articles";
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(baseURL)
    .then((articles) => {
      setArticles(articles);
    })
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Articles are being loaded...</p>;
  
  return (
    <div className='main'>
      <h2>Articles</h2>
      <ul>{ articles.map(article => {
          return (
            <li key={ article.article_id }> 
              <Link to={ article.article_id.toString() }>{ article.title }</Link>
            </li>
          )
        }) 
      }</ul>
      
    </div>
  )
};