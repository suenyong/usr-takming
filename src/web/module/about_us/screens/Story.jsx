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
