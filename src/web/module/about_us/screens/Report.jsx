import AOS from "aos";
import "../styles/Report.css";
import React, { useEffect, useRef } from "react";
import Contact from "../../home/components/contactus/Contact";


export default function Report() {
    useEffect(() => {
        AOS.init({
        duration: 700,
        });
    }, [])


    const fileName = "大學生社會責任年度報告書.pdf";
    const filePath = "/path/to/your/pdf/file.pdf";
    return (
        <>
    <div className="back-to-home">
     <a href="/" style={{ textDecoration: "none", color: "inherit" }}>回首頁/關於我們/大學生社會責任年度報告書</a>
    </div>
    <h1 data-aos="zoom-out-down" style={{ 
        textAlign: 'center', 
        color: '#fff',
        backgroundColor:"#90cbc0",
        width:"50%",
        marginRight:"25%",
        marginLeft:"25%",
        marginTop:"13%",
        }}>
        大學生社會責任年度報告書
        </h1>
        <div className="centered-container_Report">
            <div className="boxR">
                尚無資料
            </div>
        </div>
        <Contact />
        </>
    );
}