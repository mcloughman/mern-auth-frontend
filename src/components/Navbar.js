import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = (e) => {
    logout();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="user-nav-div">
        Hikes
      </Link>

      {user && (
        <div className="user-nav-div">
          <Link to="/form">Add a new hike</Link>
          <span>{user.email}</span>
          <button onClick={handleClick} className="logout">
            Logout
          </button>
        </div>
      )}
      {!user && (
        <div className="user-nav-div">
          <Link to="/signup">Signup</Link>

          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
