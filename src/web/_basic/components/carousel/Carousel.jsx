import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../carousel/styles/Carousel.css";
import { settings } from "../settings/settings_universal_carousel";

// 要匯入其他照片請用他<Carousel photos={photos}>

export default function Carousel(props){
  const [photos, setPhopos] = useState(
    [
      { id: 1, src: require("../carousel/images/ASEAN_1.jpg") },
      { id: 2, src: require("../carousel/images/ASEAN_2.jpg") },
      { id: 3, src: require("../carousel/images/SIB_1.jpg") },
      { id: 4, src: require("../carousel/images/SIB_2.jpg") },
      { id: 5, src: require("../carousel/images/TLTS_1.jpg") },
      { id: 6, src: require("../carousel/images/TLTS_2.JPG") },
    ]
  )
   
  useEffect(() => {
    if (props.photos) {
     setPhopos(props.photos)
    }
  }, [])

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