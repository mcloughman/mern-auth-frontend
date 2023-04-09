import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import HikeForm from "./components/HikeForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<HikeForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
