import "./styles/Achievements.css";
import * as React from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import AOS from "aos";

export default function Achieve() {

    React.useEffect(() => {
        AOS.init({
            duration: 700,
        });
    }, []);
    const cardData = [
        {
            imgSrc: require('../../../../_basic/images/NM_image1.png'),
            // title: '活動名稱',
            Url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/411489015.pdf'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image2.png'),
            // title: '活動名稱',
            Url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/125978186.pdf'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image3.png'),
            // title: '活動名稱',
            Url: 'https://manner.takming.edu.tw/var/file/8/1008/img/14/548951769.pdf'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image4.png'),
            // title: '活動名稱',
            Url: 'http://manner.takming.edu.tw/var/file/8/1008/img/14/709433889.pdf'
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
                {cardData.map((card, index) => (
                    <CardActionArea key={index}>
                        <a href={card.Url} key={index} target="_blank">
                            <div className="container">
                                <div className="image">
                                    <img src={card.imgSrc} alt={`Image_${index + 1}`} />
                                </div>
                                {/* <div className="text">
                                <h3>{card.title}</h3>
                            </div> */}
                            </div>
                        </a>
                    </CardActionArea>
                ))}
            </div>
        </>
    );
};