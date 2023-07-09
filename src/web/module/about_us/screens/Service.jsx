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
          <h1 className="service-heading">國內</h1>
          <div className="button-container">
            <button className="service-button">越南</button>
            <button className="service-button">菲律賓</button>
          </div>
          <h1 className="service-heading">服務類型</h1>
            <div className="button-row">
              <button className="service-button">國際關懷</button>
              <button className="service-button">環保標題</button>
              <button className="service-button">偏鄉服務</button>
            </div>
            <div className="button-row">
              <button className="service-button">社區服務</button>
              <button className="service-button">科技服務</button>
              <button className="service-button">地方創生</button>
            </div>
            <div className="button-row">
              <button className="service-button">教育輔導</button>
              <button className="service-button">創意設計</button>
            </div>
        </div>
      <img src={tw} alt="台灣拚完圖片" className="service-image" />
      </div>
    </div>
  );
}
