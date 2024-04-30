import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="NavLinks">
        <Link to="/">Home</Link>
        <Link to="/todo">To do List</Link>
        <Link to="/info">Info</Link>
      </div>
    </nav>
  );
};

export default Navbar;
