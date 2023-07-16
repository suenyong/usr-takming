import React, { useState } from 'react';
import "../../USRHUB/styles/UH110.css"
import ImageFiles from '../component/ImageFiles';
import Contact from '../../home/components/contactus/Contact';


export default function UH111(){
    
    const [selectedContent, setSelectedContent] = useState('content1');

    const handleButtonClick = (contentId) => {
        setSelectedContent(contentId);
    };

    
    
    return(
        <>
        <h1 style={{ textAlign: "center", fontSize: "40px", fontFamily: "Arial, sans-serif",color:"#336666" }}>
                111企劃
            </h1>

            <h1 style={{ fontSize: "40px", fontFamily: "Arial, sans-serif", marginLeft: "10%" }}>
                企劃類型
            </h1>
            
            <div className="button_HUB">
                <button className="btu_stlyes" onClick={() => handleButtonClick('content1')}>
                    <div className="color_circle"></div>
                    <div className="button_text">服務創新育成</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content2')}>
                    <div className="color_circle"></div>
                    <div className="button_text">東協跨境電商</div>
                </button>
                <button className="btu_stlyes" onClick={() => handleButtonClick('content3')}>
                    <div className="color_circle"></div>
                    <div className="button_text">部落愛轉動</div>
                </button>
            </div>


            {selectedContent === 'content1' && (
                <div className="p_USRHUB" style={{  fontSize: "20px", fontFamily: "Arial, sans-serif", }}>

                   <p style={{ fontSize: "30px"}}>服務創新育成</p> 

                    <p style={{ fontSize: "25px"}}>111年執行情況:</p>

                    執行成效：延續邀請國內外具有新服務商品、新商業模式、新技術應 用之新創企業經理人，舉辦「商業創新論壇」，邀請國內在推動商業創新的專業經理人蒞校演講。
                    <p></p>
                    辦理活動: 辦理創新論壇、創新服務輔導參與創業競賽
                    <p></p>
                    辦理創新論壇:
                    <br></br>
                    舉辦「商業創新論壇」，邀請國內在推動商業、服務、技術創新之專 家來校演講，邀請內科廠商、本校師生參加，落實創新創意教育理 念。設定新穎主題：元宇宙素養、5G與物聯網產業、AI應用商機。共 舉辦22場次，參與人數502人。建立由學校帶動鄰近企業員工、有心 創業人士、校內師生等創新分享的社會責任。
                    <p></p>
                    創新服務輔導參與創業競賽:
                    <br></br>
                    整合跨院教師團隊承接產學案5案共計441.5萬元，指導4組大學部專題 製作，強化學生實作和問題解決能力。
                    <p></p>
                    合作夥伴XXXXXXXXXXXXXXX

                    <ImageFiles />
                </div>
            )}

            {selectedContent === 'content2' && (

                <div className="p_USRHUB" style={{  fontSize: "20px", fontFamily: "Arial, sans-serif" }}>

                    <p style={{ fontSize: "30px"}}>東協跨境電商</p>

                    
                    <p style={{ fontSize: "25px"}}>111年執行情況:</p>

                    辦理活動: 成果發表會
                    <p></p>
                    111年11月12日舉辦「東協跨境行銷競賽暨成果發表會」由東南亞外 籍生製作跨境電商行銷競賽，提供外籍生學術和實務交流的平台， 也呼應本USR Hub計畫主軸—數位科技支援多元族群（外籍生）的 大學社會責任。計畫衍生效益則是媒合2位外籍生到計畫合作機構企 業實習，培育跨境電商人才。
                    <ImageFiles />
                </div>
            )}

            {selectedContent === 'content3' && (
                <div className="p_USRHUB" style={{  fontSize: "20px", fontFamily: "Arial, sans-serif" }}>

                    <p style={{ fontSize: "30px"}}>部落愛轉動</p>

                    <p style={{ fontSize: "25px"}}>111年執行情況:</p>
                    辦理活動: 地方關懷創生
                    <p></p>
                    111年整合校際資源，攜手相同理念、熱忱之中華科大、 聖約翰科大、馬偕醫護專校之原資中心共同規劃執行，四校共同設定之 14 「文化、體能、環教、衛教」等兩階段主題內容，提供給忠治部落青年及 孩童更具意涵之服務，且讓服務之四校學生也能相互學習交流，並擴展人 脈關係。
                    <p></p>
            
                    <p style={{ fontSize: "25px"}}>111年執行情況:</p>
                    辦理活動:地方關懷創生
                    <p></p>
                    111年忠治部落，透過辦理暑期主題營隊，執行「在地關 懷」、「永續環境」等政策目標外，並透過原民工作坊專 題講座、樂水部落參訪交流與體驗，讓忠治部落居民及青 年能有重新認識自己部落、整合自然資源、發展地方特 色，以促進「地方創生」之契機，該階段服務計有部落居 民、青少年、小朋友及兩校師生377人次參與。

                    <ImageFiles />

                </div>
            )}

        <Contact />
        </>

    );
}