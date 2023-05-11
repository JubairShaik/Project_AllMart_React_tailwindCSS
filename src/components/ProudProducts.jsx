import ProductItem from "./ProductItem";
import "./ProudProducts.css";
import { motion } from 'framer-motion';
import MotionWrap from './../wrapper/MotionWrap';
import AppWrap from './../wrapper/AppWrap';
 
function ProudProducts() {
  return (
    <motion.div 
   
    className=" px-2 md:px-14">
      <h2 className=" text-[3rem] sm:text-[5rem] font-bold mx-[2rem] my-5  md:mx-[13rem] gradcolor3">Items we are proud of...</h2>
      <div className="items-center  justify-center flex ">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          <ProductItem />
        </div>
      </div>
    </motion.div>
  );
}

export default AppWrap(MotionWrap(ProudProducts)) ; 