/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function Home() {
  return (
    <>
      {" "}
      <div className="bg-center bg-cover h-dvh w-svw absolute top-0 left-0 overflow-hidden">
        <div className=" bg-[url('./assets/zebra.svg')] bg-center bg-cover h-dvh  w-1/2  absolute -top-96 -right-72  "></div>
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 z-10 ">
          <h2 className="text-5xl font-bold">Welcome to Skillomania</h2>
          <p className="text-xl my-3 ">Maybe new challenge for today?</p>
          <button className="bg-indigo-600 text-white mt-5 mb-3 px-10">
            Daily
          </button>
        </div>
        <div className="bg-[url('./assets/arrows.svg')] bg-center bg-cover w-1/5 h-1/3 rounded-full absolute top-1/3 left-1/4 transform -translate-x-full   "></div>
      </div>
    </>
  );
}
