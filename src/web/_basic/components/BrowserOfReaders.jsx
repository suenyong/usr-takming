import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BrowserOfReaders(){
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const response = await axios.get('/api/IPBW');
                setVisitorCount(response.data);
            } catch (error) {
                console.error('取得訪客計數時發生錯誤:', error);
            }
        };

        fetchVisitorCount();
    }, []);

    return (
        <div>
            <h1>入站人數: {visitorCount}</h1>
        </div>
    );
}

