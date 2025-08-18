import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="background-image"
        />
      </div>
      <form className="p-12  bg-black bg-opacity-80 absolute w-3/12 my-32 mx-auto right-0 left-0  text-white">
        <h1
          aria-label="Sign in to your Netflix account"
          className="font-bold text-3xl pb-8"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter your e-name"
            className="p-2 m-2 rounded-sm border border-solid border-gray-400 w-full bg-transparent h-14"
          />
        )}
        <input
          type="email"
          placeholder="Enter your e-mail"
          className="p-2 m-2 rounded-sm border border-solid border-gray-400 w-full bg-transparent h-14"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-2 m-2 rounded-sm border border-solid border-gray-400 w-full bg-transparent h-14"
        />
        <button
          className="p-2 m-2 rounded-sm border-gray-500 bg-red-700 w-full"
          type="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <span className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already a User? Sign in now "}
        </span>
      </form>
    </div>
  );
};

export default Login;
