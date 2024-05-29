import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <div className="bg-[url('./assets/welcome_website.svg')] bg-center bg-cover h-dvh w-svw absolute top-0 left-0">
        <div className="absolute right-28 top-10 flex gap-20">
          <h3 className="font-bold">Home</h3>
          <h3 className="font-bold">About</h3>
          <h3 className="font-bold">Contacts</h3>
        </div>
        <div className="flex flex-col items-start absolute left-60 top-1/3">
          <h1 className="font-bold text-7xl bg-clip-text text-black">
            Welcome
          </h1>
          <h2 className="text-2xl my-4 text-gray-500">
            To the <b>skillomania</b>
          </h2>
          <p className="text-gray-500">
            On this webside we upgrade our skills.
          </p>
          <p className="text-gray-500 mb-6">If you would be intrested.</p>
          <button className=" hover:shadow-indigo-100/50 shadow-lg shadow-indigo-100/50 text-white bg-black">
            Check us out!
          </button>
        </div>
        <div className="absolute flex bottom-16 left-20 border-t-gray-100 border-t-2 w-11/12">
          <p className="text-gray-400 pt-14 ml-12  ">Skillomania</p>
        </div>
      </div>
    </>
  );
}

export default App;
