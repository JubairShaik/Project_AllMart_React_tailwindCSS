import { createContext, useContext, useState } from "react";
import "../components/ProductPage.css";
import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import ReactModal from "react-modal";
import map from "../img/map.png";
import gift from "../img/gift.png";
import clock from "../img/clock.png";
import AddToCartPopup from "./AddToCartPopup";
import Card from "./Card";
import VegetarianIndicator from "./VegetarianIndicator";
import Pricetag from './../components/Pricetag';

export const CartContext = createContext();

function ProductPage() {
  const handleAddToCart = (itemName) => {
    setItemName(itemName);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  const [showPopup, setShowPopup] = useState(false);
  const [itemName, setItemName] = useState("");

 
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { id } = useParams();

  const item = items.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item[0].img);

  const { addToCart } = useContext(CartContext);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p className="text-4xl">Item has been added to the cart &nbsp; ✅</p>
      </div>

      <div className=" mt-[5rem] sm:mt-[8rem]">
        <div className="container  ">
          <div className="product-div ">
            <div className="product-left w-[50%] flex mt-5 sm:mt-14   flex-col justify-center   pt-[5rem] h-full items-center">
              <div className="sm:w-[57rem] w-[35rem]  h-[22rem] p-4 sm:h-[35rem]  ">
                <img
                  src={image}
                  className="h-full rounded-[1.4rem]  w-full object-cover"
                  alt="product"
                />
              </div>

              <div className="small-imgs ">
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                />
              </div>
            </div>
            <div className="  product-right">
              <div className="flex   items-center justify-between">
                <h3 className="  text-5xl  font-Poppins sm:text-6xl p-3 ">
                  {item[0].description}
                </h3>

                <VegetarianIndicator isVegetarian={item[0].isVegetarian} />
              </div>

              <div className="flex flex-col justify-center items-center sm:items-start">
                <ul className=" p-2 flex-wrap  list-none gap-4 mt-2 flex w-23 it">
                  {item[0].cuisines.map((cuisine, index) => (
                    <li
                      className="text-xl px-3 py-2 rounded-3xl text-white bg-orange-400"
                      key={item[0].id}
                    >
                      {cuisine}
                    </li>
                  ))}
                </ul>

                <button
                  className="product-spec justify-center bg-orange-500   px-10 mx-1 rounded-full   text-white hover:text-slate-700"
                  onClick={() => setShowFullDescription(true)}
                >
                  Click here for More Information
                </button>
                <ReactModal
                  className="p-5 flex items-center justify-center"
                  isOpen={showFullDescription}
                >
                  <div className="bg-slate-500 rounded-3xl mt-[7rem] p-6 flex-col flex items-center justify-center">
                    <p className="p-5 sm:p-10 text-[2rem] sm:text-[4rem]">
                      {item[0].specs}
                    </p>

                    <button
                      className="h-10 text-3xl bg-slate-500"
                      onClick={() => setShowFullDescription(false)}
                    >
                      Close
                    </button>
                  </div>
                </ReactModal>
              </div>

                  {/*!Component*/}
              <Pricetag item={item} />

              <div>
            </div>

            <div className="atc-buy">
            <button
              onClick={() => {
                addToCart(item[0]);
                showNotify();
              }}
              className="atc-btn"
            >
              add to cart
            </button>
            <button className="buy-btn">buy now</button>

            </div>
              


            </div>


          </div>
 
          <div className="specifications">
            <div className="spec">
              <p className="spec-title"> Offers:</p>
              <div className="flex gap-4 items-center  ">
                <img className="h-10 sm:h-14" src={gift} alt="" />
                <p className="title-desc">{item[0].texture}</p>
              </div>
            </div>

            <div className="spec">
              <p className="spec-title">Location:</p>
              <div className="flex gap-4 items-center  ">
                <img className="h-10 sm:h-14" src={map} alt="" />
                <p className="title-desc">{item[0].weight}</p>
              </div>
            </div>

            <div className="spec">
              <p className="spec-title">Duration:</p>
              <div className="flex gap-4 items-center  ">
                <img className="h-10 sm:h-14" src={clock} alt="" />
                <p className="title-desc">{item[0].size}</p>
              </div>
            </div>


          </div>
        </div>



        <TrendingSlider />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;


 