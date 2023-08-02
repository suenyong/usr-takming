import "../styles/ImportLink.css";
import React, { useEffect, useRef } from "react";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";

export default function Report() {
    useEffect(() => {
        AOS.init({
          duration: 700,
        });
      }, []);

const fileName = "大學生社會責任年度報告書.pdf";
const filePath = "/path/to/your/pdf/file.pdf";
return (
<>
    <div className="back-to-home">
    <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        回首頁/重要連結
    </a>
    </div>
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
        >
    重要連結
    </h1>
        <div className="centered-container-important">
            <div className="boxImport">尚無資料</div>
        </div>
    <Contact />
</>
);
}
