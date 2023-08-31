import React, { useEffect, useState } from 'react';
import "../../USRHUB/styles/UH110.css"
import ImageFiles from "../component/ImageFiles.jsx";
import Contact from '../../home/components/contactus/Contact';
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';


export default function UH109() {

    useEffect(() => {
        AOS.init({
            duration: 700,
        });
    }, [])
    const [selectedContent, setSelectedContent] = useState('content1');

    const handleButtonClick = (contentId) => {
        setSelectedContent(contentId);

    };




    const T109 = [
        { id: 1, src: require("../images/T109_1.jpg") },
        { id: 2, src: require("../images/T109_2.jpg") },
        { id: 3, src: require("../images/T109_3.jpg") },
    ]

    const A109 = [
        { id: 1, src: require("../images/A109_1.jpg") },
        { id: 2, src: require("../images/A109_2.JPG") },
    ]

    const Love109_Images = [
        { id: 1, src: require("../images/109IMG_4559.JPG") },
        { id: 2, src: require("../images/109IMG_4637.JPG") },
        { id: 3, src: require("../images/109IMG_4699.JPG") },
        { id: 4, src: require("../images/109IMG_4712.JPG") },
        { id: 5, src: require("../images/109IMG_4755.JPG") },
        { id: 6, src: require("../images/109IMG_4936.JPG") },
        { id: 7, src: require("../images/109IMG_4962.JPG") },
        { id: 8, src: require("../images/109IMG_5041.JPG") },
        { id: 9, src: require("../images/109IMG_5695.JPG") },
        { id: 10, src: require("../images/109IMG_6311.JPG") },
        { id: 11, src: require("../images/109IMG_5680.JPG") },
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
                109成果
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

                    「由研發處邀請國內外具有新服務商品、新商業模式、新技術應用之新創企業經理人，雙週舉辦「商業創新論壇」，邀請國內在推動商業創新的專業經理人蒞校演講，邀請內湖科技園區廠商、本校師生參加，落實創新創意教育的理念。」
                    <p></p>
                    辦理活動：創新服務輔導辦理創新論壇、課程
                    <br></br>
                    數位科技應用：AI軟體系統、社群軟體
                    <br></br>
                    執行成果：每月舉辦主題商業創新論壇(社群電商、AI商業應用、大 數據應用、區塊鏈等)；同時開設創業系列課程及AI實作 應用課程，總計共辦理24場，參與人數達503人。
                    <br></br>
                    <p></p>
                    辦理活動：創新科技育成 籌設育成中心、舉辦創業競賽
                    <br></br>
                    數位科技應用：AI 軟體系統(Decanter AI)
                    <br></br>
                    執行成果：
                    <br></br>
                    資本門45萬元籌設創新育成中心，相關設備進駐及結 合16位跨院跨系領域師資團隊共同組成。
                    <br></br>
                    舉辦「校車改造創業計畫」本校共215位學生參與，在學生創意設計及創新思維下同時也能落實提升學生創新能力。
                    <p></p>
                    本計畫透過雙週舉辦「商業創新論壇」，邀請國內在推動商業創新、服務創新、技術創新之專業經理人來校演講，邀請內湖科技園區廠商、本校師生參加，落實創新創意教育理念。每月設定新穎主題：9月為社群電商、10月為AI商業應用、11月為數據實戰分析、12月為區塊鏈應用。共舉辦24場次，參與人數503人。建立由學校帶動鄰近企業員工、有心創業人式、校內師生等創新分享的社會責任。
                    <p></p>
                    合作夥伴
                    XXXXXXXXXXXXXXX
                    <ImageFiles images={T109} />
                </div>
            )}

            {selectedContent === 'content2' && (

                <div className="p_USRHUB-UH" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif" }}>

                    <p style={{ fontSize: "30px" }}>東協跨境電商</p>

                    「本校有超過400位的外籍學生，為了善盡大學之社會責任， 擬建置「外籍生生活地圖」，整合鄰近商家、導入客源，並協助外籍生在 台生活便利。透過「美好電商」、「樂利跨境電商」將鄰近商家以店家類 型分類，將店家資訊、商品透明化，提供外籍生使用，亦可為店家帶來人 潮與商機。另外，現今網購消費力不容小覷，鄰近商家可能無法滿足外籍 生需求，因此計畫與本土「美好電商」、「樂利跨境電商」合作，網站有 越南文及印尼文，提供外籍生更多選擇，協助東協國家之外籍學生，在越 南或印尼電商平台開設店中店創業。」
                    <p></p>
                    辦理活動：東協跨境電商業師課程實務交流
                    <br></br>
                    數位科技應用：跨境電商平台操作
                    <br></br>
                    執行成果：邀請跨境電商6位業師協同教學，結合網紅經營、電商社群、國際 行銷等課程，參與學生數達363人。
                    <br></br>
                    <p></p>
                    辦理活動：2020全國大專校院跨 境電商競賽
                    <br></br>
                    數位科技應用：跨境電商平台操作、社群行銷、微電影製作
                    <br></br>
                    執行成果：
                    <br></br>
                    舉辦全國性跨境電商企劃書競賽共五校共同參與，48位各校外 籍學生團隊參賽，透過行銷企劃書傳達創意。
                    全國性跨境電商實作競賽，參賽分為境內組與境外組，各三校 六隊參與，透過社群行銷、網路直播等方式競賽。
                    跨境電商行銷短片競賽，共14組本校外籍學生參與，透過語言 介紹、腳本撰寫、拍攝技巧等評比，多元化學習。
                    <br></br>
                    <p></p>
                    辦理活動：辦理商業創新論壇、成果發表會、計畫行政庶務、經費結報等
                    <br></br>
                    數位科技應用：無
                    <br></br>
                    執行成果：該名計畫助理成為與越南當地企業、學校溝通媒介橋樑，協助計畫順利執行。
                    <br></br>
                    計畫於109年12月22日舉辦「跨境電商行銷競賽暨成果發表會」由東南亞外籍 生製作跨境電商行銷競賽，本計畫也舉辦「2020全國大專校院跨境電商競賽」 共全國五校外籍生參加，提供外籍生學術和實務交流的平台，也呼應本USR Hub計畫主軸—數位科技支援多元族群（外籍生）的大學社會責任。計畫衍生 效益則是媒合兩位外籍生到計畫合作機構企業實習，培育跨境電商人才。
                    <p></p>
                    合作夥伴
                    XXXXXXXXXXXXXXX
                    <ImageFiles images={A109} />
                </div>
            )}

            {selectedContent === 'content3' && (
                <div className="p_USRHUB-UH" style={{ fontSize: "20px", fontFamily: "Arial, sans-serif" }}>

                    <p style={{ fontSize: "30px" }}>部落愛轉動</p>

                    「由學務處透過部落文化及生態體驗活動，讓參與服務的師生更認識新北市 烏來區忠治部落原住民文化、尋回對原住民文化的認同感；透過體育及衛生教 育教學課程，讓部落居民及孩童，養成良好運動及衛生保健習慣；透過闖關及 方案活動，培育孩童從小建立正確理財觀念，成為有品格的好學生；延續109 年共輔導43位部落青少年及小朋友舉辦品格教育和理財教育課程，讓本校學生 透過計畫執行使學生有機會實際體驗城鄉交流服務經驗，培育未來參與社會的 關懷奉獻能力，109年製成「綠色生活地圖」協助部落發展地方特色，啟發社 區營造思維，協助部落找回地區文化的認同感。110年持續深耕該部落，並將 偏鄉課程導入數位教材，建立永續關懷偏鄉的生命教育。」
                    <p></p>
                    透過本校學務處課外活動指導組及原住民資源中心，結合 志工及社團團隊共同輔佐烏來「忠治部落」，落實推廣部落居民及孩童， 亦可藉此讓參與服務的師生更能瞭解原住民文化。透過部落文化及生態體 驗活動，讓參與服務師生更認識原住民文化、找回對原住民文化歸屬與認 同感；透過體育及衛生教育教學課程，讓部落居民及孩童，養成良好運動 12 及衛生保健習慣；透過闖關及方案活動進行，培育孩童從小建立正確理財 觀念、成為一位有品格的好學生。
                    <p></p>
                    辦理活動：暑期夏令營營隊
                    <br></br>
                    數位科技應用：無
                    <br></br>
                    執行成果：共43位部落青少年及小朋友，安排「理財課程」的設計，透過遊戲 學習風險管理及投資理財應有的準備及觀念；而「反毒教育、生命 教育、品格教育、環境教育」課程，則協助參與學員知道如何保護 自己、尊重生命、愛護環境、建立正確價值觀。
                    <br></br>
                    <p></p>
                    辦理活動：環境教育戶外體 驗活動
                    <br></br>
                    數位科技應用：無
                    <br></br>
                    執行成果：8月11日帶領部落青少年及孩童計45人，前往基隆海洋科技博物館，展開環境教育戶外體驗活動。
                    計畫中除了教導部落學生品格教育和理財規劃觀念外，也協助忠治部落製作「綠活圖」，可讓當地住民留下區域特色文史記錄，以及遊客更清楚瞭解當地部落文化特色、景觀地圖，協助部落永續發展。
                    <p></p>
                    合作夥伴
                    XXXXXXXXXXXXXXX


                    <ImageFiles images={Love109_Images} />
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