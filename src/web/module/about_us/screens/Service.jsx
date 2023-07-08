import "../styles/Service.css";
import React from "react";
import tw from "../images/台灣拚完.png";

export default function Service() {
  return (
    <div className="service-container">
      <h1 className="service-title">服務據點</h1>
      <div className="service-content">
      <div className="service-text">
          <h1 className="service-heading">國內</h1>
          <div className="button-container">
            <button className="service-button">台北</button>
            <button className="service-button">新北</button>
            <button className="service-button">基隆</button>
            <button className="service-button">桃園</button>
            <button className="service-button">全部</button>
          </div>
        </div>
        <img src={tw} alt="台灣拚完圖片" className="service-image" />
      </div>
    </div>
  );
}
