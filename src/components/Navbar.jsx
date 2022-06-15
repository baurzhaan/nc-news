import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <li> <Link to="/articles">Articles</Link> </li>
      <li> <Link to="/topics">Topics</Link> </li>
      <li> <Link to="/users">Users</Link> </li>
    </div>
  )
};