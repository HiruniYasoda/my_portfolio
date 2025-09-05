import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="/test" element={<h1>Test Page</h1>} />
    </Routes>
  );
}

export default App;
