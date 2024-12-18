import AOS from "aos";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { CasesApi } from "../../../_basic/Protocol/CasesApi";
import { CountryApi } from "../../../_basic/Protocol/CountryApi";
import Protocol from "../../../_basic/Protocol/Protocol";
import Contact from "../../home/components/contactus/Contact";
import ServerContent from "../components/serverContent";
import "../styles/Service.css";

export default function Service() {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true); // 加載狀態
  const [cardData, setCardData] = useState([]); // 新增狀態以存儲案例數據
  useEffect(() => {
    AOS.init({
        duration: 900,
    });
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await CountryApi.getAllCountry();
        if (Array.isArray(data)) {
          setServiceData(data);
        } else {
          console.error("取得所有據點失敗");
        }
      } catch (error) {
        console.error("取得所有據點失敗", error);
      } finally {
        setLoading(false); // 確保在請求完成後更新加載狀態
      }
    };

    const fetchCardData = async () => {
      try {
        const cards = await CasesApi.getAllCases(); // 假設的API
        setCardData(cards);
      } catch (error) {
        console.error("取得案例資料失敗", error);
      }
    };

    fetchAllData(); // 直接調用 fetchAllData
    fetchCardData(); // 直接調用 fetchCardData
  }, []);

  const handleButtonClick = (contentId, link) => {
    window.open(link, '_blank'); // 打開 PDF 文件
  };

  
  return (
    <>
      <h1 data-aos="zoom-out-down"
        style={{
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#90cbc0",
          width: "40%",
          marginRight: "30%",
          marginLeft: "30%",
          marginTop: "17%",
        }}
      >
        服務足跡
      </h1>

      {loading ? (
        <div>資料加載中...</div> // 加載中提示
      ) : (
        <>
          <ServerContent ServerData={{ serviceData }} />
          {/* 所有 PDF */}
          <div className="service-heading3">所有案例</div>
          <div className="boxA">
            {cardData.map((card, index) => (
              <div key={index} className="cardA">
                <div className="card-body">
                  <div className="card-date">{card.contentDate}</div>
                  <div className="card-title">{card.title}</div>
                  <button
                    className="btn-Link"
                    onClick={() => handleButtonClick(card.casesId, card.pdfLink)}
                  >
                    Open PDF
                  </button>
                </div>
                <img src={`${Protocol.API_URL}/cases/image/${card.image}`} alt={card.title} />
              </div>
            ))}
          </div>
        </>
      )}
      {/* ====按鈕==== */}
      <a href="/" className="return-But">
        <AiOutlineHome className="return-object" />
      </a>

      <Contact />
    </>
  );
}
