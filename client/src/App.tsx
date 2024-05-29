import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="absolute right-28 top-10 flex gap-20">
        <h3 className="font-bold">Home</h3>
        <h3 className="font-bold">About</h3>
        <h3 className="font-bold">Contacts</h3>
      </div>
      <div className="flex flex-col items-start absolute left-60 top-1/3">
        <h1 className="font-bold text-7xl bg-clip-text text-black">Welcome</h1>
        <h2 className="text-2xl my-4 text-gray-500">
          To the <b>skillomania</b>
        </h2>
        <p className="text-gray-500">On this webside we upgrade our skills.</p>
        <p className="text-gray-500 mb-6">If you would be intrested.</p>
        <button className=" hover:shadow-indigo-100/50 shadow-lg shadow-indigo-100/50 text-white bg-black">
          Check us out!
        </button>
      </div>
      <div className="absolute flex bottom-16 left-20 border-t-gray-100 border-t-2 w-11/12">
        <p className="text-gray-400 pt-14 ml-12  ">Skillomania</p>
      </div>
    </>
  );
}

export default App;
