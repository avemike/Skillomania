export function HomePage() {
  return (
    <div className="bg-center bg-cover h-dvh w-svw mt-32">
      <div className="">
        <h2 className="text-5xl font-bold">Welcome to Skillomania</h2>
        <p className="text-xl my-3 ">Maybe new challenge for today?</p>
        <button className="bg-indigo-600 text-white mt-5 mb-3 px-10 absolute top-1/2 left-10 translate-x-[40px] translate-y-[80px] z-20">
          Daily
        </button>
      </div>
      <div className="bg-[url('./assets/arrows.svg')] bg-center bg-cover w-1/5 h-1/3 rounded-full absolute top-1/2 left-10"></div>
    </div>
  );
}
