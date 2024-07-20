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
            <Link 
             className="hometext"
            onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left text-orange-500 "></i>
              <p className="text-orange-100"> Home </p>
            </Link>
            <h3>{btnName}</h3>
          </div>

          <div className="filter-btns">
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>

            <Link to="allmartFoods">
              <button onClick={() => handleBtnName("food")}>
                 Food
              </button>
            </Link>


            <Link to="essentials">
              <button onClick={() => handleBtnName("Essentials")}>
              Essentials
              </button>
            </Link>


            <Link to="fruits">
              <button onClick={() => handleBtnName("Fruits")}>
                Fruits 
              </button>
            </Link>

            <Link to="vegetables">
              <button onClick={() => handleBtnName( "Vegetables")}>Vegetables</button>
            </Link>


            <Link to="meat">
              <button onClick={() => handleBtnName("Meat")}>
                  Meat
              </button>
            </Link>

            <Link to="dairy">
              <button onClick={() => handleBtnName("Dairy")}>
                  Dairy
              </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
