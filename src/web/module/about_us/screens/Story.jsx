import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Story.css";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';

export default function Story() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 700,
        });

        // 從後端 API 取得資料
        fetchVideos();
    }, []);

    const fetchVideos = () => {
        axios.get("http://localhost:8080/storyuser/storyall")
        .then(response => {
            console.log("取得的新影片資料:", response.data.data);
            setVideos(response.data.data);
        })
        .catch(error => {
            console.error("取得影片失敗:", error);
        });
    
    };
    
    
    
    return (
        <>
            <h1 data-aos="zoom-out-down" style={{
                textAlign: 'center',
                color: '#fff',
                backgroundColor: "#90cbc0",
                width: "40%",
                marginRight: "30%",
                marginLeft: "30%",
                marginTop: "13%",
            }}>
                精彩報導
            </h1>
    
            <div className="centered-container">
                <div className="boxS">
                    {videos.map((video, index) => (
                        <React.Fragment key={index}>
                            {video.name}<br />
                            <a href={video.link} target="_blank" rel="noreferrer">{video.link}</a>
                            <br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
    
            {/* ====按鈕==== */}
            <a href="http://localhost:3000/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>
    
            <Contact />
        </>
    )
    
}
