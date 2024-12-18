import CardActionArea from '@mui/material/CardActionArea';
import React, { useEffect, useState } from 'react';
import { AchievementsApi } from "../../../../_basic/Protocol/AchievementsApi";
import Protocol from "../../../../_basic/Protocol/Protocol";
import "./styles/Achievements.css";

export default function Achieve() {
    const [AData, setAData] = useState([]);

    const cardData = [
        {
            imgSrc: require('../../../../_basic/images/NM_image1.png'),
            // title: '活動名稱',
            Url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/411489015.pdf'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image2.png'),
            // title: '活動名稱',
            Url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/125978186.pdf'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image3.png'),
            // title: '活動名稱',
            Url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/548951769.pdf'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image4.png'),
            // title: '活動名稱',
            Url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/709433889.pdf'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image5.png'),
            // title: '活動名稱',
            Url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/698511545.pdf'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image6.png'),
            // title: '活動名稱',
            Url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/144581186.pdf'
        }
    ];

    useEffect(() => {
        const fetchAData = async () => {
            try {
                const data = await AchievementsApi.getAllAchievements();
                if (Array.isArray(data)) {
                    // 取最後六筆資料
                    const lastSixData = data.slice(-6);
                    setAData(lastSixData);
                    // console.log("成果展現所有資料:", lastSixData);
                } else {
                    console.error("取得所有成果展現失敗");
                }
            } catch (error) {
                console.error("取得所有成果展現失敗", error);
            }
        };
    
        fetchAData();
    }, []);
    

    return (
        <>
            {/* <div className="hr-line"></div> */}

            <h1
                data-aos="zoom-out-down"
                style={{
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#90cbc0",
                    width: "40%",
                    marginRight: "30%",
                    marginLeft: "30%",
                    marginTop: "13%",
                }}
            >成果展現</h1>

            <div className="boxAchieve">
                {AData.map((card, index) => (
                    <CardActionArea key={index}>
                        <a href={card.iink} key={card.id} target="_blank">
                            <div className="container">
                                <div className="image">
                                    <img src={`${Protocol.API_URL}/achievements/image/${card.image}`} alt={`Image_${card.aname}`} />
                                </div>
                                {/* <div className="text">
                                <h3>{card.aname}</h3>
                            </div> */}
                            </div>
                        </a>
                    </CardActionArea>
                ))}
            </div>
        </>
    );
};