import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { CarouselApi } from "../../../Protocol/CarouselApi";
import Protocol from "../../../Protocol/Protocol";
import { settings } from "../../settings/setting_frontpage";
import "../styles/FrontpageCarousel.css";

export default function FrontPageCarousel() {
  const [CData, setCData] = useState([]);

  useEffect(() => {
    const fetchCData = async () => {
      try {
        const data = await CarouselApi.getAllCarousel();
        if (Array.isArray(data)) {
          const sortedData = data.sort((a, b) => b.id - a.id);
          setCData(sortedData);
          console.log("輪播圖所有資料:", sortedData);
        } else {
          console.error("取得輪播圖data失敗");
        }
      } catch (error) {
        console.error("取得所有輪播圖失敗", error);
      }
    };
  
    fetchCData();
  }, []);
  
  // const photos = [
  //   { id: 1, src: require("../images/0717、0807金面山走讀活動_海報.png") },
  //   { id: 2, src: require("../images/1713168456853.jpg") },
  //   { id: 3, src: require("../images/frontpageimage1.jpg") },
  //   { id: 4, src: require("../images/frontpageimage2.jpg") },
  //   { id: 5, src: require("../images/FrongPage_4.png") },
  //   { id: 6, src: require("../images/GMM.jpg") },
  //   { id: 7, src: require("../images/GD.jpg") },
  // ];



  return (
    <div className="hr_mg">
      <Slider {...settings}>
      {CData.map((photo) => {
        return (
          <div key={photo.id} className="image-slide-Frontpage">
            <img src={`${Protocol.API_URL}/carousel/image/${photo.image}`} alt={`Photo_${photo.imageName}`} />
          </div>
        );
      })}
      </Slider>
    </div>
  );
}
