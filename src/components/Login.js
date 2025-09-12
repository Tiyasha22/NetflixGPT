import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validation.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = (e) => {
    e.preventDefault();

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXFZnMq0aIUsTd1J4Zy10TaPi4Ulx3VRyT_ZN1p9XYcE1KAon0Ndskx0e2tTr9hajESYNDSnSrbDexSXvmYSBiI8gVqOF9SORA.png?r=b39",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
            ref={name}
            type="text"
            placeholder="Enter your name"
            className="p-2 m-2 rounded-sm border border-solid border-gray-400 w-full bg-transparent h-14"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter your e-mail"
          className="p-2 m-2 rounded-sm border border-solid border-gray-400 w-full bg-transparent h-14"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter your password"
          className="p-2 m-2 rounded-sm border border-solid border-gray-400 w-full bg-transparent h-14"
        />
        <p className="text-red-500 font-bold text-md p-2 m-1">{errorMessage}</p>
        <button
          className="p-2 m-2 rounded-sm border-gray-500 bg-red-700 w-full"
          type="submit"
          onClick={handleButtonClick}
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
