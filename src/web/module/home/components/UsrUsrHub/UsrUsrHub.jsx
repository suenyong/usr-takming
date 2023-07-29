import React, { useEffect } from 'react';
import '../UsrUsrHub/sryles/UsrUsrHub.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS for default animations
import { Route, Routes, Link } from "react-router-dom";
import UH109 from '../../../USRHUB/screens/UH109';

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
        <Link to="/UH109" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className="textUSRHUB-button" 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
                USR HUB
            </button>
        </Link>
        <button className="textUSR-button" 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
        USR
        </button>
    </div>
    <Routes>
        <Route path="/UH109" element={<UH109 />} />
    </Routes>
    </>
);
};

