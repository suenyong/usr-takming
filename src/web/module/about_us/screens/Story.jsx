import AOS from "aos";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { NewsApi } from "../../../_basic/Protocol/NewsApi";
import Contact from "../../home/components/contactus/Contact";
import "../styles/Story.css";

export default function Story() {
    const [NData, setNData] = useState([]);
    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, []);

    useEffect(() => {
        const fetchNData = async () => {
            try {
            const data = await NewsApi.getAllNews();
            if (Array.isArray(data)) {
                const sortedData = data.sort((a, b) => b.id - a.id);
                setNData(sortedData);
                console.log("亮點報導所有資料:", sortedData);
            } else {
                console.error("取得所有亮點報導失敗");
            }
            } catch (error) {
            console.error("取得所有亮點報導失敗", error);
            }
        };

        fetchNData();
        }, []);

    const news = [
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
            name:"德明科大USR「樂活碳點」走訪金面山風華：",
            link:"https://money.udn.com/money/story/5723/7967640",
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
                    {NData.map((news) => (
                        <React.Fragment key={news.id}>
                        <span>{news.name}<>：</><a href={news.link} target="_blank" rel="noreferrer">{news.link}</a></span> 
                        <br />
                        </React.Fragment>
                    ))}
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
