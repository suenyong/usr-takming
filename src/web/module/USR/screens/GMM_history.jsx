
import "../styles/GMM_history.css"
import { AiOutlineHome } from 'react-icons/ai';
import React from "react";

export default function GMM_history() {
    return (
        <>
            <div className="GMM_title">歷史與景點介紹</div>
            <div className="GMM_box">金面山有三個主要的景點，分別為竹月寺、論劍亭與剪刀石。竹月寺主殿主供 千手觀世音菩薩，脅侍(副供) 文殊菩薩與 普賢菩薩，兩側分別是伽藍菩薩與韋馱菩薩。右側副殿地藏王菩薩。左側副殿觀音菩薩(普陀山觀音)。在悠久的中國歷史，觀音菩薩除了是民間信仰的代表，更是家家戶戶都知道的神明，所以如果是喜歡走道場，參拜上香的人，這裡會是適合你的安心好去處，從入山口起算約500公尺，耗時約25分鐘腳程，此寺寧靜祥和，也有熱情的住持阿姨會向您解說附近的地理介紹。(----論劍亭內容----)金面山俗稱剪刀石山，海拔252公尺，位於內湖金龍寺之西側山稜。 由於其山頂的巨岩含石英細顆， 在陽光下閃閃發亮，因此被稱為金面山。 山頂有一巨石，凸向北方，從碧山巖望去，頗似一穿出天際的剪刀，故又名「剪刀石山」。 金面山雖然山勢不高，但因峰頂巨岩疊錯，氣勢偉峻， 視野開闊，頗具大山的格局，因此假日不乏登山客到此一遊。</div>

            {/* ====按鈕==== */}
            <a href="http://localhost:3000/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>
        </>
    );
}