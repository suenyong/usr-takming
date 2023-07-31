import "../styles/Service.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Menu, MenuItem } from "@mui/material";
import Contact from "../../home/components/contactus/Contact";
import { Link } from "react-router-dom";

export default function Service() {
  const cardData = [
    {
      imgSrc: require("../images/LOVE_HOPE.jpg"),
      title: "愛與希望 - 菲你不可",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/548951769.pdf",
    },
    {
      imgSrc: require("../images/Homeless.jpg"),
      title: "「2020 歡樂聖誕~街友服務",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/428844962.pdf",
    },
    {
      imgSrc: require("../images/BinBin.jpg"),
      title: "「來去德明彬彬ㄅ一ㄤˋㄅ一ㄤˋ」生態 暨社團教學活動",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/186449923.pdf",
    },
    {
      imgSrc: require("../images/StoneLake109.jpg"),
      title: "109 年白石湖生態營」活動",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/144581186.pdf",
    },
    {
      imgSrc: require("../images/WenhuSchool.jpg"),
      title: "109 年度「文湖國小生態教學」活動",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/384592079.pdf",
    },
    {
      imgSrc: require("../images/achievement109.jpg"),
      title: "109-年度大學社會責任實踐基地-忠治「部落.愛轉動」-成果發表會",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/625052883.pd",
    },
    {
      imgSrc: require("../images/Summer109.jpg"),
      title: "109-年度大學社會責任實踐基地-忠治「部落.愛轉動」-暑期夏令營",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/709433889.pdf",
    },
    {
      imgSrc: require("../images/fraternity109.jpg"),
      title: "109-年度第三季博愛慶生會",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/986341926.pdf",
    },
    {
      imgSrc: require("../images/HengshanSchool109.jpg"),
      title: "109-年橫山國小-「暑期-環教、理財、品格、創意夏令營」",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/125978186.pdf",
    },
    {
      imgSrc: require("../images/TA-Q-BIN-2020.jpg"),
      title: "2020-聖誕宅急便",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/636127978.pdf",
    },
    {
      imgSrc: require("../images/Vulnerable14.jpg"),
      title: "弱勢關懷課輔",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/698511545.pdf",
    },
    {
      imgSrc: require("../images/animal.jpg"),
      title: "動物保護志工培訓",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/411489015.pdf",
    },

  ];

  const cardData1 = [
    {
      imgSrc: require("../images/Homeless.jpg"),
      title: "「2020 歡樂聖誕~街友服務",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/428844962.pdf",
    },
    {
      imgSrc: require("../images/BinBin.jpg"),
      title: "「來去德明彬彬ㄅ一ㄤˋㄅ一ㄤˋ」生態 暨社團教學活動",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/186449923.pdf",
    },
    {
      imgSrc: require("../images/StoneLake109.jpg"),
      title: "109 年白石湖生態營」活動",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/144581186.pdf",
    },
    {
      imgSrc: require("../images/WenhuSchool.jpg"),
      title: "109 年度「文湖國小生態教學」活動",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/384592079.pdf",
    },
    {
      imgSrc: require("../images/TA-Q-BIN-2020.jpg"),
      title: "2020-聖誕宅急便",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/636127978.pdf",
    },
    {
      imgSrc: require("../images/Vulnerable14.jpg"),
      title: "弱勢關懷課輔",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/698511545.pdf",
    },
    {
      imgSrc: require("../images/animal.jpg"),
      title: "動物保護志工培訓",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/411489015.pdf",
    },

  ];

  const cardData2 = [
    {
      imgSrc: require("../images/fraternity109.jpg"),
      title: "109-年度第三季博愛慶生會",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/986341926.pdf",
    },

  ];

  const cardData3 = [
    {
      imgSrc: require("../images/achievement109.jpg"),
      title: "109-年度大學社會責任實踐基地-忠治「部落.愛轉動」-成果發表會",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/625052883.pd",
    },
    {
      imgSrc: require("../images/Summer109.jpg"),
      title: "109-年度大學社會責任實踐基地-忠治「部落.愛轉動」-暑期夏令營",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/709433889.pdf",
    },
  ];

  const cardData4 = [
    {
      imgSrc: require("../images/HengshanSchool109.jpg"),
      title: "109-年橫山國小-「暑期-環教、理財、品格、創意夏令營」",
      link:"http://manner.takming.edu.tw/var/file/8/1008/img/14/125978186.pdf",
    },

  ];

  const cardData5 = [
    {
      imgSrc: require("../images/LOVE_HOPE.jpg"),
      title: "愛與希望 - 菲你不可",
      link:"https://manner.takming.edu.tw/var/file/8/1008/img/14/548951769.pdf",
    },

  ];

  const [selectedContent, setSelectedContent] = useState('content1');

  const handleButtonClick = (contentId, link) => {
    if (link) {
      window.open(link, '_blank'); // 在新標籤頁中打開連結
    } else {
      setSelectedContent(contentId); // 執行原本的功能，例如切換顯示的內容
    }
  };


  return (
    <>
      <div className="back-to-home" >
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          回首頁/服務據點/服務足跡
        </a>
      </div>
      <div className="service-container">
        <div className="service-title">服務足跡</div>
        <div className="service-content">
          <div className="service-text">
            <div className="service-heading">國內</div>
            <div className="button_HUB">
              <button
                className="btu_stlyes"
                onClick={() => handleButtonClick("content1")}
              >
                <div className="color_circle1"></div>
                <div className="button_text">台北</div>
              </button>
              <button
                className="btu_stlyes"
                onClick={() => handleButtonClick("content2")}
              >
                <div className="color_circle1"></div>
                <div className="button_text">新北</div>
              </button>
              <button
                className="btu_stlyes"
                onClick={() => handleButtonClick("content3")}
              >
                <div className="color_circle1"></div>
                <div className="button_text">桃園</div>
              </button>
              <button
                className="btu_stlyes"
                onClick={() => handleButtonClick("content4")}
              >
                <div className="color_circle1"></div>
                <div className="button_text">基隆</div>
              </button>
              <button
                className="btu_stlyes"
                onClick={() => handleButtonClick("content5")}
              >
                <div className="color_circle1"></div>
                <div className="button_text">全部</div>
              </button>
            </div>
            {selectedContent === "content1" && (
              <div
                className="p_USRHUB"
                style={{ fontSize: "20px", fontFamily: "Arial, sans-serif" }}
              >
                <p style={{ fontSize: "25px" }}>台北地區</p>
                <div className="button_container">
                  <button
                    className="btu_stlyes"
                    onClick={() => handleButtonClick("content6")}
                  >
                    <div className="color_circle1"></div>
                    <div className="button_text">內湖</div>
                  </button>
                  <button
                    className="btu_stlyes"
                    onClick={() => handleButtonClick("content7")}
                  >
                    <div className="color_circle1"></div>
                    <div className="button_text">中山</div>
                  </button>
                </div>
              </div>
            )}
            {selectedContent === "content2" && (
              <div
                className="p_USRHUB"
                style={{ fontSize: "20px", fontFamily: "Arial, sans-serif" }}
              >
                <p style={{ fontSize: "25px" }}>新北地區</p>
                <div className="button_container">
                  <button
                    className="btu_stlyes"
                    onClick={() => handleButtonClick("content8")}
                  >
                    <div className="color_circle1"></div>
                    <div className="button_text">烏來</div>
                  </button>
                  <button
                    className="btu_stlyes"
                    onClick={() => handleButtonClick("content9")}
                  >
                    <div className="color_circle1"></div>
                    <div className="button_text">三芝</div>
                  </button>
                </div>
              </div>
            )}
            {selectedContent === "content5" && (
              <div
                className="p_USRHUB"
                style={{ fontSize: "20px", fontFamily: "Arial, sans-serif" }}
              >
                <p style={{ fontSize: "25px" }}>全部地區</p>
                <div className="button_container">
                  <button
                    className="btu_stlyes"
                    onClick={() => handleButtonClick("content6")}
                  >
                    <div className="color_circle1"></div>
                    <div className="button_text">內湖</div>
                  </button>
                  <button
                    className="btu_stlyes"
                    onClick={() => handleButtonClick("content7")}
                  >
                    <div className="color_circle1"></div>
                    <div className="button_text">中山</div>
                  </button>
                  <button
                    className="btu_stlyes"
                    onClick={() => handleButtonClick("content8")}
                  >
                    <div className="color_circle1"></div>
                    <div className="button_text">烏來</div>
                  </button>
                  <button
                    className="btu_stlyes"
                    onClick={() => handleButtonClick("content9")}
                  >
                    <div className="color_circle1"></div>
                    <div className="button_text">三芝</div>
                  </button>
                </div>
              </div>
            )}
            {selectedContent === "content6" && (
              <div>
                <p
                  style={{
                    fontSize: "30px",
                    textAlign: "left",
                    marginLeft: "50px",
                  }}
                >
                  服務足跡
                </p>
                <div className="boxB">
                {cardData1.map((card, index) => (
                  <div key={index} class="cardB">
                    <div className="card-body1">
                      <div className="card-title1">{card.title}</div>
                      <button className="btn-Link1" onClick={() => handleButtonClick(card.contentId, card.link)} >Open PDF</button>
                    </div>
                    <img src={card.imgSrc} />
                  </div>
                ))}
              </div>
              </div>
            )}
            {selectedContent === "content7" && (
              <div>
                <p
                  style={{
                    fontSize: "30px",
                    textAlign: "left",
                    marginLeft: "50px",
                  }}
                >
                  服務足跡
                </p>
                <div className="boxB">
                {cardData2.map((card, index) => (
                  <div key={index} class="cardB">
                    <div className="card-body1">
                      <div className="card-title1">{card.title}</div>
                      <button className="btn-Link1" onClick={() => handleButtonClick(card.contentId, card.link)} >Open PDF</button>
                    </div>
                    <img src={card.imgSrc} />
                  </div>
                ))}
              </div>
              </div>
            )}

            {selectedContent === "content8" && (
              <div>
                <p
                  style={{
                    fontSize: "30px",
                    textAlign: "left",
                    marginLeft: "50px",
                  }}
                >
                  服務足跡
                </p>
                <div className="boxB">
                {cardData3.map((card, index) => (
                  <div key={index} class="cardB">
                    <div className="card-body1">
                      <div className="card-title1">{card.title}</div>
                      <button className="btn-Link1" onClick={() => handleButtonClick(card.contentId, card.link)} >Open PDF</button>
                    </div>
                    <img src={card.imgSrc} />
                  </div>
                ))}
              </div>
              </div>
            )}

            {selectedContent === "content9" && (
              <div>
                <p
                  style={{
                    fontSize: "30px",
                    textAlign: "left",
                    marginLeft: "50px",
                  }}
                >
                  服務足跡
                </p>
                <div className="boxB">
                {cardData4.map((card, index) => (
                  <div key={index} class="cardB">
                    <div className="card-body1">
                      <div className="card-title1">{card.title}</div>
                      <button className="btn-Link1" onClick={() => handleButtonClick(card.contentId, card.link)} >Open PDF</button>
                    </div>
                    <img src={card.imgSrc} />
                  </div>
                ))}
              </div>
              </div>
            )}

            <div className="service-heading">國外</div>
            <div className="button_HUB">
              <button
                className="btu_stlyes"
                onClick={() => handleButtonClick("content10")}
              >
                <div className="color_circle1"></div>
                <div className="button_text">越南</div>
              </button>
              <button
                className="btu_stlyes"
                onClick={() => handleButtonClick("content11")}
              >
                <div className="color_circle1"></div>
                <div className="button_text">菲律賓</div>
              </button>
            </div>

            {selectedContent === "content11" && (
              <div>
                <p
                  style={{
                    fontSize: "30px",
                    textAlign: "left",
                    marginLeft: "50px",
                  }}
                >
                  服務足跡
                </p>
                <div className="boxB">
                {cardData5.map((card, index) => (
                  <div key={index} class="cardB">
                    <div className="card-body1">
                      <div className="card-title1">{card.title}</div>
                      <button className="btn-Link1" onClick={() => handleButtonClick(card.contentId, card.link)} >Open PDF</button>
                    </div>
                    <img src={card.imgSrc} />
                  </div>
                ))}
              </div>
              </div>
            )}
            
          </div>
          {/* <img src={tw} alt="台灣拚完圖片" className="service-image-TW" /> */}
        </div>
        </div>

        {/* <div className="hr-line"></div> */}
        <div className="boxA">
          {cardData.map((card, index) => (
            <div key={index} class="cardA">
              <div className="card-body">
                <div className="card-title">{card.title}</div>
                <button className="btn-Link" onClick={() => handleButtonClick(card.contentId, card.link)} >Open PDF</button>
              </div>
              <img src={card.imgSrc} />
            </div>
          ))}
        </div>
        {/* <Menu
        id="location-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <Link to={item.url} target="_blank" rel="noopener noreferrer" className="menu-link">
              {item.label}
            </Link>
          </MenuItem>
        ))}
      </Menu> */}

      <Contact />
    </>
  );
}
