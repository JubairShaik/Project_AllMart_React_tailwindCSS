import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import girl  from "../img/slider/girl.jpg";
import girl2  from "../img/slider/girl2.jpg";
import girl3  from "../img/slider/girl3.jpg";
import couple   from "../img/slider/couple.jpg";
import cartimage   from "../img/slider/cartimage.jpg";

const imageTexts = [
  {
    heading: "Fresh and Local Produce",
    content: "Discover a wide variety of fresh and locally sourced fruits and vegetables.",
  },
  {
    heading: "Quality Groceries at Affordable Prices",
    content: "Explore our vast selection of high-quality groceries at unbeatable prices.",
  },
  {
    heading: "Home Essentials for Every Need",
    content: "Find all your home essentials in one place, from kitchen supplies to cleaning products.",
  },
  {
    heading: "Delicious Meat and Seafood",
    content: "Indulge in the finest cuts of meat and freshest seafood for your culinary adventures.",
  },
  {
    heading: "Health and Wellness Products",
    content: "Take care of your well-being with our range of health and wellness products.",
  },
  
];


var images = [
    girl ,
    girl2 , 
    girl3,
    couple,
    cartimage
 ];



const Slider = ({ time  }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, time); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  
  const currentText = imageTexts[currentImage];

  return (
    <section className="flex items-center overflow-hidden mx-5 justify-center">
      <div className="relative w-[55rem]  opacity-70  sm:w-[114rem] mx- my-10 h-[34rem] sm:h-[53rem]">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="image"
            className="absolute rounded-[2rem]   mx-auto top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className=" absolute left-8    top-[15rem]  sm:top-[38.4rem]  "
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            <h1 className=" text-[3rem] z-10 sm:text-[5rem] uppercase font-space text-orange-500 font-bold ">{currentText.heading}</h1>
            <p className="text-[1.78rem] sm:text-[2rem] text-white">{currentText.content}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Slider;
