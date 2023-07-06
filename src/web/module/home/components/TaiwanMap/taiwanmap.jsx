import "./styles/taiwanese.css";
import React, { useState } from "react";
import taiwan from "./images/taiwan.png";

const TaiwanMap = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div style={{ textAlign: "right" }}>
      <div className="hr-line"></div>
      <h1 style={{ textAlign: 'center', color: 'navy' }}>服務足跡</h1>
      {/* 台灣地圖圖片 */}
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <img
          src={taiwan}
          alt="台灣地圖"
          style={{ width: "50%", position: "relative", right: "0" }}
        />
      </div>

      {/* 縣市按鈕 */}
      <button
        onClick={() => handleButtonClick(1)}
        style={{ position: "absolute", top: "100px", left: "200px" }}
      >
        縣市按鈕1
      </button>
      <button
        onClick={() => handleButtonClick(2)}
        style={{ position: "absolute", top: "200px", left: "300px" }}
      >
        縣市按鈕2
      </button>
      {/* 其他縣市按鈕 */}

      {/* 根據選中的按鈕顯示照片 */}
      {selectedButton === 1 && <img src="photo1.jpg" alt="縣市按鈕1的照片" />}
      {selectedButton === 2 && <img src="photo2.jpg" alt="縣市按鈕2的照片" />}
      {/* 其他照片 */}
    </div>
  );
};

export default TaiwanMap;
