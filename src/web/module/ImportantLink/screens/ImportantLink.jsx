import "../styles/ImportLink.css";
import React, { useEffect, useState } from "react";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from 'react-icons/ai';
import axios from "axios";


export default function Report() {
  // const [Links, setLinks] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 900,
    });
    // fetchLinks();
  }, []);

  // const fileName = "大學生社會責任年度報告書.pdf";
  // const filePath = "/path/to/your/pdf/file.pdf";

  // const fetchLinks = () => {
  //   axios.get("http://192.192.140.222:8081/Link/Linkall")
  //     .then(response => {
  //       console.log("取得最新連結資料：", response.data);
  //       const oldLinks = [...Links];
  //       const updatedLinks = [...response.data, ...oldLinks];
  //       setLinks(updatedLinks);
  //     })
  //     .catch(error => {
  //       console.error("取得連結失敗：", error);
  //     });
  // }

  const Links = [
      { name: 'ESG遠見USR大學社會責任', link: 'https://esg.gvm.com.tw/article/25878' },
      { name: 'URS天下雜誌2023排行', link: 'https://csr.cw.com.tw/article/43195' },
      { name: 'USR2020大學社會實踐博覽會', link: 'https://www.2020usrexpo.org/' },
      { name: 'USR2021大學社會實踐博覽會', link: 'https://2021usrexpo.org/' },
      { name: 'USR2022大學社會實踐博覽會', link: 'https://2022usrexpo.org/' },
      { name: '教育部大學社會責任推動中心', link: 'https://usr.moe.gov.tw/tw' },
    ];



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
          {Links.map((Link, index) => (
            <React.Fragment key={index}>
              <span>{Link.name}<a href={Link.link} target="_blank" rel="noreferrer">{Link.link}</a></span>
              <br />
            </React.Fragment>
          ))}


          {/* 靜態網址 */}
          {/* 
          <span> 教育部大學社會責任推動中心：<a href="https://usr.moe.gov.tw/tw" target="_blank">https://usr.moe.gov.tw/tw</a></span>
          <br />
          <span>ESG遠見USR大學社會責任：<a href="https://esg.gvm.com.tw/article/25878" target="_blank">https://esg.gvm.com.tw/article/25878</a></span>
          <br />
          <span>URS天下雜誌2023排行：<a href="https://csr.cw.com.tw/article/43195" target="_blank">https://csr.cw.com.tw/article/43195</a></span>
          <br />
          <span>USR2022大學社會實踐博覽會：<a href="https://2022usrexpo.org/" target="_blank">https://2022usrexpo.org/</a></span>
          <br />
          <span>USR2021大學社會實踐博覽會：<a href="https://2021usrexpo.org/" target="_blank">https://2021usrexpo.org/</a></span>
          <br />
          <span>USR2020大學社會實踐博覽會：<a href="https://www.2020usrexpo.org/" target="_blank">https://www.2020usrexpo.org/</a></span>
          <br /> */}

          
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
