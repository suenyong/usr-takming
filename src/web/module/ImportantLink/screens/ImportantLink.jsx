import "../styles/ImportLink.css";
import React, { useEffect, useRef } from "react";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';


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
      {/* ====按鈕==== */}
      <a href="http://localhost:3000/" className="return-But">
        <AiOutlineHome className="return-object"></AiOutlineHome>
      </a>
      <Contact />
    </>
  );
}
