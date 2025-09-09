import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import IntroScreen from "./components/IntroScreen";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000); // intro lasts 5s
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <IntroScreen />; // show magical intro first
  }

  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
