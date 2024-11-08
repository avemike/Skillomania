import { GoogleAuthButton } from "./GoogleAuthButton";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="z-10 h-dvh w-svw absolute top-0 left-0 backdrop-blur backdrop-brightness-50"
      onClick={onClose}
    >
      <div
        className="absolute z-20 min-w-96 w-[50%] max-w-[1000px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex shadow-gray-600 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="h-full w-1/2 ">
          <div className="flex flex-col m-10 mt-16">
            <h2 className=" text-2xl font-bold">Hi!</h2>
            <p className=" text-mid my-2">
              Enter your credentials to go further!
            </p>
            <label htmlFor="email" className="text-sm font-bold mt-6 mb-2">
              Email
            </label>
            <input
              type="email"
              className="h-10 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg pl-3"
              placeholder="Enter your mail address"
            />
            <label htmlFor="password" className="text-sm font-bold mt-6 mb-2">
              Password
            </label>
            <input
              type="password"
              className="h-10 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg pl-3"
              placeholder="Enter your password"
            />
            <div className="flex mb-6 mt-1">
              <input
                type="checkbox"
                className="h-6 self-start mt-2.5 ml-1 rounded-none"
              />
              <label className="mt-3 ml-2 text-sm font-bold ">
                Remember me
              </label>
            </div>
            <button className="bg-indigo-600 text-white">Log in</button>
            <p className="text-xs text-gray-600 my-3 text-center">
              Or log in with
            </p>
            <GoogleAuthButton />
            {/* <button className="bg-white text-black text-sm border-gray-300 mb-2 flex gap-2 justify-center items-center ">
                  <div className="bg-[url('./assets/google.svg')] h-5 w-5"></div>
                  <p>Sign up with Google</p>
                </button> */}
            <div className="flex mt-3 justify-between px-11">
              <p className="text-xs font-bold">Don't have an account?</p>
              <a href="/Register" className="text-xs font-bold underline">
                Register here
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-center bg-cover">
          <img
            src="login.svg"
            alt="Login background image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
