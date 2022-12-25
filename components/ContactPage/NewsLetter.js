import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className="wrap md:flex md:justify-around bg-gray-300 text-black md:h-32 md:items-center md:px-14 capitalize">
        <div>
          <h1 className="text-2xl w-full text-center pt-6 md:text-3xl md:pt-4">
            Newsletter subscription
          </h1>
          <h1 className="text-2xl w-full text-center md:text-3xl">
            Get the latest deal from TwitchTech
          </h1>
        </div>
        <div className="flex justify-center items-center text-center py-4">
          <input
            type="text"
            className="border-x-2 border-y-2 h-8 text-center py-7 text-xl cursor-pointer"
            placeholder="Enter Email ......."
          />
        </div>
        <div className=" flex justify-center items-center text-center py-4">
          <input
            type="submit"
            value="SUBSCRIBE"
            placeholder="Subscribe"
            className="bg-black text-white py-5 px-14 mb-4 text-xl rounded-md cursor-pointer hover:bg-orange-300 hover:text-black hover:animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
