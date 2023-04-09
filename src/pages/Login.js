import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
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
      <label htmlFor="password" classname="form-label">
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

      <button className="form-btn">Login</button>
    </form>
  );
};

export default Login;
