import React, { useEffect, useState } from "react";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from "react-icons/ai";
import "../styles/chillax.css"


export default function Chilax() {
    const [Links, setLinks] = useState([]);
    // const [displayText, setDisplayText] = useState("");
    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, []);
    const handleIGButtonClick = () => {
        // setDisplayText("123");
    };

    return (
        <>
            <h1
                data-aos="zoom-out-down" className="dynamic"
                style={{
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#c35555",
                    width: "40%",
                    marginRight: "30%",
                    marginLeft: "30%",
                    marginTop: "13%",
                }}
            >
                Chillax-綠色觀光遊體驗平台
            </h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', margin: '100px' }}>
                <a href="https://www.instagram.com/chillax_chillllll?igsh=bXEyeHR2eGJpd2Fp" target="_blank" rel="noopener noreferrer" className="in_btn">
                    <img src={require("../image/instagramlogo.png")} style={{ marginLeft: '5px' }} />
                    <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com/share/ozfBRj8RRAkLGt7y/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="fb_btn">

                    <img src={require("../image/facebooklogo.png")} style={{ marginLeft: '5px' }} />
                    <span>facebook</span>
                </a>
                <a href="https://youtube.com/@chillax-yh3zi?si=b_JagU-NiRfuCVM-" target="_blank" rel="noopener noreferrer" className="you_btn">
                    <img src={require("../image/youtubelogo.png")} />
                    <span>YouTube</span>
                </a>
                <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=185hgyae" target="_blank" rel="noopener noreferrer" className="line_btn">
                    <img src={require("../image/linelogo.png")} />
                    <span>Line</span>
                </a>
                <a href="https://www.threads.net/@chillax_chillllll" target="_blank" rel="noopener noreferrer" className="threads_btn">
                    <img src={require("../image/threadslogo.png")} />
                    <span>Threads</span>
                </a>
            </div>


            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '150px', margin: '50px' }}>
                <img
                    src={require("../image/undraw_Cooking_p7m1.png")}
                    style={{ width: '300px', height: '250px' }}
                />
                <div style={{ fontSize: '24px', color: '#c35555', fontWeight: 'bold', textAlign: 'left' }}>
                    大學生參與，地方創生
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '150px', marginTop: '100px' }}>
                <div style={{ fontSize: '24px', color: '#c35555', fontWeight: 'bold', textAlign: 'left' }}>
                    跨平台Android及IOS技術應用
                </div>
                <img
                    src={require("../image/undraw_undraw_calling_mcgf_gyrw.png")}
                    style={{ width: '300px', height: '250px' }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '10px' }}>
                <button style={{ background: 'white', border: 'none', padding: '0' }}>
                    <img src={require("../image/google_play.png")} style={{ width: '250px', height: '175px' }} alt="Google Play" />
                </button>
                <button style={{ background: 'white', border: 'none', padding: '0' }}>
                    <img src={require("../image/applestorelogo.png")} style={{ width: '200px', height: '65px' }} alt="Apple Store" />
                </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '-25px', marginLeft: '30px' }}>
                <button style={{ background: 'white', border: 'none', padding: '0', marginRight: '40px' }}>
                    <img src={require("../image/android_Qrcode.png")} style={{ width: '190px', height: '190px' }} alt="Google Play" />
                </button>
                <button style={{ background: 'white', border: 'none', padding: '0' }}>
                    <img src={require("../image/ios_Qrcode.png")} style={{ width: '190px', height: '190px' }} alt="Apple Store" />
                </button>
            </div>


            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '150px', margin: '50px', marginTop: '100px' }}>
                <img
                    src={require("../image/undraw_Winter_walk_re_rx25.png")}
                    style={{ width: '300px', height: '250px' }}
                />
                <div style={{ fontSize: '24px', color: '#c35555', fontWeight: 'bold', textAlign: 'left' }}>
                    報名參與各種的有趣好玩活動
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '150px', margin: '100px' }}>
                <div style={{ fontSize: '24px', color: '#c35555', fontWeight: 'bold', textAlign: 'left' }}>
                    參與任務集點兌換商品
                </div>
                <img
                    src={require("../image/undraw_online_groceries_a02y.png")}
                    style={{ width: '300px', height: '250px' }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', width: '600px', height: '60px', margin: '0 auto' }}>

                <img src={require("../image/Dailycheckin.png")} style={{ width: '300px', height: '80px' }} />
                <img src={require("../image/aimap.png")} style={{ width: '300px', height: '80px' }} />
                <img src={require("../image/aichallenge.png")} style={{ width: '300px', height: '80px' }} />
                <img src={require("../image/food.png")} style={{ width: '300px', height: '80px' }} />
                <img src={require("../image/qa.png")} style={{ width: '300px', height: '80px' }} />
                <img src={require("../image/bookcon.png")} style={{ width: '300px', height: '80px' }} />

            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '150px', margin: '160px' }}>
                <img
                    src={require("../image/undraw_Selecting_team_re_ndkb.png")}
                    style={{ width: '300px', height: '250px' }}
                />
                <div style={{ fontSize: '24px', color: '#c35555', fontWeight: 'bold', textAlign: 'left' }}>
                    社群分享旅遊經驗、照片
                </div>
            </div>


            {/* ====按鈕==== */}
            <a href="/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>
            <Contact />

        </>
    );
}
