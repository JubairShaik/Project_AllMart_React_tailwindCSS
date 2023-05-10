 import React from 'react'


//  const number="8688711250"
const mail="Allmart@gmail.com"


 const Newsletter = () => {
   return (
    
    
    <section className="bg-orange-300  rounded-tl-[10rem]  rounded-tr-[10rem] flex flex-col items-center  font-extrabold justify-center h-[20rem]">
     <div>
     <h2 className="text-[2.4rem] text-slate-800 mt-10 sm:text-[4rem]"> We Always love  <span className="gradcolor6" > Your Feedback</span></h2>
     </div>
      <div className='flex flex-col mt-5 sm:flex-row justify-center items-center'>
          <div className=" flex  shadow-lg shadow-orange-500 justify-center gap-4 items-center  bg-slate-900  py-3 px-4 rounded-xl">
          <img  className=' h-[2.4rem]  sm:h-[2.9rem]' src=" https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="mail" />
         <a   href="mailto:sjuber608@gmail.com">
         <h3 className="sm:text-[2rem] cursor-pointer font-space  text-slate-200   font-medium text-[1.5rem] " >{mail}</h3>
         </a>
          </div>
        
          </div>

    </section>
   )
 }
 
 export default Newsletter