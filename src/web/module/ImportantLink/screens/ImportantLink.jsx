import AOS from "aos";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { ImportantLinkApi } from "../../../_basic/Protocol/ImportantLink";
import Contact from "../../home/components/contactus/Contact";
import "../styles/ImportLink.css";

export default function Report() {
  const [importLink, setImportLinkData] = useState([]);
  useEffect(() => {
    AOS.init({
        duration: 900,
    });
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await ImportantLinkApi.getAllImportLinks();
        if (Array.isArray(data)) {
          setImportLinkData(data);
          // console.log("重要連結所有資料:", data);
        } else {
          console.error("取得所有重要連結失敗");
        }
      } catch (error) {
        console.error("取得所有重要連結失敗", error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <>
      <h1
        data-aos="zoom-out-down" className="dynamic"
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
        重要連結
      </h1>
      <div className="centered-container-important">
        <div className="boxImport">
          {importLink.map((linkItem, index) => (
            <React.Fragment key={index}>
              <span>
                {linkItem.name}：
                <a href={linkItem.link} target="_blank" rel="noreferrer">
                  {linkItem.link}
                </a>
              </span>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Return Button */}
      <a href="/" className="return-But">
        <AiOutlineHome className="return-object" />
      </a>
      <Contact />
    </>
  );
}
