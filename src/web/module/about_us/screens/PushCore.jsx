import "../styles/PushCore.css";
import AOS from "aos";
import SDGs4 from "../images/sdgs4.png";
import SDGs11 from "../images/sdgs11.png";
import Contact from "../../home/components/contactus/Contact";
import Carousel from "../../../_basic/components/carousel/screens/Carousel";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PushCore() {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);
  return (
    <>
      {/* USR理念 */}
      <div className="back-to-home">
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          回首頁/關於我們/德明推動USR核心整合理念
        </a>
      </div>
      {/* <div className="one_idea_box"> */}
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
        USR的理念
      </h1>

      <div className="text_content">
        <div class="idea1-content">
          USR是「University
          SocialResponsibility（大學社會責任）」的簡稱。因為大學扮演著培育人才、研究學術、提升文化等重要角色，同時也肩負著服務社會、促進國家發展的使命。如何發揮大學的社會責任，讓知識與價值能夠更直接地回饋在地，大學在社會中扮演著重要角色，而大學社會責任也就成了大學面對社會期待的重要責任之一，積極參與社會發展，透過大學的知識、技術與資源幫助在地社會解決問題，培養出更具有社會責任感的人才，USR的目標讓大學更加關注在地議題，提供專業的知識與技術，對於區域發展能有更多貢獻。透過USR，大學將與當地社會、產業合作，共同發掘問題、設計解決方案，研究成果能夠直接回饋社會，進而促進區域發展。
        </div>
      </div>
      {/* </div> */}

      {/* TM理念 */}

      {/* <div className="PushCore"> */}
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
        德明USR核心整合理念
      </h1>
      <div class="text-content">
        <div class="title_Usr"> USR HUB </div>
        <div className="idea-content">
          本校於 109-111 年執行 USR Hub
          計畫：數位科技支援多元族群計畫，緊扣中程發展計畫與教育部高教深耕計畫的推動，有助於校務發展目標之規劃與核心理念的落實。實施場域對象涵蓋多元族群，包括內湖科技園區企業、部落區民和本校外籍生，校內整合跨院系師生資源，透過數位科技協助多元族群發展，善盡大學社會責任。計畫實質內涵符合校務發展主軸二（健全品格教育、善盡社會責任）和主軸三（鏈結產學合作、深耕研究務實），並結合校務發展目標之產業需求和加強產學鏈結。實現「進步優質學府、業界最愛科大」的學校願景。本校鄰近內湖科技和南港軟體園區，中小企業有轉型升級上需求，以及本校近500位越南生需要積極培力與時俱進的技能，最後學校長期深耕新北市烏來鄉忠治部落協助部落
          青年正確人生觀。在 109-111 年執行 USR Hub計畫：數位科技 支
          援多元族群計畫，緊扣中程發展計畫與教育部高教深耕計畫目
          標的推動，實施場域對象涵蓋多元族群（企業、越南生和原民部落），以數位科技支援多元族群發展。計畫目標是整合跨院系師生資源，以及連結校務發展主軸二（健全品格教育、善盡社會責任）和主軸三（鏈結產學合作、深耕研究務實），實現「進步優質學府、業界最愛科大」的學校願景，
          透過數位科技協助多元族群發展，善盡大學社會責任。
        </div>
        <div class="title_Usr">USR</div>
        <div className="idea-content">
          內湖金面山在地風華–永續實踐計畫，依循
          USR推動目標以「人才培育」和「在地鏈結」為核心，透過設計思考以人為本的設計精神，從在地需求出發，將實踐場域鎖定在學校在地之內湖金面山、西湖商圈以及白石湖休閒農業區，除與本校有著深切地緣關係外，內湖金面山雖擁有豐富的人文與自然資源且為小百岳之一，但是知名度卻鮮為人知，且缺乏在地導覽機制與人才。而金面山山腳下的西湖商圈以及白石湖休閒農業區，同樣面臨著有著良好的商家但觀光人潮有待提升的困境，缺乏在地特色與商圈的連結，也缺乏多樣性的在地旅遊體驗行程規劃。面對這些問題與挑戰，本計畫希望利用金面山的人文、自然生態與小百岳的優勢，串聯西湖商圈與白石湖的觀光，透過「樂活與創生跨領域學分學程」課程規劃，師生增能的共學形式，實踐在地關懷的大學社會責任，落實具有在地文化色彩的永續旅遊發展，計畫目標對焦SDGs4
          優質教育與 SDGs11
          永續城市及社區，以培育學生具備跨領域及解決問題的能力及永續樂活人才，達成在地活化與永續社區發展之目標。
        </div>
      </div>
      {/* </div> */}

      <div className="PusCoreSDGs">
        <div class="container">
          <div class="conversation4">
            <div class="cover_4">
              <img src={SDGs4} alt="SDGs4" />
            </div>
            <div class="back4">
              SDGs 4
              <br />
              優質教育—培育跨領域人才以本校學生為基礎，開設校級「樂活與創生跨領域學分學程」課程，整合走讀護照、導覽培訓、遊程規劃與文案設計、內容行銷與創意市場的規劃以吸引具社會實踐機之學生修讀。透過學程課程厚植學生對在地的認識及創新執行能力，并以學程發展之課程模式與實作，讓知識與社會實踐共進之協力與合作模式相互為用。經由「在地走讀」創新課程設計與學習實踐，帶領學生實際踏查金面山，從人文歷史、自然生態等面向，搭配深入淺出的解說，以更活潑的教學方式和學生互動，以加深學生對腳下這塊土地的認識與瞭解，培養學生對在地文化的情感，強化其歸屬感與文化認同，傳承歷史記憶並省思大學知識可以給社會的貢獻，逐步著手進行金面山品牌設計與導覽手冊設計，善盡社會責任，致力推廣認識金面山和培育永續樂活人才，透過文化內涵的提升，藉此提升本校學生文化軟實力，呼應辦學目標-培育具備熱愛生命的社會力人才。
            </div>
          </div>
        </div>

        <div class="container">
          <div class="conversation11">
            <div class="cover_11">
              <img src={SDGs11} alt="SDGs11" />
            </div>
            <div class="back11">
              SDGs 11
              <br />
              永續城市及社區—傳承金面山文化歷史本計畫將實踐場域鎖定在內湖金面山、西湖商圈以及白石湖休閒農業區，除與本校有著深切地緣關係外，經團隊多次走訪及拜訪在地文史達人、荒野保護協會以及在地西湖社區發展協會、西湖商圈促進會及白石湖社區發展協會理事長並總結場域利害關係人各方意見後發現，內湖金面山座落於北市連綿山巒之中，為五指山系之西南稜，其山頂的巨岩含石英細顆，裸露的石英砂岩在太陽照射下閃閃發亮，因此被稱為金面山。加上金面山位於內湖金龍產業道路西邊，若從金龍產業道路方向仰望山頂巨石，猶如一把剪刀插向天際，因此又名剪刀石山。金面山至今還保留有「清代採石場」的古蹟遺址，是《清光緒8年(1882年)》所設立的，為乃臺北城築城之官方採石場，行經此地不難發現當年留下的鑿孔痕跡，以及當年石料從山上以專闢的斜坡道滑下之遺跡，足以作為臺北建城史的最佳實證，目前已經由台北市政府指定為市定古蹟。金面山海拔雖僅258公尺，但在山頂巨岩登高望遠，大台北盆地風光盡收眼底，一面可俯瞰山腳下蜿蜒的基隆河及大湖、碧湖，另一面俱是蒼翠山丘綿延，感受內湖所謂的「一河二湖山多多」。金面山擁有豐富的人文資產與自然資源，雖為小百岳之一但是知名度卻鮮為人知，曖曖內含光於民眾生活中但是又容易錯身而過。金面山親山步道最多人出發的環山路登山口即在本校德明財經科技大學旁，因地緣關係與本校密不可分，破碎化的歷史文化保存使得外地移入居民缺乏對在地的認識也缺乏在地導覽機制與人才，本校位居內湖最高學府，身負人才培育使命的大學，深耕教育善盡社會責任，具有責無旁貸的使命！針對金面山的歷史文化傳承問題，本校以「在地鏈結」與「人才培育」兩個主軸規劃分年逐步建構金面山的人文歷史知識的數位保存與發展，協助金面山文化傳承和創造永續樂活的白石湖社區。德明甘丹內科園區永續時尚實踐計畫的場域為內湖科學園區，地價昂貴，部分紡織企業將公司場所堆放庫存布，逐年增加負擔，處理方式並不環保，因此若能將庫存布捐贈並回收製作該企業的制服並給予回饋機制，或是提供制服給園區內的餐廳使用，除了讓庫存布料有了循環機會，也可以培養園區內民眾的永續概念。本計畫預計於113年執行【全回收】計畫，可將永續經營的概念提高到另一層次，達到搖籃到搖籃的技術循環(technicalcycle)，採用100%寶特瓶回收的布料、紗線與拉鍊。計畫與新光紡織公司ISP計畫配合，從制服回收，纖維融化抽絲、織布染整、成衣設計與製作，進行閉鎖式的循環。透過解決園區內紡織企業庫存布料的痛點，建置永續時尚設計循環與庫存布料實體平台與台灣綠色紡織品聯盟，提供高中職、新銳設計師免費布料與園區廠商免費制服並重複使用的永續經營模式，預期架構一個可複製於全台灣地區的USR模式，並計畫於113年進行國際服飾品牌庫存布合作計畫，達成共同落實SDGs的目標。為在地問題解決構想與發展計畫，重視精進跨領域課程與深化實踐場域，鼓勵跨校合作但不強制，以「人才培育」為執行主軸，且須開設專業課程，獲核定補助計畫之學校進行計畫成效評估之規劃，並出版大學社會責任年報。跨域教學創新、人才培育、場域永續發展、價值創造。
            </div>
          </div>
        </div>
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
          marginTop: "20%",
        }}
      >
        活動照片
      </h1>
      <Carousel />

      <Contact />
    </>
  );
}
