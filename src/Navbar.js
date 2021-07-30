import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>NAVBAR</h2>
      <div className="links">
        <Link to="/">
          <b>HOME</b>
        </Link>
        <Link to="/create">
          <b>ADD BLOG</b>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
