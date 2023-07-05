import React, { Component } from "react";
import Slider from "react-slick";
import "../carousel/styles/Carousel.css";
import ASEAN_1 from "../carousel/images/ASEAN_1.jpg";
import ASEAN_2 from "../carousel/images/ASEAN_2.jpg";
import SIB_1 from "../carousel/images/SIB_1.jpg";
import SIB_2 from "../carousel/images/SIB_2.jpg";
import TLTS_1 from "../carousel/images/TLTS_1.jpg"
import TLTS_2 from "../carousel/images/TLTS_2.JPG"
import { settings } from "../settings/settings";


export default class Carousel extends Component {

    render() {
    //   const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     dots: true,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear",
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    // };

    const photos = [
      { id: 1, src: require("../carousel/images/ASEAN_1.jpg") },
      { id: 2, src: require("../carousel/images/ASEAN_2.jpg") },
      { id: 3, src: require("../carousel/images/SIB_1.jpg") },
      { id: 4, src: require("../carousel/images/SIB_2.jpg") },
      { id: 5, src: require("../carousel/images/TLTS_1.jpg") },
      { id: 6, src: require("../carousel/images/TLTS_2.JPG") },
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

    // return (
    //   <div className="hr_mg">
    //     <Slider {...settings}>
    //       <div className="image-slide">
    //         <img src={ASEAN_1} alt="USR1" style={{ maxWidth: "550px", maxHeight: "auto" }} />
    //       </div>
    //       <div className="image-slide">
    //         <img src={ASEAN_2} alt="USR2" style={{ maxWidth: "550px", maxHeight: "auto" }} />
    //       </div>
    //       <div className="image-slide">
    //         <img src={SIB_1} alt="USR3" style={{ maxWidth: "550px", maxHeight: "auto" }} /> 
    //       </div>
    //       <div className="image-slide">
    //       <img src={SIB_2} alt="USR4" style={{ maxWidth: "550px", maxHeight: "auto" }} />
    //       </div>
    //       <div className="image-slide">
    //         <img src={TLTS_1} alt="USR5" style={{ maxWidth: "550px", maxHeight: "auto" }} />
    //       </div>
    //       <div className="image-slide">
    //         <img src={TLTS_2} alt="USR6" style={{ maxWidth: "550px", maxHeight: "auto" }} />
    //       </div>
    //     </Slider>
    //   </div>


    // );
  }
}