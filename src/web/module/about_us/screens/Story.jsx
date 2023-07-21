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
        <div className="back-to-home">
    <a href="/" style={{ textDecoration: "none", color: "inherit" }}>回首頁/精彩報導</a>
    </div>
        <h1
        style={{
        textAlign: "center",
        fontSize: "40px",
        fontFamily: "Arial, sans-serif",
        color:"#336666"
        }}>
        精彩報導
        </h1>
            
            <div className="centered-container">
                <div className="boxS">
                樂活碳點影片介紹:<br/>
                <a href="https://www.youtube.com/watch?v=W_JwvYAAdcA&t=1s" target="_blank" >https://www.youtube.com/watch?v=W_JwvYAAdcA&t=1s</a>
                </div>
            </div>
            <Contact />
        </>
    )
}