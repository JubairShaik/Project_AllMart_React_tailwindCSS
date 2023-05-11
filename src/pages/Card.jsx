import { useState } from "react";
import AppWrap from './../wrapper/AppWrap';
import MotionWrap from './../wrapper/MotionWrap';

const  Card = () => {

    
const product = {
    name: "Chocolate Ice Cream",
    price: "$5.99",
    description: "Our creamy chocolate ice cream is made with the finest ingredients and is sure to satisfy any chocolate lover's craving.",
    additionalInfo: "Contains milk, soy, and may contain traces of nuts."
  };

  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">{product.name}</h2>
        <span className="text-gray-500">{product.price}</span>
      </div>
      <p className="text-gray-700 mt-2">{product.description}</p>

      {showInfo && (
        <div className="absolute top-full  my-10 left-0 right-0 bg-white shadow-md p-4 mt-2 z-10">
          <p className="text-gray-700 bg-red-500">{product.additionalInfo}</p>
          <p className="text-gray-700">{product.additionalInfo}</p>
          <p className="text-gray-700">{product.additionalInfo}</p>
        </div>
      )}

    </div>
  );
};


export default AppWrap(MotionWrap(Card)) ;