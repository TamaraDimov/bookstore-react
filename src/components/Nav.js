import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <nav>
      <h1>BookStore</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="Categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
