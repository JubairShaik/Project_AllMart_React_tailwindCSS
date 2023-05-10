import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';






const Slider = ({time ,images }) => {

 


 const [currentImage, setCurrentImage] = useState(0);

 const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };
  
  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    },  time); // Change image every 5 seconds
  
    return () => clearInterval(interval);
  }, [currentImage, images.length]);





    return (
        <section className=" flex items-center  overflow-hidden  mx-5 justify-center" >
        <div className="relative w-[55rem]  sm:w-[114rem]    mx- my-10  h-[34rem] sm:h-[53rem]">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="image"
            className="absolute rounded-[3rem] mx-auto  top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={handlePrev}
          className="absolute sm:top-[25rem]  select-none top-[16rem] -left-[2rem]   sm:-left-[7rem]  transform   px-3 py-1 rounded"
        >
        <img className="sm:h-[5rem] h-[3rem] bg-white  p-2 m-3  rounded-full"   src="https://cdn.iconscout.com/icon/free/png-512/previous-39-436926.png?f=avif&w=256" alt="" />
        </button>
        
        <button
        onClick={handleNext}
        className="absolute sm:top-[25rem]  select-none top-[16rem] -right-[2rem]   sm:-right-[7rem]  transform   px-3 py-1 rounded"
        >
        <img className="sm:h-[5rem] h-[3rem] bg-white  p-2 m-3  rounded-full"   src="https://cdn.iconscout.com/icon/free/png-512/next-116-436790.png?f=avif&w=256" alt="" />
        </button>
      </div>
        </section>
     
    );
  };

  
export default Slider