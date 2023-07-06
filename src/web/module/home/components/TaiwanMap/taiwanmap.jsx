// TaiwanMap.jsx

import React, { useState } from "react";
import taiwan from "./images/taiwan.png";
import taipei from "./images/taipei.png";
import "./styles/taiwanese.css";

const TaiwanMap = () => {
  const [showTaipei, setShowTaipei] = useState(false);

  const handleButtonClick = () => {
    setShowTaipei(true);
  };

  return (
    <div className="taiwan-map">
      <div className="hr-line"></div>
      <h1 className="map-title">服務足跡</h1>

      <div className="map-container">
        {/* 台灣地圖圖片 */}
        {!showTaipei && <img src={taiwan} alt="台灣地圖" className="map-image" />}

        {/* 縣市按鈕 */}
        {!showTaipei && (
          <button onClick={handleButtonClick} className="city-button">
            台北
          </button>
        )}
        {/* 其他縣市按鈕 */}
      </div>

      {/* 根據選中的按鈕顯示照片 */}
      {showTaipei && (
        <div className="map-container">
          <img src={taipei} alt="台北照片" className="map-image" />
        </div>
      )}
    </div>
  );
};

export default TaiwanMap;
