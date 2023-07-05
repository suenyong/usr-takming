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
          <h3 className="contact-text">研究處  分機：2401</h3>
        </div>
      </div>
    </div>
  );
}
