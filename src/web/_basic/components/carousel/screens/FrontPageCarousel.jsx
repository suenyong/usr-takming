import React from "react";
import Slider from "react-slick";
import "../styles/FrontpageCarousel.css";
import { settings } from "../../settings/setting_frontpage";


export default function FronPageCarousel(){

    const photos = [
        { id: 1, src: require("../images/FrongPage_2.png") },
        { id: 2, src: require("../images/FrongPage_5.png") },
        { id: 3, src: require("../images/FrongPage_4.png") },
        { id: 4, src: require("../images/GMM.jpg") },
        { id: 5, src: require("../images/GD.jpg") },
      ];

    return (
      <div className="hr_mg">
        <Slider {...settings}>
          {photos.map(photo => (
            <div key={photo.id} className="image-slide-Frontpage">
              <img src={photo.src} alt={`Photo_${photo.id}`} />
            </div>
          ))}
        </Slider>
      </div>
    );

}