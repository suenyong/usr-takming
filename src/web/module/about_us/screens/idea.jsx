import React from "react";
import Carousel from "../../../_basic/components/carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Idea() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        USR的理念
      </h1>
      <Carousel />

      <div
        style={{
          margin: "100px auto",
          maxWidth: "1000px",
          textAlign: "justify",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h3 style={{ fontSize: "20px", lineHeight: "1.5" }}>
          USR是「University Social
          Responsibility（大學社會責任）」的簡稱。因為大學扮演著培育人才、研究學術、提升文化等重要角色，同時也肩負著服務社會、促進國家發展的使命。如何發揮大學的社會責任，讓知識與價值能夠更直接地回饋在地，大學在社會中扮演著重要角色，而大學社會責任也就成了大學面對社會期待的重要責任之一，積極參與社會發展，透過大學的知識、技術與資源幫助在地社會解決問題，培養出更具有社會責任感的人才，USR的目標讓大學更加關注在地議題，提供專業的知識與技術，對於區域發展能有更多貢獻。透過USR，大學將與當地社會、產業合作，共同發掘問題、設計解決方案，研究成果能夠直接回饋社會，進而促進區域發展。
        </h3>
      </div>
    </>
  );
}
