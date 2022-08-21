import { Link } from "react-router-dom";

const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      <div className="container">
        <ul className="links">
          <li onClick={scrollToTop}>
            <Link to="/">About</Link>
          </li>
          <li onClick={scrollToTop}>
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={scrollToTop}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
