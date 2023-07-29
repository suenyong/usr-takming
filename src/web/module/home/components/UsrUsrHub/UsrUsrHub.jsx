import React, { useEffect } from 'react';
import '../UsrUsrHub/sryles/UsrUsrHub.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for default animations

export default function UsrUsrHub(){

useEffect(() => {
    AOS.init({
    duration: 600,
    });
}, []);

return (
    <>
    <h1 style={{ 
        textAlign: 'center', 
        color: '#fff',
        backgroundColor:"#90cbc0",
        width:"40%",
        marginRight:"30%",
        marginLeft:"30%",
        }}>
        計畫項目
        </h1>

    <div className="container-push">
        <button className="textUSRHUB-button" data-aos="slide-right">
        USR HUB
        </button>
        <button className="textUSR-button" data-aos="slide-right">
        USR
        </button>
    </div>
    </>
);
};

