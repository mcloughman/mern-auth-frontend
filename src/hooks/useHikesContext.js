// we're making our own custom hook per the Ninja
// HikesContext is the value we passed into the provider component
import { HikesContext } from "../context/HikeAppContext";
import { useContext } from "react";

// every time we want to use hikes data we will just invoke the useHikesContext and get the value back
export const useHikesContext = () => {
  const context = useContext(HikesContext);

  if (!context) {
    throw Error("useHikesContext must be used within the HikesContextProvider");
  }

  return context;
};
