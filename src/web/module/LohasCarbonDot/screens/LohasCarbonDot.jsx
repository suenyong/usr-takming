import React, { useEffect, useState } from "react";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from "react-icons/ai";

export default function LohasCarbonDot() {
const [Links, setLinks] = useState([]);

useEffect(() => {
AOS.init({
    duration: 900,
});
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
    樂活碳點
    </h1>

    {/* ====按鈕==== */}
    <a href="/" className="return-But">
    <AiOutlineHome className="return-object"></AiOutlineHome>
    </a>
    <Contact />
</>
);
}
