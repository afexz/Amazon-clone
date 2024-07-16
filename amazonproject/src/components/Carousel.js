import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./image/data";

// const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];


function CarouselImage() {
   return (
     <div>
       <Carousel
         autoplay={true}
         infiniteLoop={true}
         showIndicators={false}
         showThumbs={false}
       >
         {img.map((imageItem, index) => {
           return (
             <img key={index} src={imageItem} alt={`carousel-item-${index}`} />
           );
         })}
       </Carousel>
       <div className="hero"></div>
     </div>
   );
}

export default CarouselImage;
