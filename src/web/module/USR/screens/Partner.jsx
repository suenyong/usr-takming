import AOS from "aos";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { PartnerApi } from "../../../_basic/Protocol/PartnerApi";
import { Protocol } from '../../../_basic/Protocol/Protocol';
import Contact from "../../home/components/contactus/Contact";
import "../styles/Partner.css";

export default function Partner() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, [])

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await PartnerApi.getAllPartner();
        if (Array.isArray(data)) {
          setTeamData(data);
        } else {
          console.error("取得所有夥伴失敗");
        }
      } catch (error) {
        console.error("取得所有夥伴失敗", error);
      } finally {
      }
    };
    fetchAllData();
  }, []);

  return (
    <>
      <h1 data-aos="zoom-out-down" className="dynamic" style={{
        textAlign: 'center',
        color: '#fff',
        backgroundColor: "#90cbc0",
        width: "50%",
        marginRight: "30%",
        marginLeft: "25%",
        marginTop: "13%",
      }}>
        USR合作夥伴
      </h1>

      <div className="team-members">
        <div className="member-info">
        {teamData.map((member, index) => (
          <div key={index}>
              <div className="image_container_promote">
                <img src={`${Protocol.API_URL}/Partner/image/${member.partnerImage}`} alt={member.partnerName} />
                <div className="job">{member.organizeName}</div>
                <div className="job">{member.positionName} {member.partnerName}</div>
              </div>
            </div>
        ))}
        </div>
      </div>


      {/* ====按鈕==== */}
      <a  href="/" className="return-But">
        <AiOutlineHome className="return-object"></AiOutlineHome>
      </a>
      <Contact />
    </>
  );
}
