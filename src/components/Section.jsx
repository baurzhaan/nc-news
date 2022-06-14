import { useState, useEffect } from "react";
import axios from "axios";

export const Section = () => {
  
  const baseURL = "https://be-news-app.herokuapp.com/api/articles";
  const [articles, setArticles] = useState([
    {
      "article_id": 34,
      "author": "grumpy19",
      "created_at": 1606043580000,
      "title": "The Notorious MSG’s Unlikely Formula For Success",
      "topic": "cooking",
      "votes": 0,
      "comment_count": 11
    },
    {
      "article_id": 12,
      "author": "tickle122",
      "created_at": 1605446700000,
      "title": "The battle for Node.js security has only begun",
      "topic": "coding",
      "votes": 0,
      "comment_count": 7
    }
  ]);

  useEffect(() => {
    
  })
  
  
  return (
    <div>
      <p>Article or Topic List</p>
    </div>
  )
}