import React from "react";
// Navigate hook is used to redirect user
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";

import HikeForm from "./components/HikeForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleHike from "./components/SingleHike";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/form"
              element={user ? <HikeForm /> : <Navigate to="/login" />}
            />
            <Route path="/:id" element={<SingleHike />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
