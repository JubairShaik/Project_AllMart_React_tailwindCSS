import ProductItem from "./ProductItem";
import "./ProudProducts.css";
import { motion } from 'framer-motion';
import MotionWrap from './../wrapper/MotionWrap';
import AppWrap from './../wrapper/AppWrap';
import SearchBar from './SearchBar';
 
function ProudProducts() {
  return (
    <motion.div 
   
    className=" px-2 md:px-14">

      <h2 className=" text-[2.6rem] sm:text-[5rem] font-bold 
      mx-[1rem] my-[2.9rem]  sm:my-[4.9rem]   md:mx-[14.6rem] gradcolor7   text-center  font-space uppercase ">Items we are proud of...</h2>


        <SearchBar/>
      <div className="items-center  justify-center flex ">
        <div className="grid grid-cols-1 
        mt-[4.2rem]
         sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          <ProductItem />
        </div>
      </div>
    </motion.div>
  );
}

export default ProudProducts ; 