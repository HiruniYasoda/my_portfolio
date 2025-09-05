import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
