import { Link } from 'react-router-dom';
import style from './style/nav.css';

const Nav = () => (
  <div>
    <nav className={style.nav}>
      <h1>BookStore</h1>
      <ul>
        <li className="navLi">
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
