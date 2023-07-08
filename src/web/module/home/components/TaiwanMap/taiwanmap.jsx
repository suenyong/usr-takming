import React, { useState } from "react";
import "./styles/taiwanese.css";
import taiwan from "./images/台灣拚完.png"; //台灣圖
import Philippinessold from "./images/菲律賓線.png"; //菲律賓圖
import Philippines from "./images/Philippines.png"; //菲律賓
import Taichung from "./images/Taichung.png"; // 台中
import Keelung from "./images/Keelung.png"; // 基隆
import Taitung from "./images/Taitung.png"; //台東
import Tainan from "./images/Tainan.png"; //台南
import Yilan from "./images/Yilan.png"; //宜蘭
import Hualien from "./images/Hualien.png"; //花蓮
import Nantou from "./images/Nantou.png"; //南投
import Pingtung from "./images/Pingtung.png"; //屏東
import Kaohsiung from "./images/Kaohsiung.png"; //高雄
import chiayi_city from "./images/chiayi city.png"; //嘉義市
import Chiayi_County from "./images/Chiayi_County.png"; //嘉義縣
import Changhua from "./images/Changhua.png"; // 彰化
import Yunlin from "./images/Yunlin.png"; //雲林
import Miaoli from "./images/Miaoli.png"; //苗栗
import Hsinchu_City from "./images/Hsinchu_City.png"; //新竹市
import Hsinchu_County from "./images/Hsinchu_County.png"; //新竹縣
import Taoyuan from "./images/Taoyuan.png"; //桃園
import New_Taipei from "./images/New_Taipei.png"; //新北
import taipei from "./images/taipei.png"; //台北
import service_activities from "./images/活動背景.png"; //服務活動背景
const TaiwanMap = () => {
  const [imgPath, setImgPath] = useState(taiwan);
  const [isPhilippines, setIsPhilippines] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const handleMouseOver = (newImgPath, tooltipText) => {
    setImgPath(newImgPath);
    setShowTooltip(true);
    setTooltipText(tooltipText);
  };

  const handleMouseOut = () => {
    setImgPath(taiwan);
    setShowTooltip(false);
    setTooltipText("");
  };

  const handlePhilippinesOver = () => {
    setIsPhilippines(true);
  };

  const handlePhilippinesOut = () => {
    setIsPhilippines(false);
  };

  return (
    <>
      <div className="hr-line"></div>
      <h1 className="map-title">服務足跡</h1>
      <div className="taiwan-map">
        <img src={imgPath} alt="123" style={{ width: "20%" }} />
        <button
          onMouseOver={() => handleMouseOver(Taichung, "地點：台中")}
          onMouseOut={handleMouseOut}
          className="Taichung-button"
        >
          台中
        </button>

        <button
          onMouseOver={() => handleMouseOver(Keelung, "地點：基隆")}
          onMouseOut={handleMouseOut}
          className="Keelung-button"
        >
          基隆
        </button>

        <button
          onMouseOver={() => handleMouseOver(Taitung, "地點：台東")}
          onMouseOut={handleMouseOut}
          className="Taitung-button"
        >
          台東
        </button>

        <button
          onMouseOver={() => handleMouseOver(Tainan, "地點：台南")}
          onMouseOut={handleMouseOut}
          className="Tainan-button"
        >
          台南
        </button>

        <button
          onMouseOver={() => handleMouseOver(Yilan, "地點：宜蘭")}
          onMouseOut={handleMouseOut}
          className="Yilan-button"
        >
          宜蘭
        </button>

        <button
          onMouseOver={() => handleMouseOver(Hualien, "地點：花蓮")}
          onMouseOut={handleMouseOut}
          className="Hualien-button"
        >
          花蓮
        </button>

        <button
          onMouseOver={() => handleMouseOver(Nantou, "地點：南投")}
          onMouseOut={handleMouseOut}
          className="Nantou-button"
        >
          南投
        </button>

        <button
          onMouseOver={() => handleMouseOver(Pingtung, "地點：屏東")}
          onMouseOut={handleMouseOut}
          className="Pingtung-button"
        >
          屏東
        </button>

        <button
          onMouseOver={() => handleMouseOver(Kaohsiung, "地點：高雄")}
          onMouseOut={handleMouseOut}
          className="Kaohsiung-button"
        >
          高雄
        </button>

        <button
          onMouseOver={() => handleMouseOver(chiayi_city, "地點：嘉義市")}
          onMouseOut={handleMouseOut}
          className="chiayi_city-button"
        >
          嘉義市
        </button>

        <button
          onMouseOver={() => handleMouseOver(Chiayi_County, "地點：嘉義縣")}
          onMouseOut={handleMouseOut}
          className="Chiayi_County-button"
        >
          嘉義縣
        </button>

        <button
          onMouseOver={() => handleMouseOver(Changhua, "地點：彰化")}
          onMouseOut={handleMouseOut}
          className="Changhua-button"
        >
          彰化
        </button>

        <button
          onMouseOver={() => handleMouseOver(Yunlin, "地點：雲林")}
          onMouseOut={handleMouseOut}
          className="Yunlin-button"
        >
          雲林
        </button>

        <button
          onMouseOver={() => handleMouseOver(Miaoli, "地點：苗栗")}
          onMouseOut={handleMouseOut}
          className="Miaoli-button"
        >
          苗栗
        </button>

        <button
          onMouseOver={() => handleMouseOver(Hsinchu_City, "地點：新竹市")}
          onMouseOut={handleMouseOut}
          className="Hsinchu_City-button"
        >
          新竹市
        </button>

        <button
          onMouseOver={() => handleMouseOver(Hsinchu_County, "地點：新竹縣")}
          onMouseOut={handleMouseOut}
          className="Hsinchu_County-button"
        >
          新竹縣
        </button>

        <button
          onMouseOver={() => handleMouseOver(Taoyuan, "地點：桃園")}
          onMouseOut={handleMouseOut}
          className="Taoyuan-button"
        >
          桃園
        </button>

        <button
          onMouseOver={() => handleMouseOver(New_Taipei, "地點：新北")}
          onMouseOut={handleMouseOut}
          className="New_Taipei-button"
        >
          新北
        </button>

        <button
          onMouseOver={() => handleMouseOver(taipei, "地點：台北")}
          onMouseOut={handleMouseOut}
          className="taipei-button"
        >
          台北
        </button>

        <div className="Philippines-image">
          {isPhilippines ? (
            <img src={Philippines} alt="Philippines" style={{ width: "20%" }} />
          ) : (
            <img
              src={Philippinessold}
              alt="Philippines"
              style={{ width: "20%" }}
            />
          )}
          <button
            onMouseOver={handlePhilippinesOver}
            onMouseOut={handlePhilippinesOut}
            className="Philippines-button"
          >
            菲律賓
          </button>
        </div>
        {showTooltip && (
          <div
            className="tooltip"
            style={{
              backgroundImage: `url(${service_activities})`,
              width: "30%",
              height: "58%",
              top: "54%",
              right: "45%",
              position: "absolute", 
            }}
          >
            {tooltipText}
          </div>
        )}
      </div>
    </>
  );
};

export default TaiwanMap;
