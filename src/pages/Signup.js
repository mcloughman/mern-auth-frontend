import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(null);
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(null);
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      setIsError("Password Confirmation Failed!");
      return;
    }
    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Signup</h3>
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        className="form-input"
        type="email"
        name="email"
        id="email"
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="confirmPassword" className="form-label"></label>
      Confirm Password
      <input
        className="form-input"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="form-btn" disabled={isLoading}>
        Signup
      </button>
      {isError && <div className="error">{isError}</div>}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
