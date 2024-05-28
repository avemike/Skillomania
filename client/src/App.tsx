import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-96 h-96 bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 rounded-lg shadow-lg shadow-neutral-400"></div>
    </>
  );
}

export default App;
