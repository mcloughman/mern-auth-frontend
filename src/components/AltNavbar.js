import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const AltNavbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = (e) => {
    logout();
  };

  return (
    <nav className="navbar">
      <p className="nav-p navlink">Great Hikes</p>

      {user && (
        <div className="user-nav-div">
          <Link to="/form" className="navlink">
            Add a New Hike
          </Link>
          <div className="log-div">
            <span className="logged-in">Logged in as {user.email}</span>
            <button onClick={handleClick} className="logout">
              Logout
            </button>
          </div>
        </div>
      )}
      {!user && (
        <div className="user-nav-div">
          <div className="signup-login">
            <Link to="/signup" className="signup-link navlink">
              Signup
            </Link>

            <Link to="/login" className="login-link navlink">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AltNavbar;
