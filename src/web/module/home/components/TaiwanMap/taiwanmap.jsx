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
import sever from "./images/活動背景1.png";
import Taichung1 from "./images/台中.JPG";
import sever1 from "./images/圖片1 (1).png";

const TaiwanMap = () => {
  const defaultContent = "請點選旁邊縣市選擇地點！";
  const defaultImage = sever1;

  const [isDefault, setIsDefault] = useState(true);
  const [imgPath, setImgPath] = useState(taiwan);
  const [isPhilippines, setIsPhilippines] = useState(false);
  const [selectedContent, setSelectedContent] = useState(defaultContent);
  const [selectedImg, setSelectedImg] = useState(defaultImage);

  const handleClick = (newContent, newImg) => {
    setSelectedContent(newContent);
    setSelectedImg(newImg);
    setIsDefault(false);
  };

  const handleMouseOver = (newImgPath) => {
    setImgPath(newImgPath);
  };

  const handleMouseOut = () => {
    setImgPath(taiwan);
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
          onMouseOver={() => handleMouseOver(Taichung)}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick("地點：台中", Taichung1)}
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
          onMouseOver={() => handleMouseOver(Taitung)}
          onMouseOut={handleMouseOut}
          className="Taitung-button"
        >
          台東
        </button>

        <button
          onMouseOver={() => handleMouseOver(Tainan)}
          onMouseOut={handleMouseOut}
          className="Tainan-button"
        >
          台南
        </button>

        <button
          onMouseOver={() => handleMouseOver(Yilan)}
          onMouseOut={handleMouseOut}
          className="Yilan-button"
        >
          宜蘭
        </button>

        <button
          onMouseOver={() => handleMouseOver(Hualien)}
          onMouseOut={handleMouseOut}
          className="Hualien-button"
        >
          花蓮
        </button>

        <button
          onMouseOver={() => handleMouseOver(Nantou)}
          onMouseOut={handleMouseOut}
          className="Nantou-button"
        >
          南投
        </button>

        <button
          onMouseOver={() => handleMouseOver(Pingtung)}
          onMouseOut={handleMouseOut}
          className="Pingtung-button"
        >
          屏東
        </button>

        <button
          onMouseOver={() => handleMouseOver(Kaohsiung)}
          onMouseOut={handleMouseOut}
          className="Kaohsiung-button"
        >
          高雄
        </button>

        <button
          onMouseOver={() => handleMouseOver(chiayi_city)}
          onMouseOut={handleMouseOut}
          className="chiayi_city-button"
        >
          嘉義市
        </button>

        <button
          onMouseOver={() => handleMouseOver(Chiayi_County)}
          onMouseOut={handleMouseOut}
          className="Chiayi_County-button"
        >
          嘉義縣
        </button>

        <button
          onMouseOver={() => handleMouseOver(Changhua)}
          onMouseOut={handleMouseOut}
          className="Changhua-button"
        >
          彰化
        </button>

        <button
          onMouseOver={() => handleMouseOver(Yunlin)}
          onMouseOut={handleMouseOut}
          className="Yunlin-button"
        >
          雲林
        </button>

        <button
          onMouseOver={() => handleMouseOver(Miaoli)}
          onMouseOut={handleMouseOut}
          className="Miaoli-button"
        >
          苗栗
        </button>

        <button
          onMouseOver={() => handleMouseOver(Hsinchu_City)}
          onMouseOut={handleMouseOut}
          className="Hsinchu_City-button"
        >
          新竹市
        </button>

        <button
          onMouseOver={() => handleMouseOver(Hsinchu_County)}
          onMouseOut={handleMouseOut}
          className="Hsinchu_County-button"
        >
          新竹縣
        </button>

        <button
          onMouseOver={() => handleMouseOver(Taoyuan)}
          onMouseOut={handleMouseOut}
          className="Taoyuan-button"
        >
          桃園
        </button>

        <button
          onMouseOver={() => handleMouseOver(New_Taipei)}
          onMouseOut={handleMouseOut}
          className="New_Taipei-button"
        >
          新北
        </button>

        <button
          onMouseOver={() => handleMouseOver(taipei)}
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
        <div
          className="content-box"
          style={{
            backgroundImage: `url(${sever})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "54%",
            height: "79.8%",
            paddingTop: "80px",
            display: "flex", // 變為flex box
            flexDirection: "column", // 排列方向為由上到下
            justifyContent: "flex-start", // 子元素從開始的地方排列
            alignItems: "flex-start", // 子元素由左邊開始排列
            position: "absolute",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: "28px",
              zIndex: 1,
              width: "100%",
              textAlign: "left",
              marginLeft: "250px",
              position: "absolute",
            }}
          >
            {selectedContent}
          </div>
          {selectedImg && (
            <img
              src={selectedImg}
              alt="Selected"
              style={{
                width: "60%",
                height: "auto",
                marginTop: "70px",
                position: "absolute", //讓圖片能在content box裡自由定位
                top: "10%", //讓圖片在最頂部
                right: "10%",
              }}
            />
          )}
        </div>
        {!isDefault && (
          <button
            style={{
              position: "absolute",
              bottom: "10%",
              right: "22%",
              padding: "10px 20px",
              fontSize: "18px",
              borderRadius: "5px",
              border: "none",
              color: "white",
              backgroundColor: "black",
              cursor: "pointer",
            }}
            onClick={() => {
              alert("閱讀更多！");
            }}
          >
            閱讀更多
          </button>
        )}
      </div>
    </>
  );
};

export default TaiwanMap;
