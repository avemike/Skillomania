/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 * @return {JSX.Element} The rendered Home component.
 */
export function Error() {
  return (
    <>
      {" "}
      <div className="bg-pink-300/50 h-dvh w-svw absolute top-0 left-0 flex justify-center items-center">
        <div className="flex flex-col text-center bg-gray-100 p-20 rounded-lg shadow-slate-500/50 shadow-md ">
          <h1 className="mb-3">Error</h1>
          <p>Sorry, something must have gone wrong!</p>
          <p>Maybe refreshing page would help?</p>
        </div>
      </div>
    </>
  );
}
