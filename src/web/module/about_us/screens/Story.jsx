import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import US_image_1 from "../images/US_image_1.png";
import US_image_2 from "../images/US_image_2.png";
import US_image_3 from "../images/US_image_3.png";
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
            <div class="title_title">精彩報導</div>
            <div >
                <Slider ref={sliderRef} {...settings}>
                    <div>
                        <img src={US_image_1} alt="US1" style={{ maxWidth: "550px", maxHeight: "auto" }} />
                    </div>
                    <div>
                        <img src={US_image_2} alt="US2" style={{ maxWidth: "550px", maxHeight: "auto" }} />
                    </div>
                    <div>
                        <img src={US_image_3} alt="US3" style={{ maxWidth: "550px", maxHeight: "auto" }} />
                    </div>
                </Slider>
            </div>
            <div className="boxS">這裡將會有一些敘述</div>
            <div className="text">相關影片</div>
            <div className="box4video">
                尚無資料
            </div>
            <Contact />
        </>
    )
}