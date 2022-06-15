import '../App.css';
import axios from "axios";
import { useState, useEffect } from "react";

export const UserList = () => {
  
  const baseURL = "https://be-news-app.herokuapp.com/api/users";
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const fetchedData = await axios.get(baseURL);
    setUsers(fetchedData.data);
  };
  useEffect(() => {
    getUsers();
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Users are being loaded...</p>;
  
  return (
    <div className="main">
      <h2>User List</h2>
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