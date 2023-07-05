import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Story.css";
import Contact from "../../home/components/contactus/Contact";



export default function Story() {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <>
        <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "Arial, sans-serif",
        }}>
        精彩報導
        </h1>
            
            {/* <div className="boxS">這裡將會有一些敘述</div> */}
            <div className="centered-container">
                <div className="box4video">
                    尚無資料
                </div>
            </div>
            <Contact />
        </>
    )
}