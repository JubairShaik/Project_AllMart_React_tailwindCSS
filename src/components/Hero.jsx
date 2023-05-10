import "./Header.css";
import Main1 from "../img/header/home-img-1.jpg";
import Main2 from "../img/header/home-img-2.jpg";
import Main3 from "../img/header/home-img-3.jpg";
import Main4 from "../img/header/home-img-4.jpg";
import { Link } from "react-router-dom";
import Img13 from "../img/products/13.jpg";
 




function Hero() {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <div className="grid-container">
          
            <div className="featured grayscale-0  grid-one">
              <Link to="categories/groceries">
                <div id="img1" className="lil-overlay"></div>
                <img src={Img13} alt="" />
                <p className="main-description ">GROCERY & STAPLES</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="categories/dairy">
                <div id="img2" className="lil-overlay"></div>
                <img src="https://2hrsdelivery.in/wp-content/uploads/2021/12/online-fresh-chicken-order-near-me-Bangalore-India-2hrsdelivery.in_.jpg" alt="img1" />
                <p className="main-description">Home Essensials</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="categories/kitchen">
                <div id="img3" className="lil-overlay"></div>
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/28/16/supermarket-trolley-groceries.jpg?quality=50&width=640&auto=webp" alt="img3" />
                <p className="main-description">DAIRY & FROZEN</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="categories/fruits">
                <div id="img4" className="lil-overlay"></div>
                <img src=" https://c4.wallpaperflare.com/wallpaper/537/587/711/fruits-pomegranate-free-images-wallpaper-preview.jpg " alt="img4" />
                <p className="main-description">Fruits</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Hero;
