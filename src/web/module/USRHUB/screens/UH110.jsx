import React, { useState } from 'react';
import "../../USRHUB/styles/UH110.css"


export default function UH110() {


    const [selectedContent, setSelectedContent] = useState('content1');

    const handleButtonClick = (contentId) => {
        setSelectedContent(contentId);
    };


    return (

        <>
            <h1 style={{ textAlign: "center", fontSize: "40px", fontFamily: "Arial, sans-serif", }}>
                110企劃
            </h1>

            <h1 style={{ fontSize: "40px", fontFamily: "Arial, sans-serif", marginLeft: "10%" }}>
                企劃類型
            </h1>
            
            <button onClick={() => handleButtonClick('content1')}>服務創新育成</button>
            <button onClick={() => handleButtonClick('content2')}>東協跨境電商</button>
            <button onClick={() => handleButtonClick('content3')}>部落愛轉動</button>


            {selectedContent === 'content1' && (
                <div className="p_TLTS" style={{  fontSize: "20px", fontFamily: "Arial, sans-serif", }}>

                    由研發處邀請國內外具有新服務商品、新商業模式、新技術應用之新創企業經理人，雙週舉辦「商業創新論壇」，邀請國內在推動商業創新的專業經理人蒞校演講，邀請內湖科技園 區廠商、本校師生參加，落實創新創意教育的理念。
                    <p></p>
                    數位科技應用: AI軟體系統、區塊鏈、AI 自動珍奶系統研發
                    <p></p>
                    每月設定主題舉辦論壇，7 月為 AI 商業應用、8 月為區塊鏈應用、9 月 為新零售服務、10 月為服務創新、 11 月為流通創新。共舉辦 12 場次， 參與人數 263 人。
                    <p></p>
                    執行成果:AI軟體系統、區塊鏈
                    AI 自動珍奶系統研發
                    <br></br>
                    (1) 20 萬資本門建置「創新育成中 心」，結合校內跨院跨系師資團 隊協助鄰近企業獲得政府創新 資源。
                    <br></br>
                    (2) 企業創新顧問 9 家、協助 3 企 業企業(全家便利商店股份有 限公司、中保物流股份有限公 司、華宥企業有限公司)獲得政 府補助款 945 萬元；產學案 5 案共計 249 萬元。
                    <br></br>
                    (3) 輔導創新廠商遊隼科技股份有 限公司並進駐創新育成中心 (籌備中)。


                    <p>
                    該名計畫助理執行論壇活動，並且 與業界廠商聯絡溝通，進行創新育 成發想，協助計畫順利執行。
                    </p>


                    (1)本計畫透過雙週舉辦「商業創新論壇」，邀請國內在推動商業創新、服 務創新、技術創新之專業經理人來校演講，邀請內湖科技園區廠商、本 校師生參加，落實創新創意教育理念。每月設定新穎主題：7月為AI商業 應用、8月為區塊鏈應用、9月為新零售服務、10月為服務創新、11月為 流通創新。共舉辦12場次，參與人數263人。建立由學校帶動鄰近企業員 工、有心創業人式、校內師生等創新分享的社會責任。
                    <br></br>
                    (2)整合跨院教師團隊承接產學案5案共計249萬元，指導4組大學部專題製作， 強化學生實作和問題解決能力。


                </div>
            )}

            {selectedContent === 'content2' && (
                <div>
                    {/* 東協跨境電商的內容 */}
                </div>
            )}

            {selectedContent === 'content3' && (
                <div>
                    {/* 部落愛轉動的內容 */}
                </div>
            )}






        </>

    );
}