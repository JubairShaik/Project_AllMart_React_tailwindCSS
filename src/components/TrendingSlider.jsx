import "./TrendingSlider.css";
import TrendingItem from "./TrendingItem";

function TrendingSlider() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 305;
  };

  return (
    <div className="trending">
      <div className="container">
        <div className="title-btns">
          <h3 className="text-[2.4rem] sm:text-[5rem] font-bold   gradcolor4" > Trending Now</h3>
          <div className="btns">
            <button title="scroll left" onClick={slideLeft}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button title="scroll right" onClick={slideRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="row-container" id="slider">
          <TrendingItem />
        </div>
      </div>
    </div>
  );
}

export default TrendingSlider;
