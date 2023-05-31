import React from "react";
import Delivery from "../img/Images/delivery.png";
import HeroBg from "../img/Images/heroBg.png";
import { heroData } from "../utils/data";





const OfferHome = () => {
  return (
    <section
    className="grid  grid-cols-1 md:grid-cols-2 mt-14 sm:mt-10 px-[2rem]  md:px-[10rem] gap-2 w-full "
    
   >
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
      <div className="flex items-center gap-2 justify-center bg-orange-100 px-6 py-2 rounded-full">
        <p className="text-[2rem] text-orange-500 font-semibold"> Bike Delivery </p>

        <div className="w-14 h-14 bg-white rounded-full overflow-hidden drop-shadow-xl">
          <img
            src={Delivery}
            className="w-full h-full object-contain"
            alt="delivery"
          />
        </div>
      </div>

      <p className="text-[4rem] leading-[80px] sm:leading-20 lg:text-[7.5rem] font-bold tracking-wide text-headingColor">
       Have a Look At Our   <br/>
        <span className="text-orange-600 text-[4.5rem] lg:text-[8rem]">
           Best Offers
        </span>
      </p>

      <p className="text-[2rem] text-textColor   md:text-left md:w-[80%]">
      where we deliver unbeatable offers right to your fingertips. 
      Prepare to embark on a shopping journey like no other,
       where quality meets affordability in perfect harmony.
      </p>

      <button

        type="button"
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto  sm:px-10 py:10 px-4 py-2  rounded-lg hover:shadow-lg text-[2.4rem] transition-all ease-in-out duration-100"
      >
         Explore Now
      </button>
    </div>



    <div className="py-6 justify-center flex-1 flex items-center relative">
      <img
        src={HeroBg}
        className=" ml-auto h-490 w-full lg:w-auto lg:h-650"
        alt="hero-bg"
      />

      <div className="w-full h-full
       absolute top-5  left-0  items-center 
       justify-  lg:px-32  py-4 -gap-[4.3rem]
        grid grid-cols-2 ">


        {heroData &&
          heroData.map((n) => (
            <div
              key={n.id}
              className=" lg:h-[26rem]  ml-[.8rem] h-[90%] w-[90%] lg:w-[23rem]  
              p-10 bg-cardOverlay
               backdrop-blur-md rounded-3xl 
               flex flex-col items-center
                justify-center drop-shadow-lg"
            >
              <img
                src={n.imageSrc}
                className="w-[100px] lg:w-40 -mt-10 lg:-mt-20 "
                alt="I1"
              />
              <p className="text-[1.9rem] lg:text-4xl font-semibold
               text-textColor mt-2 lg:mt-4">
                {n.name}
              </p>

              <p className="text-[14px] lg:text-sm font-semibold my-1 lg:my-3">
                {n.decp}
              </p>

              <p className="text-[2rem] font-semibold text-headingColor">
                <span className=" text-orange-600">$</span> {n.price}
              </p>
            </div>
          ))}
      </div>



    </div>
  </section>
  );
};

export default  OfferHome;
