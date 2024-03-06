import React from "react";

const Card = () => {
  return (
    <div>
      
      <div className="min-w-64 rounded overflow-hidden shadow-lg bg-white mx-4  ">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">title</div>
          <p className="text-gray-700 text-base">Desc</p>
          <p className="text-gray-600 text-sm mt-2">Date: 12/11/12</p>
          <p className="text-gray-600 text-sm">Location: mumbai</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
