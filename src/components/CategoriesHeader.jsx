import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link  onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="furnitures">
              <button onClick={() => handleBtnName("food")}>
                 Food
              </button>
            </Link>
            <Link to="electronics">
              <button onClick={() => handleBtnName("Fruits")}>
                Fruits 
              </button>
            </Link>
            <Link to="chairs">
              <button onClick={() => handleBtnName( "Vegetables")}>Vegetables</button>
            </Link>
            <Link to="skin-care">
              <button onClick={() => handleBtnName("Meat")}>
                  Meat
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
