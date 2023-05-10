import { Link } from "react-router-dom";
import "./Banner.css";

function Banner({ title, text, img }) {
  return (
    <div className="banner">
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
          <div className="img-side">
            <img src="https://c4.wallpaperflare.com/wallpaper/447/908/942/food-chicken-ketchup-meat-hd-wallpaper-preview.jpg" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
