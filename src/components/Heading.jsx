import React from 'react'
import './Heading.css'
import { navVariants } from '../utils/motion';
import { motion } from "framer-motion";





const Heading = () => {
  return (
     <>
     <section>
     
     <motion.div
     variants={navVariants}
     initial= "hidden" 
     whileInView="show"
     >
     
     <div className="absolute w-[50%] top-0 left-0  inset-0 gradient-orange " />
     <div className="absolute w-[90%] inset-0 gradient-02 " />

     <div className="flex flex-col leading-20 items-center mt-[5rem] sm:mt-[10rem]  justify-center">
     
     <div className="absolute z-[0] h-[10rem]  w-[69%] inset-0 gradient-01 " />
     <div className="absolute w-[90%] h-[10rem] inset-0 gradient-orange " />
      <h2 className="text-[5rem] font-space font-bold  z-10" >We Deliver the Best Groceries in Time </h2>
      <p className="text-[3rem]" >Everything all at once 
      <span className="relative"> 
      <span className="absolute h-1 w-[95%] top-14  bg-orange-400"></span>
       ALLMART </span></p>
      <button>

  <span></span>
  <span></span>
  <span></span>
  <span></span> Expolore Mart 
</button>

        



     </div>

     </motion.div>
     </section>
     </>
  )
}

export default Heading
