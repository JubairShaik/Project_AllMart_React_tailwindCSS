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
        <div key={id} className=" bg-slate-200 p-3  rounded-sm leading-30 gap-3 sm:flex-row  flex-col  flex justify-between items-center">


          <div className="h-[140px] sm:h-[150px] w-[250px] sm:w-[150px] ">
            <img src={item.img}  className=" h-full w-full object-cover  rounded-[10px] flex-1   " alt="product" />
          </div>

             <div className="flex items-center flex-col ">
                 <p className="text-[2rem] font-Poppins">{item.description}</p>
               <div className="cart-btns">



              <button onClick={decrease}>-</button>
              <p className=" rounded-xl">{quantity}</p>
              <button onClick={increase}>+</button>

            </div>



          </div>

          <div className=" flex  sm:flex-col flex-row   items-center  sm:gap-[3rem] gap-[16rem]">

            <p className=" text-[2.3rem]  font-Poppins ">{calcPrice(quantity, item.price)}.00 </p>
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
