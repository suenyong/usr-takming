import React, { useEffect, useState } from 'react';
import "../../USRHUB/styles/UH110.css"
import ImageFiles from '../component/ImageFiles';
import Contact from '../../home/components/contactus/Contact';
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';


export default function UH111() {

    useEffect(() => {
        AOS.init({
            duration: 700,
        });
    }, [])

    const [selectedContent, setSelectedContent] = useState('content1');

    const handleButtonClick = (contentId) => {
        setSelectedContent(contentId);
    };

    const T111 = [
        { id: 1, src: require("../images/T111_1.JPG") },
        { id: 2, src: require("../images/T111_2.jpg") },
    ]

    const A111 = [
        { id: 1, src: require("../images/A111_1.jpg") },
        { id: 2, src: require("../images/A111_2.jpg") },
    ]

    const Love111_Images = [
        { id: 3, src: require("../images/L111_3.jpg") },
        { id: 4, src: require("../images/L111_4.jpg") },
        { id: 5, src: require("../images/L111_5.jpg") },
        { id: 6, src: require("../images/L111_6.jpg") },
        { id: 7, src: require("../images/L111_7.jpg") },
        { id: 8, src: require("../images/L111_8.jpg") },
        { id: 9, src: require("../images/L111_9.jpg") },
    ]

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
                111成果
            </h1>

            <h1 style={{ fontSize: "40px", fontFamily: "Arial, sans-serif", marginLeft: "10%" }}>
            活動成果
            </h1>

            <div className="button_HUB-UH">
                <button className="btu_stlyes-UH" onClick={() => handleButtonClick('content1')}>
                    <div className="color_circle-UH"></div>
                    <div className="button_text-UH">服務創新育成</div>
                </button>
                <button className="btu_stlyes-UH" onClick={() => handleButtonClick('content2')}>
                    <div className="color_circle-UH"></div>
                    <div className="button_text-UH">東協跨境電商</div>
                </button>
                <button className="btu_stlyes-UH" onClick={() => handleButtonClick('content3')}>
                    <div className="color_circle-UH"></div>
                    <div className="button_text-UH">部落愛轉動</div>
                </button>
            </div>


            {selectedContent === 'content1' && (
                <div className="p_USRHUB-UH" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif", }}>

                    <p style={{ fontSize: "30px" }}>服務創新育成</p>

                    <p style={{ fontSize: "25px" }}>111年執行情況:</p>

                    執行成效：延續邀請國內外具有新服務商品、新商業模式、新技術應用之新創企業經理人，舉辦「商業創新論壇」，邀請國內在推動商業創新的專業經理人蒞校演講。
                    <p></p>
                    辦理活動: 辦理創新論壇、創新服務輔導參與創業競賽
                    <p></p>
                    辦理創新論壇:
                    <br></br>
                    舉辦「商業創新論壇」，邀請國內在推動商業、服務、技術創新之專家來校演講，邀請內科廠商、本校師生參加，落實創新創意教育理念。設定新穎主題：元宇宙素養、5G與物聯網產業、AI應用商機。共舉辦22場次，參與人數502人。建立由學校帶動鄰近企業員工、有心創業人士、校內師生等創新分享的社會責任。
                    <p></p>
                    創新服務輔導參與創業競賽:
                    <br></br>
                    整合跨院教師團隊承接產學案5案共計441.5萬元，指導4組大學部專題製作，強化學生實作和問題解決能力。


                    <ImageFiles images={T111} />
                </div>
            )}

            {selectedContent === 'content2' && (

                <div className="p_USRHUB-UH" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif" }}>

                    <p style={{ fontSize: "30px" }}>東協跨境電商</p>


                    <p style={{ fontSize: "25px" }}>111年執行情況:</p>

                    辦理活動: 成果發表會
                    <p></p>
                    111年11月12日舉辦「東協跨境行銷競賽暨成果發表會」由東南亞外籍生製作跨境電商行銷競賽，提供外籍生學術和實務交流的平台， 也呼應本USR Hub計畫主軸—數位科技支援多元族群（外籍生）的大學社會責任。計畫衍生效益則是媒合2位外籍生到計畫合作機構企業實習，培育跨境電商人才。
                    <ImageFiles images={A111} />
                </div>
            )}

            {selectedContent === 'content3' && (
                <div className="p_USRHUB-UH" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif" }}>

                    <p style={{ fontSize: "30px" }}>部落愛轉動</p>

                    <p style={{ fontSize: "25px" }}>111年執行成效:</p>
                    辦理活動: 地方關懷創生
                    <p></p>
                    111年整合校際資源，攜手相同理念、熱忱之中華科大、 聖約翰科大、馬偕醫護專校之原資中心共同規劃執行，四校共同設定之 14 「文化、體能、環教、衛教」等兩階段主題內容，提供給忠治部落青年及 孩童更具意涵之服務，且讓服務之四校學生也能相互學習交流，並擴展人脈關係。
                    <p></p>

                    <p style={{ fontSize: "25px" }}>111年執行情況:</p>
                    辦理活動:地方關懷創生
                    <p></p>
                    111年忠治部落，透過辦理暑期主題營隊，執行「在地關 懷」、「永續環境」等政策目標外，並透過原民工作坊專題講座、樂水部落參訪交流與體驗，讓忠治部落居民及青年能有重新認識自己部落、整合自然資源、發展地方特 色，以促進「地方創生」之契機，該階段服務計有部落居民、青少年、小朋友及兩校師生377人次參與。

                    <ImageFiles images={Love111_Images} />

                </div>
            )}
            {/* ====按鈕==== */}
            <a href="http://localhost:80/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>

            <Contact />
        </>

    );
}