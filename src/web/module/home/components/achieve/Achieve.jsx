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
            Url: '../../../../about_us/images/animal.jpg'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image2.png'),
            // title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image3.png'),
            // title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image4.png'),
            // title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image5.png'),
            // title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
        },
        {
            imgSrc: require('../../../../_basic/images/NM_image6.png'),
            // title: '活動名稱',
            // Url:'https://www.takming.edu.tw/schtm/default.asp'
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
                        <div className="container">
                            <div className="image">
                                <img src={card.imgSrc} alt={`Image_${index + 1}`} />
                            </div>
                            {/* <div className="text">
                                <h3>{card.title}</h3>
                            </div> */}
                        </div>
                    </CardActionArea>
                ))}
            </div>
        </>
    );
};