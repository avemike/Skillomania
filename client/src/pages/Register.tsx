/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 */
export function Register() {
  return (
    <div className="h-dvh w-svw absolute top-0 left-0  ">
      <div className="z-10 h-dvh w-svw absolute top-0 left-0 backdrop-blur backdrop-brightness-50">
        <div className="absolute z-20 h-2/3 w-2/4 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-gray-600 shadow-lg ">
          <div className="h-full w-1/2 ">
            <div className="flex flex-col m-10 mt-20">
              <h2 className=" text-2xl font-bold mb-4">Register</h2>
              <div className="flex">
                <div className="mt-6 mb-2 w-1/2">
                  <label htmlFor="Username" className="text-sm font-bold ">
                    Username
                  </label>
                  <input
                    type="username"
                    className="h-10 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg pl-3"
                    placeholder="Think of a username"
                  />
                </div>
                <div className="mt-6 mb-2 w-1/2">
                  <label htmlFor="email" className="text-sm font-bold ">
                    Email
                  </label>
                  <input
                    type="email"
                    className="h-10 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg pl-3"
                    placeholder="Enter your mail address"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="mt-2 mb-2 w-1/2">
                  <label htmlFor="Username" className="text-sm font-bold ">
                    Password
                  </label>
                  <input
                    type="password"
                    className="h-10 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg pl-3"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-2 mb-2 w-1/2">
                  <label htmlFor="password" className="text-sm font-bold ">
                    Password
                  </label>
                  <input
                    type="password"
                    className="h-10 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg pl-3"
                    placeholder="Repeat password"
                  />
                </div>
              </div>
              <button className="bg-indigo-600 text-white mt-5 mb-3">
                Register
              </button>

              <div className="flex mt-3 justify-between px-16">
                <p className="text-xs font-bold">Have an account?</p>
                <a href="/" className="text-xs font-bold underline">
                  Go back to the main page
                </a>
              </div>
            </div>
            <div className="bg-[url('./assets/woman.svg')] h-44 w-96 absolute bottom-2 left-0 "></div>
          </div>
          <div className="bg-[url('./assets/login.svg')] h-full w-1/2 bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
}
