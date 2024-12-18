import AOS from "aos";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import Contact from "../../home/components/contactus/Contact";
import "../styles/LohasCarbonDot.css";

export default function LohasCarbonDot() {
    const [Links, setLinks] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, []);

    return (
        <>
            <h1
                data-aos="zoom-out-down" className="dynamic"
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
                樂活碳點
            </h1>

            <div id="Opening">
                <span>“</span>永續是趨勢、減碳是日常、樂活是人生！<span>”</span>
                <p/></div>
            <div id="Opening1">
                要如何三者兼顧，就從下載樂活碳點APP開始，從日常生活、每日步行、關注綠色新聞、健走金面山養成減碳生活，邁向樂活人生 !
            </div>

            <h2 id="RR">減碳沒有奇蹟，只有累積！</h2>

            <div className="LCD_contain">
                <img src={require("../images/point.png")} id="Pointer" ></img>
            </div>

            <div className="LCD_contain">
                {/* <img src={require("..//images/intro.png")} id="Intro"></img> */}
                <img src={require("../images/L1.jpg")} id="Signup"></img>
            </div>

            <div className="LCD_contain2">
                <img src={require("../images/L2.jpg")} className="Shot"></img>
                <img src={require("../images/L3.jpg")} className="Shot"></img>
                <img src={require("../images/L4.jpg")} className="Shot"></img>
                <img src={require("../images/L5.jpg")} className="Shot"></img>
                <img src={require("../images/L6.jpg")} className="Shot"></img>
                <img src={require("../images/L7.jpg")} className="Shot"></img>
            </div>

            <div className="Point">
                <div id="Text"> 樂活碳點說明：</div>
                <ul id="LCD_ul">
                    <li>註冊禮 ＝10碳幣</li>
                    <li>推薦禮 ＝10碳幣</li>
                    <li>步數2000步＝ 1碳幣（每日上限10000步）</li>
                    <li>每日簽到＝ 1碳幣（每日僅能簽到一次）</li>
                    <li>減碳一指通＝1碳幣（看減碳影片，看完30秒就可得，有限制一天看一回）</li>
                    <li>綠色新聞＝ 1碳幣（點入觀看綠色新聞就可得，目的是鼓勵使用者多接觸此類新聞）</li>
                    <li>機智小學堂＝ 2碳幣（是採隨機給4題減碳環保意識題目）</li>
                    <li>金面山，三個點掃QRCode+定位即分別可得、竹月寺2碳幣、論劍亭3碳幣、剪刀石5碳幣</li>
                </ul>

                <ul id="LCD_ul2">
                    <li>註冊禮 ＝10碳幣</li>
                    <li>推薦禮 ＝10碳幣</li>
                    <li>步數2000步＝ 1碳幣</li>
                    <li>每日簽到＝ 1碳幣</li>
                    <li>減碳一指通＝1碳幣</li>
                    <li>綠色新聞＝ 1碳幣</li>
                    <li>機智小學堂＝ 2碳幣</li>
                    <li>金面山，三個點掃QRCode+定位即分別可得、竹月寺2碳幣、論劍亭3碳幣、剪刀石5碳幣</li>
                </ul>
            </div>
            <div id="vido" >
                <span>樂活碳點影片介紹：<a href="https://www.youtube.com/watch?v=W_Jw。vYAAdcA&t=1s" target="_blank">https://www.youtube.com/watch?v=W_JwvYAAdcA&t=1s</a></span>
            </div>


            {/* ====按鈕==== */}
            <a href="/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>
            <Contact />
        </>
    );
}
