import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setError(null);

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    // this will send either token info or an error
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setError(json.error);
      console.log(json);
      navigate("/login");
    }
    if (response.ok) {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      navigate("/");

      // update
      dispatch({ type: "LOGIN", payload: json });
    }
  };

  return { login, error };
};
