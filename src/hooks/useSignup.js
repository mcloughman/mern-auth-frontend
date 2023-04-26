import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (email, password, confirmPassword) => {
    setError(null);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    // this will send either token info or an error
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      navigate("/");

      // update
      dispatch({ type: "LOGIN", payload: json });
    }
  };

  return { signup, error };
};

export default useSignup;
