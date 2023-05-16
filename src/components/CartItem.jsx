import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/ProductPage";

function CartItem() {
  const [quantity, setQuantity] = useState(1);
  const { cartItem, setCartItem } = useContext(CartContext);

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

  const calcPrice = (quantity, item) => {
    return quantity * item;
  };



  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeFromCart = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);

  return (
    <>
      {cartItem.map((item, id) => (
        <div key={id} className=" w-full   h-full bg-slate-300  p-3   rounded-[1rem] justify-between leading-30 gap-3 sm:flex-row  flex-col  flex  items-center">


              <div className="h-[200px] flex-10  sm:h-[150px]  w-[320px] sm:w-[150px] ">
               <img src={item.img}  className=" h-full w-full object-cover  rounded-[10px] flex-1   " alt="product" />
              </div>

           <div className="flex w-[100%] sm:w-[40%]  items-center justify-center  gap-[2rem] flex-col">
             <div className="flex items-center   flex-col ">
             <p className="text-[2rem] sm:text-[1.3rem] sm:text-center  font-Poppins">{item.description}</p>
            </div>

            <div className= "flex   flex-row items-center gap-3">
            <button className="orangebutton"  onClick={decrease}>-</button>
                <span className="bg-orange-400 w-[3.7rem] rounded-xl text-[2rem] h-[3.7rem] font-Poppins  flex justify-center items-center">{quantity}</span>
             <button  className="orangebutton"  onClick={increase}>+</button>
          </div>


        </div>

          <div className=" flex  flex-auto  sm:flex-col flex-row   items-center  sm:gap-[3rem] gap-[16rem]">

            <p className=" text-[2.3rem]  font-Poppins ">
            ₹{calcPrice(quantity, item.price)} </p>
            <i
              onClick={() => removeFromCart(item.id)}
              className=" text-[3rem] fa-sharp fa-solid fa-xmark"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
