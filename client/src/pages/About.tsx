/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function About() {
  return (
    <div className="h-dvh w-svw flex flex-col text-center items-center justify-center">
      <div className="bg-white/50 p-10 round">
        <h1 className=" text-4xl">Hi!</h1>
        <h2 className=" text-2xl">
          This is skillomania, a page on which we learn or upgrade our skills!
        </h2>
        <p className="text-xl">
          It's really easy, just register or log in (if you have an accout).
          <br />
          If you're feeling lost that's okay click the link bellow for a
          tutorial.
        </p>
        <a href="" className=" text-lg ">
          Show me how to use this website!
        </a>
      </div>
    </div>
  );
}
