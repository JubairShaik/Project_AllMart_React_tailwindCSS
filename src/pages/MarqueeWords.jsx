import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeWords = () => {
  return (
    <div className="  my-4 z-10 w-full">
      <Marquee
        direction="left"
        gradient={false}
        speed={130}
        scrollEventThrottle={200} // Adjust the throttle value for desired scrolling speed
      >
        <span className="w-full capitalize font-space font-bold text-[1.4rem] sm:text-[4rem]">
        We source our products from local farmers and suppliers whenever possible.
        </span>
      </Marquee>
    </div>
  );
}

export default MarqueeWords ;
