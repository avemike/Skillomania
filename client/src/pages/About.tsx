/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function About() {
  return (
    <>
      {" "}
      <div className="bg-[url('./assets/welcome_website.svg')] bg-center bg-cover h-dvh w-svw absolute top-0 left-0 flex flex-col text-center items-center justify-center">
        <div className="bg-white/50 p-10">
          <h1 className=" text-4xl">Hi!</h1>
          <h2 className=" text-2xl">
            This is skillomania, a page on which we learn or upgrade our skills!
          </h2>
          <p className="text-xl">
            It's really easy, just register or log in if you have an accout
          </p>
        </div>
      </div>
    </>
  );
}
