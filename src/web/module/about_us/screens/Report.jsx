import { ClassNames } from "@emotion/react";
import "../styles/Report.css";
import React, { useRef } from "react";
import Contact from "../../home/components/contactus/Contact";


export default function Report() {
    const fileName = "大學生社會責任年度報告書.pdf";
    const filePath = "/path/to/your/pdf/file.pdf";
    return (
        <>
            <div class="title_title"> <p>大學生社會責任年度報告書</p> </div>
            <div className="boxR">
                尚無資料
            </div>
            <Contact />
        </>
    );
}