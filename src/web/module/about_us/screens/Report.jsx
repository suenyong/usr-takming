import AOS from "aos";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import Contact from "../../home/components/contactus/Contact";
import "../styles/Report.css";



export default function Report() {
    const [RData, setRData] = useState([]);
    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, [])

    // useEffect(() => {
    //     const fetchRData = async () => {
    //         try {
    //         const data = await NewsApi.getAllNews();
    //         if (Array.isArray(data)) {
    //             const sortedData = data.sort((a, b) => b.id - a.id);
    //             setRData(sortedData);
    //             console.log("亮點報導所有資料:", sortedData);
    //         } else {
    //             console.error("取得所有亮點報導失敗");
    //         }
    //         } catch (error) {
    //         console.error("取得所有亮點報導失敗", error);
    //         }
    //     };

    //     fetchNData();
    //     }, []);


    const fileName = "大學生社會責任年度報告書.pdf";
    const filePath = "/path/to/your/pdf/file.pdf";
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
                大學生社會責任年度報告書
            </h1>
            <div className="centered-container">
                <div className="boxR">
                    {RData.length > 0 ? (
                        RData.map((news) => (
                            <React.Fragment key={news.id}>
                                <span>
                                    <a
                                        href={news.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {news.link}
                                    </a>
                                </span>
                                <br />
                            </React.Fragment>
                        ))
                    ) : (
                        <div style={{margin:'20% 0 20% 0'}}>資料準備中...</div>
                    )}
                </div>
            </div>
            {/* ====按鈕==== */}
            <a  href="/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>

            <Contact />
        </>
    );
}