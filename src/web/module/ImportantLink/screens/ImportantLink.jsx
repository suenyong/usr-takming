import "../styles/ImportLink.css";
import React, { useEffect, useState } from "react";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';
import axios from "axios";


export default function Report() {
  const [Links, setLinks] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    fetchLinks();
    // const mockLinks = [
    //   { name: 'Google', link: 'https://www.google.com' },
    //   { name: 'Facebook', link: 'https://www.facebook.com' },
    //   // 添加更多模拟数据...
    // ];

    // setLinks(mockLinks);

  }, []);

  // const fileName = "大學生社會責任年度報告書.pdf";
  // const filePath = "/path/to/your/pdf/file.pdf";

  const fetchLinks = () => {
    axios.get("http://localhost:8080/Link/Linkall")
      .then(response => {
        console.log("取得最新連結資料：", response.data);
        const oldLinks = [...Links];
        const updatedLinks = [...response.data, ...oldLinks];
        setLinks(updatedLinks);
      })
      .catch(error => {
        console.error("取得連結失敗：", error);
      });
  }

  return (
    <>
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
        重要連結
      </h1>
      <div className="centered-container-important">
        <div className="boxImport">

          教育部大學社會責任推動中心：<a href="https://usr.moe.gov.tw/tw">https://usr.moe.gov.tw/tw</a>
          <br />
          ESG遠見USR大學社會責任：<a href="https://esg.gvm.com.tw/article/25878">https://esg.gvm.com.tw/article/25878</a>
          <br />
          URS天下雜誌2023排行：<a href="https://csr.cw.com.tw/article/43195">https://csr.cw.com.tw/article/43195</a>
          <br />
          USR EXPO 2022大學社會實踐博覽會：<a href="https://2022usrexpo.org/">https://2022usrexpo.org/</a>
          <br />
          USR EXPO 2021大學社會實踐博覽會：<a href="https://2021usrexpo.org/">https://2021usrexpo.org/</a>
          <br />
          USR EXPO 2020大學社會實踐博覽會：<a href="https://www.2020usrexpo.org/">https://www.2020usrexpo.org/</a>
          <br />
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
