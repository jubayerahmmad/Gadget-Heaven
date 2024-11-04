import React from "react";

const DBanner = () => {
  return (
    <div className="h-96 w-full bg-purple-600">
      <div className="p-8 space-y-4">
        <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">
          Product Details
        </h1>
        <p className="text-lg lg:text-xl text-gray-200 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
    </div>
  );
};

export default DBanner;
