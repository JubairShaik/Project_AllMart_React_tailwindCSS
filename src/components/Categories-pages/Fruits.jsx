import { Link } from "react-router-dom";
import { items } from "../AllData";

function CategoriesItem() {
  const filteredItems = items.filter((item) => item.category === "fruits");
  return (
    <>
      <div className="sm:p-[10rem] p-[1rem]  sm:my-[1rem] my-[7rem]">
        <div className="container">
          <div className="products-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="product normal">
                <Link to={`/categories/product/${item.id}`}>
                  <div className="product-header">
                    <img src={item.img} alt="product1" />
                  </div>
                  <div className="product-details">
                    <p>{item.description}</p>
                    <p className="item-price">₹{item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesItem;
