import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constant";
const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMG} alt="background-image" />
      </div>
      <GptSearchBar />
    </div>
  );
};
export default GPTSearch;
