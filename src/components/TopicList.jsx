import '../App.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const TopicList = () => {
  
  const baseURL = "https://be-news-app.herokuapp.com/api/topics";
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTopics = async () => {
    const fetchedData = await axios.get(baseURL);
    setTopics(fetchedData.data);
  };
  useEffect(() => {
    getTopics();
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Topics are being loaded...</p>;
  
  return (
    <div className="main">
      <h2>Topic List</h2>
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