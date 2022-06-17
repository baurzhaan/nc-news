import '../App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from '../api/getData';

export const TopicList = () => {
  
  const baseURL = "https://be-news-app.herokuapp.com/api/topics";
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(baseURL)
    .then((topics) => {
      setTopics(topics);
    })
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Topics are being loaded...</p>;
  
  return (
    <div className="main">
      <h2>Topics</h2>
      <ul>{
        topics.map(topic => {
          return (
            <li key={ topic.slug }>
              <Link to={ topic.slug }>{ topic.slug }</Link> 
            </li>
          )
        })
      }</ul>
    </div>
  )
};