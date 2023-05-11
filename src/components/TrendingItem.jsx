import "./TrendingSlider.css";
import { items } from "./AllData";
import { Link } from "react-router-dom";

function TrendingItem() {
  const filteredItems = items.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="bg-slate-300  transition-all
          rounded-lg p-6   ">
          <Link
          to={`/categories/product/${item.id}`}
          onClick={() => window.scrollTo(0, 0)} 
          >
            <div className="s h-[25rem] w-[33.6rem] ">
              <img src={item.img} className="h-full rounded-lg w-full object-cover"  alt="product" />
            </div>
            <div className=" flex items-center  mx-2 pt-2 justify-between">
              <p className="font-Poppins font-normal text-[2rem] "  >{item.description}</p>
              <p className=" text-[2rem] font-extrabold  font-Nunito text-green-600 ">  ₹{item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
