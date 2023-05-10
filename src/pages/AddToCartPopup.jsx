import React from 'react';
import "../components/ProductPage.css";


const AddToCartPopup = ({ showPopup, itemName }) => {
  return (
    <div className={`popup ${showPopup ? 'show' : ''}`}>
     <span className="text-3xl"> {itemName} has been added to the cart &nbsp; ✅</span>
    </div>
  );
};

export default AddToCartPopup;
