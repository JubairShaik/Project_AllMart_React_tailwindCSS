import "./Navbar.css";
import Logo from "../img/AllMart (1).png";
import Logo2 from "../img/AllMart (2).png";
import { Link } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import CartWithItems from "./CartWithItems";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../pages/ProductPage";
import { navVariants } from '../utils/motion';
import { motion } from "framer-motion";



function Navbar() {
 
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [navbarTextColor,setNavbarTextColor]= useState("#ff5000")
  const { cartItem } = useContext(CartContext);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollThreshold = 100; // Change this value to adjust when the color change occurs
      const isSticky = scrollTop > scrollThreshold;


      if (isSticky) {
        setNavbarColor('rgba(287, 165, 0, 0.7)'); 
        navbarTextColor('#000'); /// Change this color to your desired navbar color
      } else {
        setNavbarColor('transparent');
        setNavbarTextColor('#000');
      }
        setSticky(isSticky);
      };
 

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
   
     <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <i
          onClick={() => setMobileNav(!mobileNav)}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
        <div className="mobile-links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
             All Items 
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/offers">
            Offers
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/categories/product/12"
          > product page
          </Link>
        </div>
  </div>

      {/* overlay */}
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      {/* cart */}
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">
            Your Shopping Cart ({cartItem.length})
          </h2>
          <i onClick={openCart} className="fa-sharp fa-solid fa-xmark"></i>
        </div>

        <div className="cart-body">
          {cartItem.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>
      


      <motion.nav 
      variants={navVariants}
      initial= "hidden" 
      whileInView="show"
      // className={`${styles.xPaddings} py-8 relative`}
      style={{ backgroundColor: navbarColor}}
      className={`z-[100] fixed  transition-all   mr-3 ml-1 h-[5.5rem] top-1 rounded-2xl sm:mx-4  w-[98%]`}
      >
    
   
      <div className="container flxed z-10 ">
          <div className={`flex justify-between items-center h-[6rem] ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
                <h1 
                style={{color: navbarTextColor}}
                className=" flex-1  z-100  text-[2rem] font-space  font-extrabold   sm:text-[3rem]" >ALL<span  >MART</span> </h1>
            </Link>
       
            <div className=" text-[1.8rem] hidden items-center sm:flex gap-[3rem]">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                CATEGORIES
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/product/19"
              >
                PRODUCT PAGE
              </Link>
          
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/offers"
              >
                 OFFERS
              </Link>
          
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`fa-solid fa-cart-shopping ${
                  cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              ></i>
            </div>
            <div className="hamburger-menu">
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`fa-solid fa-cart-shopping hamburger-cart ${
                  cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              ></i>
              <i
                onClick={() => setMobileNav(!mobileNav)}
                className="fa-solid fa-bars hamburger-hamb"
              ></i>
            </div>
          </div>
        </div>
   
     
         
     </motion.nav>
    </>
  );
}

export default Navbar;

 