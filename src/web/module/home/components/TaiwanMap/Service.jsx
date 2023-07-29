import "./styles/Service.css";
import React from "react";
import tw from "./images/台灣拚完.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function Service() {
  const cardData = [
    {
        imgSrc: require("./images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("./images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("./images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("./images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("./images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
    {
        imgSrc: require("./images/台灣拚完.png"),
        date: '日期:XXX',
        title: '活動名稱',
        description: '一些描述內容.................',
    },
];

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
    </div>

    
  );
}
