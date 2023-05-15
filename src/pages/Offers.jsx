import React from 'react'
import { Outlet} from "react-router-dom"
import Slider from './../components/Slider';
import Newsletter from './../components/Newsletter';
import BannerReverse from './../components/BannerReverse';
 
import  berry from "../img/products/berry.png";




const images2 = [
  "https://img.freepik.com/free-photo/woman-with-smart-phone-supermarket-standing-by-shelves-full-fruit-grocery-store-holding-thumbs-up_342744-1091.jpg?w=996&t=st=1681469869~exp=1681470469~hmac=ecf317a71157181b06da96a9fbc9bfd7b592b83a410fcbd68a8c7562becbb996",
  "https://img.freepik.com/free-photo/closeup-tomatoes-box-counter_169016-21317.jpg?w=996&t=st=1681469899~exp=1681470499~hmac=47118beaa71880de09af2541c66844396f6d48ad28fb96370e4b89c716427916",
  "https://img.freepik.com/premium-photo/organic-food-background-vegetables-basket_135427-233.jpg?w=1380",
  "https://img.freepik.com/free-photo/pieces-raw-fresh-meat-isolated-black-stone-board-mirrored-side-view_346278-817.jpg?w=996&t=st=1681470100~exp=1681470700~hmac=5dddc0aab2133d802f3ccfea788d2e201e4e6698593e3dd9eef404b6d0ab514a"
];



const OfferCardData = [
  {
    id: 112,
    name: "We Deliver The Best Coffee",
    imgUrl : "https://www.shadevelopers.com/wp-content/uploads/2023/03/coffee.webp" ,
    description: "Fresh Coffee is The Place Where You Can Find the Best Coffee in this Whole Towm ! We Highly Recommend to Visit This Coffee Shop With Your Family Members",
    home:"Home Delivery Available",
     
  },
  {
    id: 132,
    name: "The Most Fav Fruit In the Town",
    imgUrl :  berry ,
    description: "Fresh Coffee is The Place Where You Can Find the Best Coffee in this Whole Towm ! We Highly Recommend to Visit This Coffee Shop With Your Family Members",
    home:"Home Delivery Available"
  },
   
]






function OfferCard ({ name, description , imgUrl , home }){
   return(
    <div className="flex justify-center items-center  ">
     <div className= "card-box   ">
    <div className="card-content   ">
    <h2 className="text-[2.3rem] sm:text-start text-center font-extrabold  sm:text-[4rem]" >{name}</h2>
    <p className="text-xl text-start  mx-[5rem] text-white sm:mx-0 max-w-[36rem]  " >{description}</p>

    <h3 className="sm:text-[2rem]  text-[2rem] ml-[5rem]   mx-10 sm:mx-0  uppercase">{home}</h3>

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
  <h2 className="sm:text-[8rem] myShadow  mt-[8rem] sm:mt-[6rem] text-amber-500 text-[3.6rem] text-center font-extrabold uppercase z-10" >Our Popular Items</h2>
  <section className=" flex flex-col   sm:items-center sm:justify-center sm:flex-row ">
     {OfferCardData.map((itemData)=>(
        <OfferCard {...itemData} key={itemData.id}  />
    ))}
  </section>
  
  
  <Slider time={3000} images={images2} />

  <BannerReverse
    title=" Fastest Home Delivery "
    text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
    
  />

  <h2 className=" text-[5rem] sm:text-[10rem] font-bold  text-center text-black myShadow">AllMart</h2>
 

  <img src="https://moreretail.in/frontend/dist/img/store-locator/banner.png" alt="" />
 




  </>
  )
}

export default  Offers;