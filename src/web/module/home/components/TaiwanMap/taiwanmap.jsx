import React, { useState } from "react";
import "./styles/taiwanese.css";
import taiwan from "./images/台灣拚完.png";
import Taichung from "./images/Taichung.png"; // 台中
import Keelung from "./images/Keelung.png"; // 基隆
import Philippines from "./images/Philippines.png";//菲律賓
import Taitung from "./images/Taitung.png";//台東

const TaiwanMap = () => {
  const [imgPath, setImgPath] = useState(taiwan);

  const handleMouseOver = (newImgPath) => {
    setImgPath(newImgPath);
  };

  const handleMouseOut = () => {
    setImgPath(taiwan);
  };

  return (
    <>
      <div className="hr-line"></div>
      <h1 className="map-title">服務足跡</h1>
      <div className="taiwan-map">
        <img src={imgPath} alt="123" style={{ width: "25%" }} />
        <button
          onMouseOver={() => handleMouseOver(Taichung)}
          onMouseOut={handleMouseOut}
          className="Taichung-button"
        >
          台中
        </button>

        <button
          onMouseOver={() => handleMouseOver(Keelung)}
          onMouseOut={handleMouseOut}
          className="Keelung-button"
        >
          基隆
        </button>

        <button
          onMouseOver={() => handleMouseOver(Philippines)}
          onMouseOut={handleMouseOut}
          className="Philippines-button"
        >
          菲律賓
        </button>

        <button
          onMouseOver={() => handleMouseOver(Taitung)}
          onMouseOut={handleMouseOut}
          className="Taitung-button"
        >
          台東
        </button>

        <img src={Philippines} alt="Philippines" className="Philippines-image" />
      </div>
    </>
  );
};

export default TaiwanMap;
