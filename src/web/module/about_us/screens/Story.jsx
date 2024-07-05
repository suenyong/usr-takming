import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Story.css";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';

export default function Story() {
    // const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //     AOS.init({
    //         duration: 900,
    //     });

    //     // 從後端 API 取得資料
    //     fetchVideos();
    // }, []);

    // const fetchVideos = () => {
    //     axios.get("http://192.192.140.222:8081/storyuser/storyall")
    //     .then(response => {
    //         console.log("取得的新影片資料:", response.data.data);
    //         setVideos(response.data.data);
    //     })
    //     .catch(error => {
    //         console.error("取得影片失敗:", error);
    //     });
    
    // };
    

    const videos = [
        {
            name:"德明科大 USR 夏令營「我的財富自由不是夢」：",
            link:"https://money.udn.com/money/amp/story/5723/7333500",
        },
        {
            name:"德明科大USR 團隊積極推廣「樂活減碳」：",
            link:"https://money.udn.com/money/story/5723/7928898",
        },
        {
            name:"德明科大USR夏令營-「財經好好玩」：",
            link:"https://money.udn.com/money/story/5635/7384075",
        },
        {
            name:"德明科大「理財探索家」冬令營 引領孩子輕鬆學習小錢包大智慧：",
            link:"https://money.udn.com/money/story/5723/7750950",
        },
        {
            name:"德明科大全國唯一 榮獲ESG物流永續傑出獎：",
            link:"https://money.udn.com/money/story/6722/7891534",
        },
        {
            name:"德明科大助西湖學童培養財經觀：",
            link:"https://money.udn.com/money/story/5723/7799022",
        },
        {
            name:"德明科大攜手西湖實中 啟發青少年理財新思維：",
            link:"https://money.udn.com/money/story/5723/7673123",
        },
        {
            name:"德明科大致力永續教育在地化：",
            link:"https://money.udn.com/money/story/5723/7843259",
        },
        {
            name:"德明科大落實 USR 舉辦國中教師財經素養研習營：",
            link:"https://money.udn.com/money/story/5723/7405392",
        },
        {
            name:"校園新聞-ESG物流永續傑出獎：",
            link:"https://money.udn.com/money/story/6722/7891534",
        },
    ]
    
    
    return (
        <>
            <h1 data-aos="zoom-out-down" className="dynamic" style={{
                textAlign: 'center',
                color: '#fff',
                backgroundColor: "#90cbc0",
                width: "40%",
                marginRight: "30%",
                marginLeft: "30%",
                marginTop: "13%",
            }}>
                亮點報導
            </h1>
    
            <div className="centered-container">
                <div className="boxS">
                    {videos.map((video, index) => (
                        <React.Fragment key={index}>
                        <span>{video.name}<a href={video.link} target="_blank" rel="noreferrer">{video.link}</a></span> 
                        <br />
                        </React.Fragment>
                    ))}
                    {/* 靜態網址 */}
                        {/* <span>樂活碳點影片介紹：<a href="https://www.youtube.com/watch?v=W_JwvYAAdcA&t=1s" target="_blank">https://www.youtube.com/watch?v=W_JwvYAAdcA&t=1s</a></span> */}
                </div>
            </div>
    
            {/* ====按鈕==== */}
            <a  href="/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>
    
            <Contact />
        </>
    )
    
}
