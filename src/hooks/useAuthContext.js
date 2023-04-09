// we're making our own custom hook per the Ninja
// HikesContext is the value we passed into the provider component
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// every time we want to use hikes data we will just invoke the useHikesContext and get the value back
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used within the AuthContextProvider");
  }

  return context;
};
