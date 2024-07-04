import React from "react";
import "../styles/GD.css";
import Contact from "../../home/components/contactus/Contact";
import GD_1 from "../images/GD_1.png";
import blue_line from "../images/blue_line.png";
import SDGs4 from "../images/sdgs4.png";
import SDGs11 from "../images/sdgs11.png";
import SDGs8 from "../images/sdgs8.png";
import SDGs12 from "../images/sdgs12.png";
import GMMlogo from "../images/GMMlogo.jpg";
import { AiOutlineHome } from 'react-icons/ai';

export default function GD() {
    return (
        <>

            <h1 data-aos="zoom-out-down" className="dynamic" style={{
                textAlign: 'center',
                color: '#fff',
                backgroundColor: "rgba(16, 30, 227, 0.4)",
                width: "40%",
                marginRight: "30%",
                marginLeft: "30%",
                marginTop: "13%",
            }}>
                德明甘丹內科園區時尚實踐計畫
            </h1>
            <div className="bigtitle" >計畫整體發展之總目標</div>

            <div className="boxIdea-GD">
                本計畫的場域為內湖科學園區，地價昂貴，部分紡織企業將公司場所堆放庫存布，逐年增加負擔，處理方式並不環保，因此若能將庫存布捐 贈並回收製作該企業的制服並給予回饋機制，或是提供制服給園區內的 餐廳使用，除了讓庫存布料有了循環機會，也可以培養園區內民眾的永續概念。本計畫預計於113年執行【全回收】計畫，可將永續經營的概念提高到另一層次，達到搖籃到搖籃的技術循環(technical cycle)，採用 100% 寶特瓶回收的布料、紗線與拉鍊。計畫與新光紡織公司ISP計畫配合，從制服回收，纖維融化抽絲、織布染整、成衣設計與製作，進行閉鎖式的循環。

            </div>

            <div className="bigtitle">學校投入地域活化發展之角色定位與工作規劃</div>

            <div className="boxIdea-GD">
                本校設有企管系時尚經營管理組，針對園區內紡織企業的經營方式與現況有深入的掌握，並擁有相關的知識，足以協助企業解決庫存布料的痛點。本校的角色除了是一個平台媒介之外，並可以協助解決庫存布 技術問題，所以視為是經營管理者，而非只是仲介。經營管理的範疇包括實體平台建立、台灣綠色紡織品聯盟(TG)2、技術支援、庫存管理、園區內永續概念推廣、新銳設計師永續循環設計協助、國際品牌策略聯盟、內科企業淨零目標推廣、一般民眾永續時尚教育等。
            </div>

            <div className="bigtitle">需求與改善</div>

            <div className="boxIdea-GD">
                透過解決園區內紡織企業庫存布料的痛點，建置永續時尚設計循環與庫存布料實體平台與台灣綠色紡織品聯盟，提供高中職、新銳設計師免費布料與園區廠商免費制服並重複使用的永續經營模式，預期架構一個可複製於全台灣地區的USR模式，並計畫於113年進行國際服飾品牌庫存布合作計畫，達成共同落實SDGs的目標。

            </div>

            {/* ======================= */}
            <div className="grid-GD">
                <img src={SDGs4} alt="SDGs4" className="SDGs_img_411812" />
                <img src={SDGs11} alt="SDGs11" className="SDGs_img_411812" />
                <img src={SDGs8} alt="SDGs4" className="SDGs_img_411812" />
                <img src={SDGs12} alt="SDGs11" className="SDGs_img_411812" />
                <img src={GMMlogo} alt="GMMlogo" className="SDGs_img_logo" />
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


            <div className="bigtitle">
                學生參與社會實踐行動與未來生涯發展及就業之連結
            </div>

            <div className="boxIdea-GD">
                本計畫112年預計投入三校共計100人次以上，分配於三個分項計畫，預期與園區內與非園區內紡織時尚相關企業50家以上進行合作。課程部分，實務專題製作為三年級課程，並依規定於大四進行全年實習，將規劃大四班級45位同學與捐贈庫存布之50家企業進行實習媒合。廠商其中不乏紡織時尚上市公司或大型企業，例如新光紡織、綿春工業、德式瑪公司、儒鴻企業、聚陽公司、佳和實業、潤泰集團等。
            </div>

            {/* ===========最下面內容============= */}
            <div className="bigtitle">計畫執行團隊與外部合作夥伴</div>

            <div className="box_all_GD">
                <div className="box1_GD">
                    <div className="box1_GD_title">計畫執行團隊</div>
                    <div className="box1_GD_content">
                        企管系：英宗宏老師、吳文彬老師、李慧君老師
                    </div>
                    <div className="personnel_GD">
                        <div className="min_box">
                            <div className="personnel_name_GD">劉麗蓉</div>
                            <div className="personnel_content_GD">
                                企管系教師/ 輔仁大學織品碩士/ 商品企劃與流行趨勢提供
                            </div>
                            <div className="personnel_name_GD">黃秀瑾</div>
                            <div className="personnel_content_GD">
                                企管系教師/ 服裝設計師 師大GF-EMBA /提供布料諮詢與建議
                            </div>
                            <div className="personnel_name_GD">李慧君</div>
                            <div className="personnel_content_GD">
                                企管系 助理教授/美國KSI碩士/制服設計規劃與生產與品質掌控
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
                            專科畢業
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
            {/* ====按鈕==== */}
            <a href="/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>
            {/* =================================== */}
            <Contact />
        </>
    );
}
