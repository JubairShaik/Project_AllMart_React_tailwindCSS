import { Link } from "react-router-dom";
import "./Banner.css";
import { motion } from 'framer-motion';
import { navVariants } from './../utils/motion';
import cartimage from "../img/Fruits.avif";





function Banner({ title, text  }) {
  return (
    <motion.div
    variants={navVariants}
    initial= "hidden" 
    whileInView="show"
     className="banner">
      <div className="container   ">
        <div className="banner-container   ">
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                <button>Explore Now</button>
              </Link>
            </div>
          </div>
             <div className="img-side rounded-tr-[2rem] rounded-bl-[2rem]  ">
                <img  className=" cursor-pointer  transition-all   rounded-tr-[2rem] rounded-br-[2rem] " src={cartimage} alt="" />
             </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;
