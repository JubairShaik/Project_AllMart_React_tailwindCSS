import { Link } from "react-router-dom";
import { items } from "../AllData";

function CategoriesItem() {
  const filteredItems = items.filter((item) => item.category === "dairy");
  return (
    <>
    <div className="sm:p-[10rem]  p-[1rem]  sm:my-[1rem] my-[7rem]">
    <div className="container">
      <div className="flex items-center flex-wrap justify-center gap-10">
        {filteredItems.map((item) => (
          <div key={item.id} className="product normal">

          <Link to={`/categories/product/${item.id}`}>

                  
          <div className=" w-[359px] object-  mt-2 p-2 rounded-[13px] h-[240px]   ">
              <img src={item.img}  className="h-full  my- rounded-[18px] w-full  object-cover"   alt="product1" />
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
