import "../styles/Service.css";
import React, { useState } from 'react';
import tw from "../images/台灣拚完.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Menu, MenuItem } from "@mui/material";
import Contact from "../../home/components/contactus/Contact";
import { Link } from 'react-router-dom';

export default function Service() {
  const cardData = [
    {
        imgSrc: require("../images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("../images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("../images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("../images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("../images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("../images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
];
const [selectedContent, setSelectedContent] = useState('content1');

    const handleButtonClick = (contentId) => {
        setSelectedContent(contentId);

    };

  return (
    <>
    <div className="service-container">
      <h1 className="service-title">服務據點</h1>
      <div className="service-content">
      <div className="service-text">
          <h1 className="service-heading">國內</h1>
          <div className="button_HUB">
                <button className="btu_stlyes" onClick={() => handleButtonClick('content1')}>
                    <div className="color_circle1"></div>
                    <div className="button_text" >台北</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content2')}>
                    <div className="color_circle1"></div>
                    <div className="button_text">新北</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content3')}>
                    <div className="color_circle1"></div>
                    <div className="button_text">桃園</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content4')}>
                    <div className="color_circle1"></div>
                    <div className="button_text">基隆</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content5')}>
                    <div className="color_circle1"></div>
                    <div className="button_text">全部</div>
                </button>
          </div>
            {selectedContent === 'content1' && (
              <div className="p_USRHUB" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif", }}>
                <p style={{ fontSize: "40px" }}>台北地區</p>
                <div className="button_container">
                <button className="btu_stlyes" onClick={() => handleButtonClick('content6')}>
                  <div className="color_circle1"></div>
                  <div className="button_text">內湖</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content7')}>
                  <div className="color_circle1"></div>
                  <div className="button_text">中山</div>
                </button>
              </div>
              </div>
            )}
            {selectedContent === 'content2' && (
              <div className="p_USRHUB" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif", }}>
                <p style={{ fontSize: "40px" }}>新北地區</p>
                <div className="button_container">
                <button className="btu_stlyes" onClick={() => handleButtonClick('content8')}>
                  <div className="color_circle1"></div>
                  <div className="button_text">烏來</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content9')}>
                  <div className="color_circle1"></div>
                  <div className="button_text">三芝</div>
                </button>
              </div>
              </div>
            )}
            {selectedContent === 'content5' && (
              <div className="p_USRHUB" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif", }}>
                <p style={{ fontSize: "40px" }}>全部地區</p>
                <div className="button_container">
                <button className="btu_stlyes" onClick={() => handleButtonClick('content6')}>
                  <div className="color_circle1"></div>
                  <div className="button_text">內湖</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content7')}>
                  <div className="color_circle1"></div>
                  <div className="button_text">中山</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content8')}>
                  <div className="color_circle1"></div>
                  <div className="button_text">烏來</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content9')}>
                  <div className="color_circle1"></div>
                  <div className="button_text">三芝</div>
                </button>
              </div>
              </div>
            )}
            {selectedContent === 'content6' && (
             <div>
             <p style={{ fontSize: "40px", textAlign: "left", marginLeft: "50px" }}>服務足跡</p>
             <div style={{ textAlign: "left", marginLeft: "50px" }}>
                <a href="https://manner.takming.edu.tw/var/file/8/1008/img/14/698511545.pdf" target="_blank" rel="noopener noreferrer">
                  德明科大辦理「弱勢關懷課輔」十四年不間斷
                </a>
              </div>
              <div style={{ textAlign: "left", marginLeft: "50px" }}>
                <a href="https://manner.takming.edu.tw/var/file/8/1008/img/14/428844962.pdf" target="_blank" rel="noopener noreferrer">
                  德明科大辦理「2020 歡樂聖誕~街友服務」活動
                </a>
              </div>
            <div style={{ textAlign: "left", marginLeft: "50px" }}>
             <a href="https://manner.takming.edu.tw/var/file/8/1008/img/14/636127978.pdf" target="_blank" rel="noopener noreferrer">
             德明科大辦理「2020 聖誕宅急便」活動
             </a>
             </div>
             <div style={{ textAlign: "left", marginLeft: "50px" }}>
             <a href="https://manner.takming.edu.tw/var/file/8/1008/img/14/411489015.pdf" target="_blank" rel="noopener noreferrer">
             德明科大舉辦「動物保護志工培訓」活動
             </a>
             </div>
             <div style={{ textAlign: "left", marginLeft: "50px" }}>
             <a href="http://manner.takming.edu.tw/var/file/8/1008/img/14/186449923.pdf" target="_blank" rel="noopener noreferrer">
             德明科大辦理「來去德明彬彬ㄅ一ㄤˋㄅ一ㄤˋ」生態 暨社團教學活動
             </a>
             </div>
             <div style={{ textAlign: "left", marginLeft: "50px" }}>
             <a href="https://manner.takming.edu.tw/var/file/8/1008/img/14/144581186.pdf" target="_blank" rel="noopener noreferrer">
             德明科大辦理「109 年白石湖生態營」活動
             </a>
             </div>
             <div style={{ textAlign: "left", marginLeft: "50px" }}>
             <a href="https://manner.takming.edu.tw/var/file/8/1008/img/14/384592079.pdf" target="_blank" rel="noopener noreferrer">
             德明科大辦理 109 年度「文湖國小生態教學」活動
             </a>
             </div>
           </div>
           
           
            )}
            {selectedContent === 'content7' && (
             <div>
             <p style={{ fontSize: "40px", textAlign: "left", marginLeft: "50px" }}>服務足跡</p>
             <div style={{ textAlign: "left", marginLeft: "50px" }}>
                <a href="http://manner.takming.edu.tw/var/file/8/1008/img/14/986341926.pdf" target="_blank" rel="noopener noreferrer">
                德明科大辦理「109 年度第三季博愛慶生會」服務活動
                </a>
              </div>
           </div>
            )}
            
            {selectedContent === 'content8' && (
             <div>
             <p style={{ fontSize: "40px", textAlign: "left", marginLeft: "50px" }}>服務足跡</p>
             <div style={{ textAlign: "left", marginLeft: "50px" }}>
                <a href="http://manner.takming.edu.tw/var/file/8/1008/img/14/625052883.pdf" target="_blank" rel="noopener noreferrer">
                德明科大 學務處舉辦 109 年度大學社會責任實踐基地-忠治「部落.愛轉動」 成果發表會 
                </a>
              </div>
              <div style={{ textAlign: "left", marginLeft: "50px" }}>
                <a href="http://manner.takming.edu.tw/var/file/8/1008/img/14/709433889.pdf" target="_blank" rel="noopener noreferrer">
                德明科大舉辦 109 年度大學社會責任實踐基地-忠治「部落.愛轉動」 暑期夏令營
                </a>
              </div>
           </div>
            )}

            {selectedContent === 'content9' && (
             <div>
             <p style={{ fontSize: "40px", textAlign: "left", marginLeft: "50px" }}>服務足跡</p>
             <div style={{ textAlign: "left", marginLeft: "50px" }}>
                <a href="http://manner.takming.edu.tw/var/file/8/1008/img/14/125978186.pdf" target="_blank" rel="noopener noreferrer">
                德明科大學務處舉辦 109 年橫山國小 「暑期-環教、理財、品格、創意夏令營」
                </a>
              </div>
           </div>
            )}

          <h1 className="service-heading">國外</h1>
          <div className="button_HUB">
                <button className="btu_stlyes" onClick={() => handleButtonClick('content10')}>
                    <div className="color_circle1"></div>
                    <div className="button_text" >越南</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content11')}>
                    <div className="color_circle1"></div>
                    <div className="button_text">菲律賓</div>
                </button>
          </div>

          {selectedContent === 'content11' && (
             <div>
             <p style={{ fontSize: "40px", textAlign: "left", marginLeft: "50px" }}>服務足跡</p>
             <div style={{ textAlign: "left", marginLeft: "50px" }}>
                <a href="https://manner.takming.edu.tw/var/file/8/1008/img/14/548951769.pdf" target="_blank" rel="noopener noreferrer">
                德明科大連續 12 年「菲律賓-聖誕鞋盒活動」 永續播愛不間斷
                </a>
              </div>
           </div>
            )}
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
      {selectedContent === 'content1' && (
        <div className="p_USRHUB" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif", }}>
        <button className="btu_stlyes" onClick={() => handleButtonClick('content6')}>
            <div className="color_circle1"></div>
            <div className="button_text" >內湖</div>
        </button>
        </div>
      )}

      <div className="hr-line"></div>
            <div className="boxA">
                {cardData.map((card, index) => (
                    <Card key={index} className="cardA">
                      <img src={card.imgSrc}  style={{ width: 100, height: 150 }} />
                    <CardContent>
                      <Typography gutterBottom variant="h7" component="div">
                         <p style={{ lineHeight: 0 }}>{card.date}</p>
                      </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        <p style={{ lineHeight: 1, textAlign: 'center' }}>{card.title}</p>
                    </Typography>
                      <Typography variant="body2" color="text.secondary">
                          {card.description}
                      </Typography>
                    </CardContent>
                  <Button size="large">閱讀更多</Button>
              </Card>
          ))}</div>
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
    </div>

     <Contact />
    </>
  );
 
 
}


