import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { changeLanguage } from "../utils/configSlice.js";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const buttonSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-800 text-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.indentifier} value={lang.indentifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 mx-2 bg-white text-black rounded-md hover:bg-opacity-80 transition-all duration-200 font-medium"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "🔍 GPT Search"}
          </button>
          <img
            className="w-10 h-10 rounded-md mx-2"
            src={user?.photoURL}
            alt={user.displayName}
          />
          <button
            className="px-4 py-2 mx-2 bg-red-700 text-white rounded-md hover:bg-red-600 transition-all duration-200 font-medium"
            type=""
            onClick={buttonSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
