import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const handleClick = (e) => {
    logout();
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Hikes</h1>
      </Link>
      <Link to="/login">
        <h1>Login</h1>
      </Link>
      <button onClick={handleClick} className="logout">
        Logout
      </button>

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
