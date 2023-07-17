
import "../styles/ImportLink.css";
import React, { useRef } from "react";
import Contact from "../../home/components/contactus/Contact";


export default function Report() {
    const fileName = "大學生社會責任年度報告書.pdf";
    const filePath = "/path/to/your/pdf/file.pdf";
    return (
        <>

        <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "Arial, sans-serif",
          color:"#336666"
        }}>
        重要連結
        </h1>
        <div className="centered-container">
            <div className="boxImport">
                尚無資料
            </div>
        </div>
        <Contact />
        </>
    );
}