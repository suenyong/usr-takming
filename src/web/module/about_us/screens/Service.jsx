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

const [anchorEl, setAnchorEl] = useState(null);
const [menuItems, setMenuItems] = useState([]);

const handleButtonClick = (event) => {
  const { name } = event.currentTarget;
  setMenuItems(getMenuItemsByLocation(name));
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

const getMenuItemsByLocation = (location) => {
  // 根據不同的據點選項返回相對應的選單內容
  switch (location) {
    case '菲律賓':
      return [
        { label: '德明科大連續 12 年「菲律賓-聖誕鞋盒活動」 永續播愛不間斷', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/548951769.pdf' },
      ];
    case '台北':
      return [
        { label: '德明科大辦理「弱勢關懷課輔」十四年不間斷', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/698511545.pdf' },
        { label: '德明科大辦理「2020 歡樂聖誕~街友服務」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/428844962.pdf' },
        { label: '德明科大辦理「2020 聖誕宅急便」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/636127978.pdf' },
        { label: '德明科大舉辦「動物保護志工培訓」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/411489015.pdf' },
        { label: '德明科大辦理「109 年度第三季博愛慶生會」服務活動', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/986341926.pdf' },
        { label: '德明科大辦理「來去德明彬彬ㄅ一ㄤˋㄅ一ㄤˋ」生態 暨社團教學活動', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/186449923.pdf' },
        { label: '德明科大辦理「109 年白石湖生態營」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/144581186.pdf' },
        { label: '德明科大辦理 109 年度「文湖國小生態教學」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/384592079.pdf' },
      ];
    case '新北':
      return [
        { label: '德明科大 學務處舉辦 109 年度大學社會責任實踐基地-忠治「部落.愛轉動」 成果發表會', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/625052883.pdf' },
        { label: '德明科大舉辦 109 年度大學社會責任實踐基地-忠治「部落.愛轉動」 暑期夏令營 ', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/709433889.pdf' },
        { label: '德明科大學務處舉辦 109 年橫山國小 「暑期-環教、理財、品格、創意夏令營」', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/125978186.pdf' },
      ];
    case '全部':
      return [
        { label: '德明科大連續 12 年「菲律賓-聖誕鞋盒活動」 永續播愛不間斷', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/548951769.pdf' },
        { label: '德明科大辦理「弱勢關懷課輔」十四年不間斷', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/698511545.pdf' },
        { label: '德明科大辦理「2020 歡樂聖誕~街友服務」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/428844962.pdf' },
        { label: '德明科大辦理「2020 聖誕宅急便」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/636127978.pdf' },
        { label: '德明科大舉辦「動物保護志工培訓」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/411489015.pdf' },
        { label: '德明科大辦理「109 年度第三季博愛慶生會」服務活動', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/986341926.pdf' },
        { label: '德明科大辦理「來去德明彬彬ㄅ一ㄤˋㄅ一ㄤˋ」生態 暨社團教學活動', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/186449923.pdf' },
        { label: '德明科大辦理「109 年白石湖生態營」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/144581186.pdf' },
        { label: '德明科大辦理 109 年度「文湖國小生態教學」活動', url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/384592079.pdf' },
        { label: '德明科大 學務處舉辦 109 年度大學社會責任實踐基地-忠治「部落.愛轉動」 成果發表會', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/625052883.pdf' },
        { label: '德明科大舉辦 109 年度大學社會責任實踐基地-忠治「部落.愛轉動」 暑期夏令營 ', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/709433889.pdf' },
        { label: '德明科大學務處舉辦 109 年橫山國小 「暑期-環教、理財、品格、創意夏令營」', url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/125978186.pdf' },
      ];
    // ...其他據點選項的處理
    default:
      return [];
  }
};
  return (
    <>
    <div className="service-container">
      <h1 className="service-title">服務據點</h1>
      <div className="service-content">
      <div className="service-text">
          <h1 className="service-heading">國內</h1>
          <div className="button-container">
          <button
              className="service-button"
              name="台北"
              onClick={handleButtonClick}
              aria-controls="location-menu"
              aria-haspopup="true"
            >
              台北
            </button>
            <button
              className="service-button"
              name="新北"
              onClick={handleButtonClick}
              aria-controls="location-menu"
              aria-haspopup="true"
            >
              新北
            </button>
            <button className="service-button">基隆</button>
            <button className="service-button">桃園</button>
            <button
              className="service-button"
              name="全部"
              onClick={handleButtonClick}
              aria-controls="location-menu"
              aria-haspopup="true"
            >
              全部
            </button>
          </div>
          <h1 className="service-heading">國外</h1>
          <div className="button-container">
            <button className="service-button">越南</button>
            <button
              className="service-button"
              name="菲律賓"
              onClick={handleButtonClick}
              aria-controls="location-menu"
              aria-haspopup="true"
            >
              菲律賓
            </button>
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
      <Menu
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
      </Menu>
    </div>

     <Contact />
    </>
  );
 
 
}


