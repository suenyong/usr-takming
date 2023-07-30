import { right } from "@popperjs/core";
import Contact from "../../home/components/contactus/Contact";
import "../styles/GMM.css"

export default function GMM() {




    return (
        <>
            <div className="back-to-home">
                <a href="/" style={{ textDecoration: "none", color: "inherit" }}>回首頁/USR/內湖金面山在地風華 - 永續實踐計畫</a>
            </div>

            <h1 style={{ textAlign: "center", fontSize: "40px", fontFamily: "Arial, sans-serif", color: 'rgb(99,182,130)' }}>
                推動金面山USR理念目標
            </h1>

            <div className="boxIdea">內湖金面山在地風華-永續實踐計畫，依循 USR 推動目標以「人才培育」和 「在地鏈結」為核心，透過設計思考以人為本的設計精神，從在地需求出發， 將實踐場域鎖定在學校在地之內湖金面山、西湖商圈以及白石湖休閒農業區， 除與本校有著深切地緣關係外，內湖金面山雖擁有豐富的人文與自然資源且為 小百岳之一，但是知名度卻鮮為人知，且缺乏在地導覽機制與人才。
                而金面山山腳下的西湖商圈以及白石湖休閒農業區，同樣面臨著有著良好的商家但觀光人潮有待提升的困境，缺乏在地特色與商圈的連結，也缺乏多樣性的在地旅遊 體驗行程規劃。
                面對這些問題與挑戰，本計畫希望利用金面山的人文、自然生態與小百岳的優勢，串聯西湖商圈與白石湖的觀光，透過「樂活與創生跨領域學分學程」課程規劃，師生增能的共學形式，實踐在地關懷的大學社會責任，落實具有在地文化色彩的永續旅遊發展，計畫目標對焦 SDGs4 優質教育與 SDGs11 永續城市及社區，以培育學生具備跨領域及解決問題的能力及永續樂活人才，達成在地活化與永續社區發展之目標。
            </div>

            <div className="contain">

                <div className="img">
                    <img src={require('../../../_basic/images/all.png')} alt="climb.png" style={{ width: 800, height: 825 }}></img>
                </div>
            </div>

            <div className="contain2nd">
                <h1 style={{ textAlign: "left", fontSize: "20px", fontFamily: "Arial, sans-serif", color: 'rgb(99,182,130)', lineHeight: 0.3 }}>社會實踐議題(含SDGs)</h1>

                <img src={require('../../../module/about_us/images/SDGs4.png')} alt="SDGs4.png" style={{ maxWidth: "100px", maxHeight: "auto", float: 'left', marginLeft: 150, marginTop: 70 }}></img>
                <div className="boxSDG">
                    1.SDGs 4：優質教育—培育跨領域人才以本校學生為基礎，開設校級「樂活與創生跨領域學分學程」課程，整合走讀護照、導覽培訓、遊程規劃與文案設計、內容行銷與創意市場的規劃以吸引具社會實踐機之學生修讀。透過學程課程厚植學生對在地的認識及創新執行能力， 3 並以學程發展之課程模式與實作，讓知識與社會實踐共進之協力與合作模式相互為用。
                    經由「在地走讀」創新課程設計與學習實踐，帶領學生實際踏查金面山，從人文歷史、自然生態等面向，搭配深入淺出的解說，以更活潑的教學方式和學生互動，以加深學生對腳下這塊土地的認識與瞭解，培養學生對在地文化的情感，強化其歸屬感與文化認同，傳承歷史記憶並省思大學知識可以給社會的貢獻，逐步著手進行金面山品牌設計與導覽手冊設計，善盡社會責任，致力推廣認識金面山和培育永續樂活人才，透過文化內涵的提升，藉此提升本校學生文化軟實力，呼應辦學目標-培育具備熱愛生命的社會力人才。
                </div>

                <img src={require('../../../module/about_us/images/SDGs11.png')} alt="SDGs11.png" style={{ maxWidth: "100px", maxHeight: "auto", float: 'left', marginLeft: 150, marginTop: 90 }}></img>
                <div className="boxSDG">
                    2.SDGs 11：永續城市及社區—傳承金面山文化歷史本計畫將實踐場域鎖定在內湖金面山、西湖商圈以及白石湖休閒農業區，除與本校有著深切地緣關係外，經團隊多次走訪及拜訪在地文史達人、荒野保護協會以及在地西湖社區發展協會、西湖商圈促進會及白石湖社區發展協會理事長並總結場域利害關係人各方意見後發現，內湖金面山座落於北市連綿山巒之中，為五指山系之西南稜，其山頂的巨岩含石英細顆，裸露的石英砂岩在太陽照射下閃閃發亮，因此被稱為金面山。
                    加上金面山位於內湖金龍產業道路西邊，若從金龍產業道路方向仰望山頂巨石，猶如一把剪刀插向天際，因此又名剪刀石山。金面山至今還保留有「清代採石場」的古蹟遺址，是《清光緒8年(1882年)》所設 立的，為乃臺北城築城之官方採石場，行經此地不難發現當年留下的鑿孔痕跡，以及當年石料從山上以專闢的斜坡道滑下之遺跡，足以作為臺北建城史的最佳實 證，目前已經由台北市政府指定為市定古蹟。金面山海拔雖僅258公尺，但在山頂巨岩登高望遠，大台北盆地風光盡收眼底，一面可俯瞰山腳下蜿蜒的基隆河及大湖、碧湖，另一面俱是蒼翠山丘綿延，感受內湖所謂的「一河二湖山多多」。
                    金面山擁有豐富的人文資產與自然資源，雖為小百岳之一但是知名度卻鮮為人知，曖曖內含光於民眾生活中但是又容易錯身而過。金面山親山步道最多人出發的環山路登山口即在本校德明財經科技大學旁，因地緣關係與本校密不可分，破碎化的歷史文化保存使得外地移入居民缺乏對在地的認識也缺乏在地導覽機制與人才，本校位居內湖最高學府，身負人才培育使命的大學，深耕教育善盡社會責任，具有責無旁貸的使命！針對金面山的歷史文化傳承問題，本校以「在地鏈結」與 「人才培育」兩個主軸規劃分年逐步建構金面山的人文歷史知識的數位保存與發展，協助金面山文化傳承和創造永續樂活的白石湖社區。
                </div>

                <h1 style={{ textAlign: "left", fontSize: "20px", fontFamily: "Arial, sans-serif", color: 'rgb(99,182,130)', lineHeight: 0.3, marginLeft: 115, marginTop: 80 }}>需求與改善</h1>
                <div className="boxNeed">
                    位於台北市內湖區金面山山腳下有著西湖商圈以及同屬五指山系的白石湖休閒農業區，同樣面臨著有著良好的商家但是觀光人潮卻有待提升的困境，由於缺乏在地特色與商圈的連結，也缺乏多樣性的在地旅遊體驗行程規劃。因此，針對西湖商圈與白石湖休閒農業區問題，希望利用金面山的人文、自然生態與小百岳的優勢，串聯西湖商圈與白石湖的觀光，規劃「創意遊程」與「商圈共榮」兩 大主題的創意課群，藉由大學「資訊、數位行銷與創意」專長，由師生深入場域探查瞭解地方需求與具開發潛力的在地特色，協助發展金面山遊憩樂活議題，同時帶動西湖商圈與白石湖休閒農業區的觀光人潮，並藉此培養學生認識在地，激發對內湖在地的認同情感，進而推動以金面山為主的人文知性與觀光行程，形塑永續樂活態度，進而打造金面山樂活圈，推行永續漫活商圈與白石湖共榮共利的前景。
                    本計畫期望藉由師生增能的共學形式，實踐在地關懷的大學社會責任，落實具有在地文化色彩的永續旅遊發展可能並將計畫目標對焦於SDGs當中的 SDGs4：優質教育，透過「樂活與創生跨領域學分學程」培育學生具備跨領域及 解決問題的能力，並與地方共同培育在地所需之人才；SDGs11：永續城市與社區，以學校資訊能量協助建構「綠活數位地圖」，每年舉辦「金面山樂活走讀感恩祭」以數位化讓社區與商家共同參與具代表性感恩祭市集，達成在地活化與永續發展。
                </div>

                <h1 style={{ textAlign: "left", fontSize: "20px", fontFamily: "Arial, sans-serif", color: 'rgb(99,182,130)', lineHeight: 0.3, marginLeft: 115, marginTop: 80 }}>課程發展與實施</h1>
                <div className="boxNeed">
                    本計畫規劃「在地走讀」、「創意遊程」以及「商圈共榮」等三大面向主題的「樂活與創生跨領域學分學程」創新課程，共9門課程，並分基礎、核心與應用課程，相關課程涵蓋一至三年級。學程學生採甄選制，主要針對修習動機與意願進行篩選。學生修滿18學分將授予學程修畢證明。
                    <ul style={{ listStyleType: 'disc' }}>
                        <li>設計思考(校必修)</li>
                        <li>環境與永續發展(校必修)</li>
                        <li>體育-全方位運動適能(校必修)</li>
                        <li>活動規劃與管理(院系選修)</li>
                        <li>目的地行銷(院系選修)</li>
                        <li>實務專題(院系必修)</li>
                        <li>在地導覽解說(院系選修)</li>
                        <li>地方創生的實踐(院系選修)</li>
                    </ul>
                </div>

                <h1 style={{ textAlign: "left", fontSize: "20px", fontFamily: "Arial, sans-serif", color: 'rgb(99,182,130)', lineHeight: 0.3, marginLeft: 115, marginTop: 80 }}>合作夥伴</h1>
                <div className="boxNeed">
                    執行團隊
                    <p>陳百盛、劉完淳、李琇玲、謝碧鳳、吳劍蘭、陳偉瑀、張谷光、徐翠琇</p>
                    <br></br>
                    外部合作夥伴
                    <p>陳金讚、謝淑勤、李孟娜、李國隆、劉宜敏、黃俊隆、郭昭君、邱佳慧、王明旭、李銘、尉培元、史晴</p>
                </div>

            </div>
            <Contact />
        </>
    );
}