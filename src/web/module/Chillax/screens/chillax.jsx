import React, { useEffect, useState } from "react";
import Contact from "../../home/components/contactus/Contact";
import AOS from "aos";
import { AiOutlineHome } from "react-icons/ai";

export default function Chilax() {
    const [Links, setLinks] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, []);

    return (
        <>

            <Contact />
        </>
    );
}
