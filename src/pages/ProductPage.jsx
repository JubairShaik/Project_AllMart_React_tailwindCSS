import { createContext, useContext, useState } from "react";
import "../components/ProductPage.css";
import { items } from "../components/AllData";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import ReactModal from 'react-modal';
import  map from "../img/map.png";
import  gift from "../img/gift.png";
import  clock from "../img/clock.png";
import AddToCartPopup from './AddToCartPopup';
import Card from './Card';

export const CartContext = createContext();
 
function ProductPage() {
  

  const handleAddToCart = (itemName) => {
    setItemName(itemName);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };
  
  
  const [showPopup, setShowPopup] = useState(false);
  const [itemName, setItemName] = useState('');
  


  const productDescription = "This is a long product description that needs to be truncated. Click 'Read More' to see the full description.";
const [showFullDescription, setShowFullDescription] = useState(false);

const truncatedDescription = showFullDescription ? productDescription : productDescription.slice(0, 50) + '...';





  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item[0].img);

  const { addToCart } = useContext(CartContext);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * item[0].price;
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
        <p className="text-4xl" >Item has been added to the cart &nbsp; ✅</p>
      </div>

    
      <div className=" mt-[5rem] sm:mt-[8rem]">
        <div className="container  ">


          <div className="product-div ">
          
        
            <div className="product-left w-[50%] flex mt-5 sm:mt-14   flex-col justify-center   pt-[5rem] h-full items-center">
              <div className="sm:w-[57rem] w-[35rem]  h-[22rem] p-4 sm:h-[35rem]  ">
                <img src={image} className="h-full rounded-[1.4rem]  w-full object-cover"  alt="product" />
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
            <h3 className="  text-4xl  sm:text-4xl p-3 ">{item[0].description}</h3>
            <div className="h-6 w-6   flex items-center justify-center  bg-red-300" >
            <span className=" bg-red-500 p-1 rounded-full h-3 w-3"></span></div>
            </div>
            
            <div>

 

            <ul className="bg-red-200  p-2 flex-wrap justify-center items-center list-none gap-5 mt-2 flex w-23 it">
                {item[0].cuisines.map((cuisine, index) => (
                 <li className="text-xl px-4 py-2 rounded-3xl text-slate-100 bg-slate-500" key={item[0].id}>{cuisine}</li>
              
              ))}
          </ul>


            <button className="product-spec hover:text-blue-700" 
             onClick={() => setShowFullDescription(true)}> 
          
               Click here for More Information
            </button>
            <ReactModal className="p-10 flex items-center justify-center" isOpen={showFullDescription}>
              <div  className="bg-slate-500 rounded-3xl mt-[7rem] p-6 flex-col flex items-center justify-center"   >
                <p className="p-5 sm:p-10 text-[2rem] sm:text-[4rem]" >{item[0].specs}</p>
             
                <button className="h-10 text-3xl bg-slate-500" onClick={() => setShowFullDescription(false)}>Close</button>
              </div>
            </ReactModal>
            
          </div>

          <div className="bg-red-500 flex  flex-wrap items-center">
          <p className="product-price "><span className="text-5xl">You Pay <span className="text-10xl">₹</span></span>{calcPrice(quantity)}</p><span className="strike">100</span>
          <p className="text-2xl">(Inclusive of all taxes)</p>
          </div>
          <Card/>
          <span className="bg-green-200 text-2xl text-green-500">You save ₹ 100</span>

              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
              </div>
              <div>
              
             </div>

              <div className="atc-buy">
              <button className="text-4xl bg-slate-300 rounded-xl border-blue-700 border-5 " 
              onClick={() => {
                addToCart(item[0]);
                showNotify();
              }}
              onClick={() => handleAddToCart('Item name')}>Add to cart</button>
              <AddToCartPopup showPopup={showPopup} itemName={item[0].description} />
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>
                  <p>
  Hover over this text to see a tooltip:
  <span title="This is a tooltip">hover here</span>
</p>

{/*
// span[title] {
//   position: relative;
// }

// span[title]::before {
//   content: attr(title);
//   position: absolute;
//   background-color: black;
//   color: white;
//   padding: 4px;
//   border-radius: 4px;
//   font-size: 12px;
//   white-space: nowrap;
//   visibility: hidden;
//   opacity: 0;
//   transition: opacity 0.3s ease;
// }

// span[title]:hover::before {
//   visibility: visible;
//   opacity: 1;
// }

*/}

          <div className="specifications">

  

            <div className="spec">
              <p className="spec-title"> Offers:</p>
              <div className="flex gap-4 items-center  ">
                  <img  className="h-10 sm:h-14"  src={gift} alt="" /> 
                  <p className="title-desc">{item[0].texture}</p>
              </div>
            </div>

            <div className="spec">
              <p className="spec-title">Location:</p>
              <div className="flex gap-4 items-center  ">
                  <img  className="h-10 sm:h-14" src={map} alt="" /> 
                  <p className="title-desc">{item[0].weight}</p>
                  </div> 
                  </div>
                  
                  <div className="spec">
              <p className="spec-title">Duration:</p>
          <div className="flex gap-4 items-center  ">
                  <img className="h-10 sm:h-14"  src={clock} alt="" /> 
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
