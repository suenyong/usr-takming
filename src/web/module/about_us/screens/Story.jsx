import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Story.css";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';



export default function Story() {
    useEffect(() => {
        AOS.init({
            duration: 700,
        });
    }, [])


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
            <h1 data-aos="zoom-out-down" style={{
                textAlign: 'center',
                color: '#fff',
                backgroundColor: "#90cbc0",
                width: "40%",
                marginRight: "30%",
                marginLeft: "30%",
                marginTop: "13%",
            }}>
                精彩報導
            </h1>

            <div className="centered-container">
                <div className="boxS">
                    樂活碳點影片介紹：<br />
                    <a href="https://www.youtube.com/watch?v=W_JwvYAAdcA&t=1s" target="_blank" >https://www.youtube.com/watch?v=W_JwvYAAdcA&t=1s</a>
                </div>
            </div>

            {/* ====按鈕==== */}
            <a href="http://localhost:3000/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>


            <Contact />
        </>
    )
}