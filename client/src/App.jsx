// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login"; // import your AuthLayout page
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route goes to login */}
        <Route path="/" element={<Login />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
