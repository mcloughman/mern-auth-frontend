import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Hikes</h1>
      </Link>
      <Link to="/login">
        <h1>Login</h1>
      </Link>
      <Link to="/signup">
        <h1>Signup</h1>
      </Link>

      <Link to="/form">
        <h1>Add a New Hike</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
