import "../styles/Promote.css";
import React, { useEffect } from "react";
import no from "../images/no-pic.png";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';


export default function Promote() {


  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, [])

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
        推動單位-研究發展處
      </h1>


      <div className="container_promote">
        值此發展學校特色，創造競爭優勢之際，各個行政、學術單位無不卯足全力朝邁向優質科技大學的目標邁進。研究發展處的功能為建立產官學合作關係，促成國際學術交流，統籌學術研究推廣、教補款經費規劃與分配暨輔導學生生涯規劃等相關事項，其定位係扮演校內資源整合與學校對內及對外窗口的角色。
      </div>


      {/* 以下是介紹成員 */}
      <div className="team-members">
        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：研發長</div>
            <div className="image-container">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：陳百盛</p>
            <p>分機：2400</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：研發長專案助理</div>
            <div className="image-container" >
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：陳軒宇</p>
            <p>分機：2401</p>
            <p>業務項目：協助研發長計畫執行</p>
          </div>
        </div>
      </div>

      <div className="team-members">
        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：學術推廣組組長</div>
            <div className="image-container">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：黃小玉</p>
            <p>分機：2410</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：學術推廣組雇員</div>
            <div className="image-container">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：羅慧嫺</p>
            <p>分機：2411</p>
          </div>
        </div>
      </div>

      <div className="team-members">
        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：產學合作組組長</div>
            <div className="image-container">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：李琇玲</p>
            <p>分機：2420</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：產學合作組雇員</div>
            <div className="image-container">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：謝秀貞</p>
            <p>分機：2421</p>
          </div>
        </div>
      </div>

      <div className="team-members">
        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：職涯發展中心主任</div>
            <div className="image-container" >
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：蕭宋榮</p>
            <p>分機：2430</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：職涯發展中心雇員</div>
            <div className="image-container">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：蘇長毅</p>
            <p>分機：2431</p>
          </div>
        </div>
      </div>

      <div className="team-members">
        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：職涯發展中心雇員</div>
            <div className="image-container">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：何慧真</p>
            <p>分機：2432</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：國際交流中心主任</div>
            <div className="image-container" >
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：林 丹</p>
            <p>分機：2440</p>
          </div>
        </div>
      </div>

      <div className="team-members">
        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：國際交流中心雇員</div>
            <div className="image-container">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：簡怡婷</p>
            <p>分機：2441</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="job-title">職稱：國際交流中心助理</div>
            <div className="job-title"></div>
            <div className="image-container">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <p>姓名：杜氏鳳</p>
            <p>分機：2442</p>
          </div>
        </div>
      </div>
      {/* ====按鈕==== */}
      <a href="http://localhost:3000/" className="return-But">
        <AiOutlineHome className="return-object"></AiOutlineHome>
      </a>
      <Contact />
    </>
  );
}
