import '../App.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li> <Link to="/articles">Articles</Link> </li>
        <li> <Link to="/topics">Topics</Link> </li>
        <li> <Link to="/users">Users</Link> </li>
      </ul>
    </div>
  )
};