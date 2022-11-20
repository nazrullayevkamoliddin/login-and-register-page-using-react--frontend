import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Component/Register/Register.js";
import Login from "./Component/Login/Login.js";
import Home from "./Component/Home/Home.js";
import Users from "./Component/Home/User.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="home/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
