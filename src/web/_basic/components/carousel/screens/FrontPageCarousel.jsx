import React from "react";
import Slider from "react-slick";
import "../styles/Carousel.css";
import { settings } from "../../settings/setting_frontpage";


export default function FronPageCarousel(){

    const photos = [
        { id: 1, src: require("../images/FrongPage_1.png") },
        { id: 2, src: require("../images/FrongPage_2.png") },
        { id: 3, src: require("../images/FrongPage_4.png") },
       
      ];

    return (
      <div className="hr_mg">
        <Slider {...settings}>
          {photos.map(photo => (
            <div key={photo.id} className="image-slide">
              <img src={photo.src} alt={`Photo_${photo.id}`} />
            </div>
          ))}
        </Slider>
      </div>
    );

}