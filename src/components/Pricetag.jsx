import {useState} from 'react'



const Pricetag = ({item}) => {

  const [quantity, setQuantity] = useState(1);
    
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

  const discountPrice = (quantity) => {
    return quantity * item[0].actualPrice ;
  };

  return (


    <>
    <div className="font-Poppins  flex gap-4  flex-wrap items-center">
    <p className="product-price  ">
      <span className="text-5xl font-blinker ">
        You Pay <span className="text-10xl ">₹</span>
      </span>

      {calcPrice(quantity)}
      
    </p>

    <span className="strike text-red-500 ">
    {discountPrice(quantity)}
    </span>

    <p className="bg-green-300 text-[1.5rem] sm:text-[2rem] px-4  py-1 font-space rounded-2xl text-green-600">
      you save  { discountPrice(quantity) - calcPrice(quantity)}
    </p>



    <p className="text-2xl font-space font-semibold">
      (Inclusive of all taxes)
    </p>
    
    </div>

    
    <div className="product-quant">
    <p>Quantity</p>
    <div className="product-btns">
      <button onClick={decrease}>-</button>
      <p className="quantity">{quantity}</p>
      <button onClick={increase}>+</button>
    </div>
  </div>
  </>
    
  )
}

export default Pricetag