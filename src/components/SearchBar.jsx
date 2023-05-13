import React, { useState } from "react";
import { items } from './AllData';
import RatingLabel from './../pages/RatingLabel';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import AppWrap from './../wrapper/AppWrap';
import MotionWrap from './../wrapper/MotionWrap';





const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

 

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const filteredResults =  items.filter((item) =>
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
    setSearchResults(filteredResults);
    console.log(setSearchResults)
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  

  
  
  return (
    <>

 

    <div className="flex items-center  w-[100%] sm:w-[50%]  mx-[1ret] sm:mx-[5rem] justify-center">
    
    <input
    type="search"
    placeholder="Search Your Items "
    value={searchQuery}
    onChange={handleInputChange}
    className="py-3 px-2 sm:px-5 sm:py-4 
    cursor-pointer text-orange-700 border
     h-[4rem] w-[25rem]  sm:w-[30rem] font-Poppins text-[1.2rem] 
      sm:text-[2rem]    border-gray-300 rounded-md"
  />

  <button
    onKeyPress={handleKeyPress} 
    onClick={handleSearch}
    className="ml-2  px-4 p w-[10rem] text-[1.7rem] sm:text-[2.5rem] font-semibold  sm:w-[19rem]  h-[4rem] bg-orange-500 text-white rounded-md"
  >
    Search
  </button>
 
    </div>
      
    {searchResults.map((item) => (
        <div key={item.id} className=" ">
             
             
             <Link
             
             to = {`categories/product/${item.id}`}  
             onClick={() => window.scrollTo(0, 0)} 
             > 
     
           <div className="mt-4 flex items-center justify-center flex-wrap ">
             {searchResults.map((item) => (
     
                
               <div key={item.id} className="border-b   border-gray-300 py-2">
               <div
               
               className="flex CardStyles my-10  bg-red-5000 mx-2 px-1 rounded-[10px] bg-red00   flex-col items-center" >
     
               <div className=" relative w-[359px] mt-2 p-2 rounded-[13px]  h-[240px] sm:h-[220px]  ">
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
     
              
     
               
                <p className="text-2xl my-2"> ✅{item.price}+ orders placed recently</p>
     
     
               </div>
               </div>
             ))}
           </div>
      
     </Link>
     </div>
     ))}
     
            
    
    
     </>
      );
    };
    
 
export default SearchBar;


 


















 