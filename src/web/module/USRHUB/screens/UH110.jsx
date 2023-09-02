import React, { useEffect, useState } from 'react';
import "../../USRHUB/styles/UH110.css"
import ImageFiles from '../component/ImageFiles';
import Contact from '../../home/components/contactus/Contact';
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';


export default function UH110() {
    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, [])

    const [selectedContent, setSelectedContent] = useState('content1');

    const handleButtonClick = (contentId) => {
        setSelectedContent(contentId);
    };

    const T110 = [
        { id: 1, src: require("../images/T110_1.jpg") },
        { id: 2, src: require("../images/T110_2.jpg") },
    ]

    const A110 = [
        { id: 1, src: require("../images/A110_1.jpg") },
        { id: 2, src: require("../images/A110_2.jpg") },
        { id: 3, src: require("../images/A110_3.jpg") },
    ]

    const Love110_Images = [
        { id: 1, src: require("../images/L110_1.jpg") },
        { id: 2, src: require("../images/L110_3.jpg") },
        { id: 3, src: require("../images/L110_2.JPG") },
        { id: 4, src: require("../images/L110_4.jpg") },
        { id: 5, src: require("../images/L110_5.jpg") },
        { id: 6, src: require("../images/L110_6.JPG") },
        { id: 7, src: require("../images/L110_7.JPG") },
        { id: 8, src: require("../images/L110_8.JPG") },
        { id: 9, src: require("../images/L110_9.JPG") },
        { id: 10, src: require("../images/L110_10.JPG") },
        { id: 11, src: require("../images/L110_11.JPG") },
        { id: 11, src: require("../images/L110_13.JPG") },
        { id: 11, src: require("../images/L110_14.JPG") },
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
                110成果
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

                    「由研發處邀請國內外具有新服務商品、新商業模式、新技術應用之新創企業經理人，雙週舉辦「商業創新論壇」，邀請國內在推動商業創新的專業經理人蒞校演講，邀請內湖科技園 區廠商、本校師生參加，落實創新創意教育的理念。」
                    <p></p>
                    數位科技應用: AI軟體系統、區塊鏈、AI 自動珍奶系統研發
                    <p></p>
                    每月設定主題舉辦論壇，7 月為 AI 商業應用、8 月為區塊鏈應用、9 月 為新零售服務、10 月為服務創新、 11 月為流通創新。共舉辦 12 場次， 參與人數 263 人。
                    <p></p>
                    執行成果:AI軟體系統、區塊鏈AI 自動珍奶系統研發
                    <br></br>
                    (1) 20 萬資本門建置「創新育成中 心」，結合校內跨院跨系師資團 隊協助鄰近企業獲得政府創新 資源。
                    <br></br>
                    (2) 企業創新顧問 9 家、協助 3 企 業企業(全家便利商店股份有 限公司、中保物流股份有限公司、華宥企業有限公司)獲得政 府補助款 945 萬元；產學案 5 案共計 249 萬元。
                    <br></br>
                    (3) 輔導創新廠商遊隼科技股份有 限公司並進駐創新育成中心 (籌備中)。

                    <p>
                        該名計畫助理執行論壇活動，並且 與業界廠商聯絡溝通，進行創新育 成發想，協助計畫順利執行。
                    </p>


                    (1)本計畫透過雙週舉辦「商業創新論壇」，邀請國內在推動商業創新、服務創新、技術創新之專業經理人來校演講，邀請內湖科技園區廠商、本校師生參加，落實創新創意教育理念。每月設定新穎主題：7月為AI商業應用、8月為區塊鏈應用、9月為新零售服務、10月為服務創新、11月為流通創新。共舉辦12場次，參與人數263人。建立由學校帶動鄰近企業員工、有心創業人式、校內師生等創新分享的社會責任。
                    <br></br>
                    (2)整合跨院教師團隊承接產學案5案共計249萬元，指導4組大學部專題製作， 強化學生實作和問題解決能力。

                    <ImageFiles images={T110} />
                </div>
            )}

            {selectedContent === 'content2' && (

                <div className="p_USRHUB-UH" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif" }}>

                    <p style={{ fontSize: "30px" }}>東協跨境電商</p>

                    「由研發處整合本校 560 位的東協生（越南、印尼）在台生活需求，結合電商平台與直播趨勢，教導電商透過直播知識與運作，培養外籍生電商之網紅經營、社群行銷和跨境電商經營能力，期許畢業後能協助外籍生在台跨境或歸國落地創業。」
                    <p></p>
                    數位科技應用: 跨境電商平台操作、跨境電商平台操作、社群行銷、微電影製作
                    <p></p>
                    跨境電商平台操作在行銷系、國貿系、研發處共邀請跨境電商 17 位業師協同教學，授課學生數 435 人。
                    <p></p>
                    執行成果:跨境電商平台操作、社群行銷、微電影製作
                    <br></br>
                    (1) 110 年 10 月 22 日至 11 月 06 日舉辦「2021 東協跨境電商行銷微電影競賽(校內)」，共 7 隊進入決賽
                    <br></br>
                    (2) 110 年 11 月 06 日舉辦校 內「東協跨境電商行銷競賽暨成果發表」
                    <p>
                        該名計畫助理成為與越南當地企業、學校溝通媒介橋樑，協助計畫順利執行。
                    </p>
                    計畫衍生亮點成果案例(計畫成果中可供各界參考的執行亮點或特色內容)。 計畫於110年11月06日舉辦「跨境電商行銷競賽暨成果發表會」由東南亞外籍生製作跨境電商行銷競賽，提供外籍生學術和實務交流的平台，也呼應本USR Hub計畫主軸—數位科技支援多元族群（外籍生）的大學社會責任。計畫衍生效益則是媒合兩位外籍生到計畫合作機構企業實習，培育跨境電商人才。

                    <ImageFiles images={A110} />
                </div>
            )}

            {selectedContent === 'content3' && (
                <div className="p_USRHUB-UH" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif" }}>

                    <p style={{ fontSize: "30px" }}>部落愛轉動</p>

                    「由學務處課指組舉辦部落文化及生態體驗活動，因此選定位處烏來的忠治部落，於 110 年 10 月 9-10 日忠治部落青少年、兒童、社區居民計 35 名，忠治部落是離台北最近的泰雅族部落，地緣關係部落有著極佳生態步道與自然環境。在本校協助下 109 年完成「忠治部落綠地圖、來一攤(周邊美食、景點)」、110 年完成「忠治-甲蟲、獨角仙昆蟲」摺頁、簡介，並帶領部落居民及青年至南投縣仁愛鄉法治村武界部落的參訪後，透過辦理本自然生態體驗活動為讓忠治居民更認識自己部落、整合自然資源，並有發展地方特色之機會透過計畫執行使學生有機會實際體驗城鄉交流服務經驗，培育未來參與社會的關懷奉獻能力，啟發社區營造思維，協助部落找回地區文化的認同感。」
                    <p></p>
                    110年執行情況
                    <p></p>
                    10月9 -10日帶領部落青少年及孩童計35人，至南投縣仁愛鄉法治村武界部落的參訪後，為讓忠治居民更認識自己部落、整合自然資源，並有發展地方特色之機會
                    <p></p>
                    (1)深化部落認識、整合自然資源、提昇發展地方特色、發展部落文化。
                    <br></br>
                    (2)關注「地方創生」議題，讓青年及居民著力部落經營與觀光產業。
                    <br></br>
                    (3)讓德明的學生有機會實際體驗城鄉交流服務經驗，培育未來參與社會的關懷奉獻能力，盡一份公民責任，理解本土化與社區的互動關係，進而參與公共議題，締造德明科大的優質學習文化。透過製作「綠色生活地圖」協助部落發展地方特色，啟發社區營造思維，協助部落找回地區文化的認同感。

                    <ImageFiles images={Love110_Images} />
                </div>
            )}
            {/* ====按鈕==== */}
            <a  href="/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>


            <Contact />
        </>

    );
}