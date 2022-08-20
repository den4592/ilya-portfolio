import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <ul className="links">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
