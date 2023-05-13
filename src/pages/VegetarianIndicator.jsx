import React, { useState } from "react";

const VegetarianIndicator = ({ isVegetarian }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`h-6 w-6 cursor-pointer flex items-center justify-center ${
        isVegetarian ? "bg-green-300" : "bg-red-300"
      }`}
    >
      {isHovered && (
        <div className={`absolute top-50 left-100 transform -translate-x-1/2 -translate-y-full ${isVegetarian ? "bg-green-500" : "bg-red-500"} text-white rounded p-2`}>
          {isVegetarian ? "Vegetarian" : "Non-Vegetarian"}
        </div>
      )}
      <span className={`bg-${isVegetarian ? "green-500" : "red-500"} p-1 rounded-full h-3 w-3`} />
    </div>
  );
};

export default VegetarianIndicator;
