import '../App.css';
import { useState, useEffect } from "react";
import { getData } from '../utils/apiCalls';

export const UserList = () => {
  
  const baseURL = "https://be-news-app.herokuapp.com/api/users";
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(baseURL)
    .then((users) => {
      setUsers(users);
    })
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Users are being loaded...</p>;
  
  return (
    <div className="main">
      <h2>Users</h2>
      <ul>{
        users.map(user => {
          return (
            <li key={ user.username }>{ user.name }</li>
          )
        })
      }</ul>
    </div>
  )
};