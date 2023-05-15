import { items } from "./AllData";
import { Link } from "react-router-dom";
import RatingLabel from './../pages/RatingLabel';
import { motion } from 'framer-motion';
import MotionWrap from './../wrapper/MotionWrap';
import AppWrap from './../wrapper/AppWrap';
 

function ProductItem() {

  const filteredItems = items.filter((item) => item.id <= Math.max(item.id));
  
  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="my-5 ">



          <Link

            to = {`categories/product/${item.id}`}
            onClick={() => window.scrollTo(0, 0)} 
          >

          <div
          
          className="flex CardStyles    mx-2 px-1 rounded-[10px] bg-red00   flex-col items-center" >

          <div className=" relative w-[366px] mt-2 py-1   rounded-[13px]  h-[240px] sm:h-[220px]  ">
              <img src={item.img}  className="h-full  px-1    rounded-[18px] w-full object-cover
               hover:slale-110"   alt="product1" />
               <p className= "font-Poppins text-xl text-slate-300 bg-slate-600 absolute right-5  bottom-5  rounded-md px-3 py-1"> {item.DeliveryTime}</p>
          </div>
            
            
             <div className="flex  items-center gap-5  justify-between ">
             <p className="text-3xl font-thin font-Poppins p-1">{item.description}</p>
             <p><RatingLabel rating={item.rating} /></p>
             </div>
              
            <div className=" text-3xl gap-10 flex items-center justify-between">
              <p className="text-2xl flex items-center ">{item.cuisines.join(",")}</p>
              <p className=" font-Poppins "><span className="text-4xl">₹</span>{item.price}</p>
             
            </div>

            {/*<p className={
              { maxWidth: '260px', whiteSpace: 'nowrap',
               overflow: 'hidden', textOverflow: 'ellipsis' }}
               >
                    This text is too long to fit in the container, 
                    so it will be truncated and replaced with an ellipsis.
            </p>
            
            <ul className=" flex-wrap  items-center list-none gap-4 mt-2 flex">
            {item.cuisines.map((cuisine, index) => (
              <li className="text-[10px]  px-2 py-1 rounded-md text-slate-100 bg-slate-500" key={item.id}>{cuisine}</li>
              ))}
              </ul>
            */}


          
          <span className="w-full h-[1px] mt-4 flex  bg-slate-400"> </span>
          <p className="text-2xl my-2"> ✅{item.price}+ orders placed recently</p>


          </div>

          
          </Link>
        </div>
      ))}


      
    </>
  );
}

export default  (ProductItem);
