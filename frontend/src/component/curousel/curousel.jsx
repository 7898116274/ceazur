import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image from "./image/mainimage.png"



const items = [
      <div className="item" data-value="1"><img src={image} alt="" style={{ height: "350px", width: "100%" }} /></div>,
      <div className="item" data-value="1"><img src={image} alt="" style={{ height: "350px", width: "100%" }} /></div>,


];

const MainCarousel = () => (
      <AliceCarousel
            items={items}
            disableButtonsControls
            disableDotsControls
            autoPlay
            autoPlayInterval={5000}
            infinite
      />
);

export default MainCarousel;