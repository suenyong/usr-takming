import "./styles/Contact.css";
import React from 'react';
import takming1 from "./images/takming1.jpg";

export default function Contact() {
  return (
    <div className="contact-container" >
      <div className="image-text-layout" >
        
        <div>
          <img src={takming1} alt="德明財經科技大學研究發展處" style={{ width: '100%', height: 'auto' }} />
        </div>

        <div className="text-container">
          <h3 className="contact-text">德明財經科技大學研究發展處</h3>
          <h3 className="contact-text">學校地址：11451台北市內湖區環山路一段56號</h3>
          <h3 className="contact-text">電子郵件：aged101@takming.edu.tw</h3>
          <h3 className="contact-text">電話：(02)26585801</h3>
          <h3 className="contact-text">研究處分機：2401</h3>
          <h3 className="contact-text">USR官網由 德明財經科技大學<br/>資訊管理系113學年度畢業專題生開發<br/>
          ZHANG SHU TING, TANG ZONG RAY,NI MIN ZHU,
          <br/>  
          JIANG MING FANG, LEE TING HSUAN, SU EN YONG
          </h3>
        </div>
      </div>
    </div>
  );
}
