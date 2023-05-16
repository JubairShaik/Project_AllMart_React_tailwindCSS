import React from 'react'
import { Outlet} from "react-router-dom"
import Slider from './../components/Slider';
import Newsletter from './../components/Newsletter'; 
import  berry from "../img/products/berry.png";




 


const OfferCardData = [
  {
    id: 112,
    name: "We Deliver The Best Coffee",
    imgUrl : "https://www.shadevelopers.com/wp-content/uploads/2023/03/coffee.webp" ,
    description: "Fresh Coffee is The Place Where You Can Find the Best Coffee in this Whole Towm ! We Highly Recommend to Visit This Coffee Shop With Your Family Members",
    home:"Home Delivery Available",
     
  },
   
   
]






function OfferCard ({ name, description , imgUrl , home }){
   return(
    <div className="flex justify-center   items-center  ">
     <div className= "card-box   ">
    <div className="card-content   ">
    <h2 className="text-[2.8rem]  sm:text-start text-center font-extrabold  sm:text-[4rem]" >{name}</h2>
    <p className="text-xl text-start  mx-[5rem] text-white sm:mx-0 max-w-[36rem]  " >{description}</p>

    <h3 className="sm:text-[2rem]  text-[2rem] ml-[5rem]  text-orange-300  mx-10 sm:mx-0  uppercase">{home}</h3>

    <button class="bg-white   ml-[5rem] text-[1.6rem] sm:text-[2rem]  font-medium   my-4 sm:font-bold sm:py-2 py-1 px-4 sm:px-6 rounded-lg">
       ORDER NOW
    </button>      
  </div>
  <img className="card-image" src={imgUrl} alt="" />
</div>
</div>
   )
}

const Offers  = () => {
  return (
  <>
  <h2 className="sm:text-[8rem]   mt-[8rem] sm:mt-[6rem] text-amber-500 text-[3.6rem] text-center font-extrabold uppercase z-10" >Item of the Day</h2>
  <section className=" flex flex-col   sm:items-center sm:justify-center sm:flex-row ">
     {OfferCardData.map((itemData)=>(
        <OfferCard {...itemData} key={itemData.id}  />
    ))}
  </section>
  
 

  <h2 className=" text-[5rem] sm:text-[10rem] font-bold font-space   text-center text-black  ">AllMART</h2>
 

  <img src="https://moreretail.in/frontend/dist/img/store-locator/banner.png" alt="" />
 




  </>
  )
}

export default  Offers;