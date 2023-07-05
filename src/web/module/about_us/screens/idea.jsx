//這邊是USR 的理念
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Eventphotos1 from "./Eventphotos1.jpg";
// import Eventphotos2 from "./Eventphotos2.jpg";
// import Eventphotos3 from "./Eventphotos3.jpg";
// import Eventphotos4 from "./Eventphotos4.jpg";
// import Eventphotos5 from "./Eventphotos5.jpg";
//以上註解套件是要用輪播圖
export default function Idea() {
  // const sliderRef = useRef(null);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 400,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   swipeToSlide: true,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  // };

  return (
    <>
        <h1>USR的理念</h1>
      {/* 以下是要用輪播圖程式 */}
      {/* <div style={{ maxWidth: "550px", margin: "0 auto" }}>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src={Eventphotos1} alt="US1" style={{ maxWidth: "100%" }} />
          </div>
          <div>
            <img src={Eventphotos2} alt="US2" style={{ maxWidth: "100%" }} />
          </div>
          <div>
            <img src={Eventphotos3} alt="US3" style={{ maxWidth: "100%" }} />
          </div>
          <div>
            <img src={Eventphotos4} alt="US4" style={{ maxWidth: "100%" }} />
          </div>
          <div>
            <img src={Eventphotos5} alt="US5" style={{ maxWidth: "100%" }} />
          </div>
        </Slider>
      </div> */}

      <div style={{ margin: "100px auto", maxWidth: "1000px", textAlign: "justify" }}>
        <h3>
          USR是「University Social Responsibility（大學社會責任）」的簡稱。因為大學扮演著培育人才、研究學術、提升文化等重要角色，同時也肩負著服務社會、促進國家發展的使命。如何發揮大學的社會責任，讓知識與價值能夠更直接地回饋在地，大學在社會中扮演著重要角色，而大學社會責任也就成了大學面對社會期待的重要責任之一，積極參與社會發展，透過大學的知識、技術與資源幫助在地社會解決問題，培養出更具有社會責任感的人才，USR的目標讓大學更加關注在地議題，提供專業的知識與技術，對於區域發展能有更多貢獻。透過USR，大學將與當地社會、產業合作，共同發掘問題、設計解決方案，研究成果能夠直接回饋社會，進而促進區域發展。
        </h3>
      </div>
    </>
  );
}