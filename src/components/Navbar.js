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
      <Link to="/">
        <h1>Hikes</h1>
      </Link>
      <Link to="/login">
        <h1>Login</h1>
      </Link>
      <div>
        {/* we put this in to show the probelem that we have. when the page is refreshed global state for user is null even though we still have user persisting in local storage. we somehow need to update state to know that user is still actually logged in */}
        {user && <span>{user.email}</span>}
        <button onClick={handleClick} className="logout">
          Logout
        </button>
      </div>
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
