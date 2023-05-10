import "./TrendingSlider.css";
import { items } from "./AllData";
import { Link } from "react-router-dom";

function TrendingItem() {
  const filteredItems = items.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="bg-slate-300  transition-all  rounded-lg p-5 sm:p-10 ">
          <Link
          to={`/categories/product/${item.id}`}
          onClick={() => window.scrollTo(0, 0)} 
          >
            <div className="sm:h-[20rem] sm:w-[36rem] h-[15rem] w-[26rem] ">
              <img src={item.img} className="h-full rounded-lg w-full object-cover"  alt="product" />
            </div>
            <div className="item-description">
              <p>{item.description}</p>
              <p className="item-price">{item.price}RS</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
