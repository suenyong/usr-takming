import "./styles/Achievements.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function Achieve() {
    const cardData = [
        {
            imgSrc: require('../../../../_basic/images/NM_image1.jpg'),
            date: '日期:XXX',
            title: '活動名稱',
            description: '一些描述內容.................',
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image1.jpg'),
            date: '日期:XXX',
            title: '活動名稱',
            description: '一些描述內容.................',
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image2.JPG'),
            date: '日期:XXX',
            title: '活動名稱',
            description: '一些描述內容.................',
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image2.JPG'),
            date: '日期:XXX',
            title: '活動名稱',
            description: '一些描述內容.................',
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image3.jpg'),
            date: '日期:XXX',
            title: '活動名稱',
            description: '一些描述內容.................',
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image3.jpg'),
            date: '日期:XXX',
            title: '活動名稱',
            description: '一些描述內容.................',
        },
    ];

    return (
        <>
            <div className="hr-line"></div>
            <h1 style={{ textAlign: 'center', color: 'navy' }}>成果展現</h1>
            <div className="boxAchieve">
                {cardData.map((card, index) => (
                    <Card key={index} className="cardAchieve">
                        <img src={card.imgSrc} alt={`Image_${index + 1}`} style={{ width: 360, height: 240 }} />
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
                ))}
            </div>
        </>
    );
}