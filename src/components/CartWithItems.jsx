import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/ProductPage";
import EmptyCart from "./EmptyCart";

function CartWithItems() {

  
  const { cartItem, setCartItem } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);



  return (
    <>
      <div className="full-cart-div   ">
        <div className=" flex items-center flex-col  gap-[1.8rem]">
          {cartItem.map((item, id) =>
            cartItem.length !== 0 ? (
              <CartItem key={id} item={item} setCartItem={setCartItem} />
            ) : (
              <EmptyCart key={id} />
            )
          )}
        </div>
      </div>


      
      <div className=" flex flex-col my-10 items-center">
        <div className="text-[3rem] font-space font-bold   gap-[10rem] flex items-center  justify-between  ">
          <p>Subtotal</p>
          <p className="text-green-500">{totalPrice + "₹"}</p>
        </div>
        <div className="sub-left">
          <Link>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default CartWithItems;
