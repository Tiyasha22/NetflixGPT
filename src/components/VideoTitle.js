import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-80 px-12 absolute text-white z-10">
      <div className="bg-gradient-to-r from-black p-4 rounded-lg w-fit">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-l w-fit max-w-md">{overview}</p>
      </div>
      <div className="space mt-4">
        <button className="bg-white text-black rounded-md p-4 m-2  px-10 hover:bg-opacity-90">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white rounded-md p-4 m-2 px-10 bg-opacity-70 hover:bg-opacity-50">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
