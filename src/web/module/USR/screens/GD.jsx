import React from "react";
import "../styles/GD.css";
import Contact from "../../home/components/contactus/Contact";
import GD_1 from "../images/GD_1.png";
import blue_line from "../images/blue_line.png";
import SDGs4 from "../images/sdgs4.png";
import SDGs11 from "../images/sdgs11.png";
import SDGs8 from "../images/sdgs8.png";
import SDGs12 from "../images/sdgs12.png";

export default function GD() {
return (
<>
    <div className="back-to-home">
    <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        回首頁/USR/德明甘丹內科園區時尚實踐計畫
    </a>
    </div>
    <div className="bigtitle">計畫整體發展之總目標</div>

    <div className="boxIdea-GD">
    本計畫的場域為內湖科學園區，地價昂貴，部分紡織企業將公司場所堆放庫存布，逐年增加負擔，處理方式並不環保，因此若能將庫存布捐
    贈並回收製作該企業的制服並給予回饋機制，或是提供制服給園區內的
    餐廳使用，除了讓庫存布料有了循環機會，也可以培養園區內民眾的永續概念。本計畫預計於113年執行【全回收】計畫，可將永續經營的概念提高到另一層次，達到搖籃到搖籃的技術循環(technical
    cycle)，採用 100%
    寶特瓶回收的布料、紗線與拉鍊。計畫與新光紡織公司ISP計畫配合，從制服回收，纖維融化抽絲、織布染整、成衣設計與製作，進行閉鎖式的循環。
    </div>

    <div className="bigtitle">學校投入地域活化發展之角色定位與工作規劃</div>

    <div className="boxIdea-GD">
    本校設有企管系時尚經營管理組，針對園區內紡織企業的經營方式與現況有深入的掌握，並擁有相關的知識，足以協助企業解決庫存布料的痛點。本校的角色除了是一個平台媒介之外，並可以協助解決庫存布
    技術問題，所以視為是經營管理者，而非只是仲介。經營管理的範疇包
    括實體平台建立、台灣綠色紡織品聯盟(TG)2、技術支援、庫存管理、園區內永續概念推廣、新銳設計師永續循環設計協助、國際品牌策略聯盟、內科企業淨零目標推廣、一般民眾永續時尚教育等。
    </div>

    <div className="bigtitle">需求與改善</div>

    <div className="boxIdea-GD">
    透過解決園區內紡織企業庫存布料的痛點，建置永續時尚設計循環與庫存布料實體平台與台灣綠色紡織品聯盟，提供高中職、新銳設計師免費布料與園區廠商免費制服並重複使用的永續經營模式，預期架構一個可複製於全台灣地區的USR模式，並計畫於113年進行國際服飾品牌庫存布合作計畫，達成共同落實SDGs的目標。
    </div>

    {/* ======================= */}
    <div className="grid-GD">
    <div className="boxHistory-GD">
        <p
        style={{
            textAlign: "left",
            fontSize: "20px",
            fontFamily: "Arial, sans-serif",
            color: "rgba(29, 39, 179, 0.7)",
            lineHeight: 0.3,
        }}
        >
        112年呈現項目
        </p>
        <div className="boxbox-GD">
        跨域教學創新、人才培育、場域永續發展、價值創造等面向之重點方向。
        </div>

        <p
        style={{
            textAlign: "left",
            fontSize: "20px",
            fontFamily: "Arial, sans-serif",
            color: "rgba(29, 39, 179, 0.7)",
            lineHeight: 0.3,
        }}
        >
        項目內容
        </p>
        <div className="boxbox-GD">
        發展社區型USR永續時尚計畫，透過建立台灣綠色紡織品聯盟，提高企業CSR形象。透過5門專業課程培養永續時尚經營管理人才。解決內科紡織企業庫存布料痛點，降低經營成本。透過內科永續時尚週活動，帶動一般民眾環保意識。符合聯合國永續發展項目4、8、11、12。
        </div>
    </div>
    {/* ======================= */}
    <div className="SDGs-GD">
        <img src={SDGs4} alt="SDGs4" className="SDGs_img_411" />
        <img src={SDGs11} alt="SDGs11" className="SDGs_img_411" />
    </div>
    {/* ======================= */}
    <div class="show-on-large-screen">
        <img src={blue_line} alt="blue_line" />
    </div>
    {/* ======================= */}
    <div className="SDGs-GD">
        <img src={SDGs8} alt="SDGs4" className="SDGs_img_812" />
        <img src={SDGs12} alt="SDGs11" className="SDGs_img_812" />
    </div>
    {/* ======================= */}
    <div className="boxPlan-GD">
        <p
        style={{
            textAlign: "left",
            fontSize: "20px",
            fontFamily: "Arial, sans-serif",
            color: "rgba(29, 39, 179, 0.7)",
            lineHeight: 0.3,
        }}
        >
        113年呈現項目
        </p>
        <div className="boxbox-GD">
        跨域教學創新、人才培育、場域永續發展、價值創造等面向之重點方向展、價值創造等面向之重點方向。
        </div>
        <p
        style={{
            textAlign: "left",
            fontSize: "20px",
            fontFamily: "Arial, sans-serif",
            color: "rgba(29, 39, 179, 0.7)",
            lineHeight: 0.3,
        }}
        >
        項目內容
        </p>
        <div className="boxbox-GD">
        發展國際合作之社區型USR永續時尚計畫。發展可複製型永續時尚發展模式。透過5門專業課程培養永續時尚經營管理人才。解決內科紡織企業庫存布料痛點，降低經營成本。透過內科永續時尚週活動，帶動一般民眾環保意識。符合聯合國永續發展項目4、8、11、12。
        </div>
    </div>
    </div>
    {/* ======================= */}

    <div
    className="GD_1_image"
    // style={{  backgroundImage: "url('" + GD_1 + "')",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center center',
    //     backgroundAttachment: 'fixed',
    //     width: "100%",
    //     height: "auto",
    //     backgroundSize: "cover",
    // }}
    >
    {/* <img src={GD_1} alt="GD_1" /> */}
    </div>

    <div className="bigtitle">萌芽型計畫推動目標</div>

    <div className="boxIdea-GD">
    本計畫目前已有大約30家內科/非內科廠商願意持續提供庫存布料，為能營造雙贏環境，本計畫將提供【甘丹Q胖】的回饋點數。每捐一碼布將會獲得【甘丹Q胖】一點，價值新台幣一元。112年約計發出20,000點，
    113年預計發出10,000點。高中職學生免費提供布料，不用購買點數，新
    銳設計師若有選中平台上的庫存布料，可以自由捐贈【甘丹Q胖】點
    數。本計畫所獲得之點數，將會全數回饋於內科捐贈庫存布料的廠家，
    或是園區內的弱勢團體，方式例如便利商店寄杯等。
    </div>

    <div className="care-GD">
    <div className="ulli">1.在地問題解決構想</div>

    <div className="boxNeed-GD">
        <ul style={{ listStyleType: "disc" }}>
        <li>召開座談會了解內科紡企業的問題 </li>
        <li>
            提出庫存布料解決方式:
            回收再利用、捐贈、設立共有品牌、協助台灣設計師等
        </li>
        </ul>
    </div>

    <div className="ulli">2.跨領域課程</div>

    <div className="boxNeed-GD">
        <ul style={{ listStyleType: "disc" }}>
        <li>
            除配合5門專業課程外，搭配網路行銷、色彩學、流通管理、商品行銷等課程，讓同學可以了解全貌。
        </li>
        </ul>
    </div>

    <div className="ulli">3.深化實踐場域</div>

    <div className="boxNeed-GD">
        <ul style={{ listStyleType: "disc" }}>
        <li>
            112年開始執行本計畫，並在綠色概念機制下，教育場域內一般民眾對永續環境的認識與深化
        </li>
        <li>透過國際宣傳，113年開始與國際品牌或社區進 行國際合作計畫</li>
        </ul>
    </div>
    </div>

    <div className="bigtitle">
    學生參與社會實踐行動與未來生涯發展及就業之連結
    </div>

    <div className="boxIdea-GD">
    本計畫112年預計投入三校共計100人次以上，分配於三個分項計畫，預期與園區內與非園區內紡織時尚相關企業50家以上進行合作。課程部分，實務專題製作為三年級課程，並依規定於大四進行全年實習，將規劃大四班級45位同學與捐贈庫存布之50家企業進行實習媒合。廠商其中
    不乏紡織時尚上市公司或大型企業，例如新光紡織、綿春工業、德式瑪
    公司、儒鴻企業、聚陽公司、佳和實業、潤泰集團等。
    </div>

    <div className="bigtitle">
    校外資源引入、跨域合作、區域資源整合或國際資源連結規劃
    </div>

    <div className="care-GD">
    <div className="mintitle">校外資源引入</div>

    <div className="boxNeed-GD">
        中華民國紡織業拓展會CO-Fashion 平台合作 、台灣紡織綜合研究所(TTRI)
        、中華時尚協會 (CFA) 、台南企業文化基金會、 紡織上市企業(e.g.
        昶和纖維、新光紡織..等)
    </div>

    <div className="mintitle">跨域合作</div>

    <div className="boxNeed-GD">熱浪新媒體UP直播</div>

    <div className="mintitle">國際資源連結規劃</div>

    <div className="boxNeed-GD">
        Burberry、J Crew、Footlocker 等5個品牌庫 存布料國際平台合作The UN
        Alliance for Sustainable Fashion (聯合 國永續時尚聯盟)
    </div>
    </div>
    {/* ===========最下面內容============= */}
    <div className="bigtitle">計畫執行團隊與外部合作夥伴</div>

    <div className="box_all_GD">
        <div className="box1_GD">
            <div className="box1_GD_title">計畫執行團隊</div>
                <div className="box1_GD_content">
                英宗宏、吳文彬、李慧君、劉麗蓉、黃秀瑾
                </div>
                <div className="personnel_GD">
                    <div className="min_box">
                    <div className="personnel_name_GD">李慧君</div>
                        <div className="personnel_content_GD">
                            企管系
                            <br />
                            助理教授
                            <br />
                            美國KSI碩士
                            <br />
                            制服設計規劃與生產與品質掌控
                        </div>

                    <div className="personnel_name_GD">黃秀瑾</div>
                        <div className="personnel_content_GD">
                            管系/兼任教授
                            <br />
                            服裝設計師
                            <br />
                            師大GF-EMBA
                            <br />
                            提供布料諮詢與建議
                        </div>
                    </div>
                </div>
        </div>
        {/* ==========區塊分隔============== */}

        <div className="box2_GD">
            <div className="box1_GD_title">外部合作夥伴</div>
                <div className="personnel_GD">
                    <div className="personnel_name_GD">郭盈芬</div>
                        <div className="personnel_content_GD">
                            紡拓會 / 科長
                            <br />
                            輔仁大學織品碩士
                            <br />
                            CO-Fashion網路資料庫
                            <br />
                            制服生產製作
                        </div>

                    <div className="personnel_name_GD">吳正中</div>
                        <div className="personnel_content_GD">
                            瑋霖公司董事長
                            <br />
                            英國Burberry庫存布料定期提供
                        </div>

                    <div className="personnel_name_GD">蘇立凱</div>
                        <div className="personnel_content_GD">
                            纖登公司經理
                            <br />
                            輔仁大學織品碩士
                            <br />
                            美國知名品牌庫存布料定期提供
                        </div>
                </div>
        </div>
    </div>
    {/* =================================== */}
    <Contact />
</>
);
}
