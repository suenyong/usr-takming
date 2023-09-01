import "../styles/Promote.css";
import React, { useEffect, useState } from "react";
import no from "../images/no-pic.png";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';
import axios from "axios";

export default function Promote() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 700,
    });

    fetchTeamData();
  }, [])

  const fetchTeamData = () => {
    axios.get("http://localhost:8081/Promote/PromoteAll")
      .then(response => {
        console.log("取得團隊資料：", response.data.data);
        setTeamData(response.data.data);
      })
      .catch(error => {
        console.error("取得團隊資料失敗：", error);
      });
  }


  return (
    <>
      <h1 data-aos="zoom-out-down" style={{
        textAlign: 'center',
        color: '#fff',
        backgroundColor: "#90cbc0",
        width: "50%",
        marginRight: "30%",
        marginLeft: "25%",
        marginTop: "13%",
      }}>
        推動單位
      </h1>


      <div className="container_promote">
        值此發展學校特色，創造競爭優勢之際，各個行政、學術單位無不卯足全力朝邁向優質科技大學的目標邁進。研究發展處的功能為建立產官學合作關係，促成國際學術交流，統籌學術研究推廣、教補款經費規劃與分配暨輔導學生生涯規劃等相關事項，其定位係扮演校內資源整合與學校對內及對外窗口的角色。
      </div>

      <div className="team-members">
        {teamData.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="member-info" id="boxp">
            <div className="job-title">{member.posts}</div>
              <div className="image-container_promote">
              <img src={`http://localhost:8081/Promote/uploads/${member.profileImagePath}`} alt={member.name} />
              </div>
              <div className="job"><p>{member.name}</p></div>
              {/* {member.jobTitle} */}
              
            </div>
          </div>
        ))}
      </div>

      {/* <div className="team-members">
        <div className="team-member">
          <div className="member-info">
          <div className="job-title">計畫主持人</div>
            <div className="image-container_promote">
              <img src={no} alt="德明財經科技大學研究發展處" />
            </div>
            <div className="job-title">研發長</div>
            <p>姓名：陳百盛</p>
          </div>
        </div>
      </div> */}




      {/* ====按鈕==== */}
      <a  href="/" className="return-But">
        <AiOutlineHome className="return-object"></AiOutlineHome>
      </a>
      <Contact />
    </>
  );
}
