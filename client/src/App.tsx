import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="absolute left-4 top-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold  text-2xl">
        S
      </div>
      <div className="flex flex-col items-start absolute left-36 top-1/3">
        <h1 className="font-bold text-7xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          WELCOME
        </h1>
        <h2 className="text-2xl mx-3 mb-2">
          TO THE <b>SKILLOMANIA</b>
        </h2>
        <p className="mx-3">On this webside we upgrade our skills.</p>
        <p className="mx-3 mb-4">If you would be intrested.</p>
        <button className="mx-3 hover:shadow-indigo-300/50 shadow-lg shadow-indigo-400/50 text-white bg-gradient-to-r from-pink-500 to-violet-500">
          Check us out!
        </button>
      </div>
    </>
  );
}

export default App;
