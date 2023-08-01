import "./styles/Achievements.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Achieve() {
    const cardData = [
        {
            imgSrc: require('../../../../_basic/images/NM_image1.jpg'),
            title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image1.jpg'),
            title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image2.png'),
            title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image2.png'),
            title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image3.png'),
            title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image3.png'),
            title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        }
    ];

    return (
        <>
            <div className="hr-line"></div>

            <h1 style={{ textAlign: 'center', color: 'navy' }}>成果展現</h1>

            <div className="boxAchieve">
                {cardData.map((card, index) => (
                    <CardActionArea key={index} href={card.Url} target="_blank" rel="noopener noreferrer">
                        <div className="container">
                            <div className="image">
                                <img src={card.imgSrc} alt={`Image_${index + 1}`} />
                            </div>
                            <div className="text">
                                <h3>{card.title}</h3>
                            </div>
                        </div>
                    </CardActionArea>
                ))}
            </div>
        </>
    );
};