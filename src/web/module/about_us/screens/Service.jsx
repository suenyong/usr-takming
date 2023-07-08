import "../styles/Service.css";
import React from "react";
import tw from "../images/台灣拚完.png";

export default function Service() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        服務據點
      </h1>
      <div className="service-container">
        <img src={tw} alt="台灣拚完圖片" />
        <div>
          <h1>國內</h1>
          <div class="dot-buttons">
            <button className="dot-button"><span>台北</span></button>
            <button className="dot-button"><span>新北</span></button>
            <button className="dot-button"><span>基隆</span></button>
            <button className="dot-button"><span>桃園</span></button>
            <button className="dot-button"><span>全部</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
