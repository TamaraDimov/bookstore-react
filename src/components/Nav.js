import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <nav className="nav">
      <h1 className="text-9">BookStore</h1>
      <ul>
        <li className="navLi">
          <Link to="/">Books</Link>
        </li>
        <li className="navLi">
          <Link to="Categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
