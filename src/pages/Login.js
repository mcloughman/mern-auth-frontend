import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import LoginNavbar from "../components/LoginNavbar";

const Login = () => {
  const { login, error, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div>
      <LoginNavbar />

      <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          className="form-input"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="form-btn" disabled={isLoading}>
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default Login;
