import React, { Component } from "react";
import Slider from "react-slick";
import "../carousel/styles/Carousel.css";
import ASEAN_1 from "../carousel/images/ASEAN_1.jpg";
import ASEAN_2 from "../carousel/images/ASEAN_2.jpg";
import SIB_1 from "../carousel/images/SIB_1.jpg";
import SIB_2 from "../carousel/images/SIB_2.jpg";
import TLTS_1 from "../carousel/images/TLTS_1.jpg"
import TLTS_2 from "../carousel/images/TLTS_2.JPG"

export default class Carousel extends Component {

    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    // const photos = [
    //   { id: 1, src: "ASEAN_1.jpg" },
    //   { id: 2, src: "ASEAN_2.jpg" },
    //   { id: 3, src: "ASEAN_3.jpg" },
    // ];

    // return (
    //   <div>
    //     <Slider {...settings}>
    //       {photos.map(photo => (
    //         <div key={photo.id}>
    //           <img src={photo.src} alt={`Photo ${photo.id}`} />
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // );

    return (
      <div>
        <Slider {...settings}>
          <div className="image-slide">
            <img src={ASEAN_1} alt="USR1" style={{ maxWidth: "550px", maxHeight: "auto" }} />
          </div>
          <div className="image-slide">
            <img src={ASEAN_2} alt="USR2" style={{ maxWidth: "550px", maxHeight: "auto" }} />
          </div>
          <div className="image-slide">
            <img src={SIB_1} alt="USR3" style={{ maxWidth: "550px", maxHeight: "auto" }} /> 
          </div>
          <div className="image-slide">
          <img src={SIB_2} alt="USR4" style={{ maxWidth: "550px", maxHeight: "auto" }} />
          </div>
          <div className="image-slide">
            <img src={TLTS_1} alt="USR5" style={{ maxWidth: "550px", maxHeight: "auto" }} />
          </div>
          <div className="image-slide">
            <img src={TLTS_2} alt="USR6" style={{ maxWidth: "550px", maxHeight: "auto" }} />
          </div>
        </Slider>
      </div>


    );
  }
}