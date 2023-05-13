import React from 'react'
import './Heading.css'
import { navVariants } from '../utils/motion';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";




const Heading = () => {
  return (
     <>
     <section>
     
     <motion.nav
     variants={navVariants}
     initial= "hidden" 
     whileInView="show"
     >
    
     <div className="flex flex-col  items-center mt-[11rem] sm:mt-[14rem]  justify-center">
     
    
     <div className="absolute w-[90%] h-[10rem] inset-0 gradient-orange " />
      <h2 className=" text-[3.8rem] text-center sm:text-[7.2rem] z-100 sm:leading-[87px]   leading-[40px] mantext orange-text-radient font-bold z-10" >We Deliver the Best Groceries in Time </h2>
      <p className=" z-10 text-[1.9rem] text-orange-700 font-space mt-2  sm:text-[3rem]" >Everything all at once  
     
      <span className="relative text-black   ml-3"> 
      <span className="absolute h-1 rounded-3xl w-[95%]  top-9 sm:top-14  bg-orange-400"></span>
        ALLMART 
       </span>
       </p>

       <Link 
       to="categories/groceries"
       
       >
      
       <button className=" mt-10 sm:mt-12 font-space  mybutton " >
               Expolore Mart 
       </button>
       </Link>
     </div>

     </motion.nav>
     </section>
     </>
  )
}

export default Heading ;
