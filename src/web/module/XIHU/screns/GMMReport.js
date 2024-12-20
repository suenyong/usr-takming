import AOS from "aos";
import React, { useEffect } from "react";
import Contact from "../../home/components/contactus/Contact";
import GMM12 from "../images/136巷登山口50巷及68巷登山.png";
import GMM13 from "../images/136巷登山口的大樹.png";
import Mountain from "../images/Mountain.png";
import manyMountains from "../images/manyMountains.png";
import GMM17 from "../images/俯瞰台北市.png";
import GMM10 from "../images/刺葉桂櫻.png";
import STONE from "../images/剪刀石.png";
import MAP from "../images/地圖.png";
import GMM16 from "../images/大岩壁的步道.png";
import GMM5 from "../images/小樹.png";
import GMM4 from "../images/從剪刀石眺望的台北盆地.png";
import GMM1 from "../images/打石場遺跡.png";
import GMM2 from "../images/採石場介紹立牌.png";
import GMM8 from "../images/流星蛺蝶.png";
import GMM7 from "../images/漏斗形的凹坑.png";
import GMM9 from "../images/紅子莢蒾.png";
import GMM6 from "../images/草.png";
import GMM14 from "../images/華山亭、論健亭、重陽亭.png";
import GMM11 from "../images/車桑子.png";
import GMM15 from "../images/重陽亭旁的岩石.png";
import GMMmap from "../images/金面山地圖 .png";
import GMM3 from "../images/陡峭的大岩壁與巨型砂岩.png";
import "../styles/GMMReport.css";


export default function GMMReport() {
    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, []);
    return(
        <>
        <div className="page-background">
            <div className="GMM-title">金面山報導 </div>
            <div className="container">
                {/* ============================= */}
                <div className="line"></div>
                <div className="mountain-title">
                    <img src={Mountain} alt="山" className="mountain-img"/>
                    <div className="heading2">金面山的故事</div>
                    <div></div>
                </div>
                <div className="double-line"></div>
                {/* ============================= */}
                <div className="color-block2">
                <div className="story-text">
                    早期的金面山在清代時期是打石場，當時興建台北城時，所用的石頭都是由金面山運送下來的；從山上眺望遠方，金面山腳離基隆河不遠。
                    一百多年前，山上石頭由職業「石夫」在現地切割後，先以斜坡道滑下山，接著就能很快拉到以往的北勢湖渡船頭（今內湖路一段91巷附近）上船，走水路運送到台北城。
                    這樣的地理環境，創造了當時這座採石場產出約三萬顆石材的盛況。如今航運沒落，基隆河也在1990年代完成截彎取直，新生地上蓋滿住宅與科學園區，水脈都在地下了。採石業也在二次戰後逐漸廢棄，運送石頭的斜坡道也被蔓草遮蔽。
                </div>
                </div>
                {/* ============================= */}
                <div className="story-img-space">
                    <div>
                        <img src={GMM1} alt="打石場遺跡" />
                        <div>打石場遺跡 (德明科大何家寧拍攝)</div>
                    </div>
                    <div>
                        <img src={GMM2} alt="採石場介紹立牌" />
                        <div>採石場介紹立牌 (德明科大何家寧拍攝)</div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="color-block2">
                <div className="section">
                <div className="section-in-r2">
                        <div className="fishText3" >
                        金面山上有著各種崎嶙的岩石，有如豆腐般的砂岩，一塊接著一塊，石階路成了岩路。再往上走，會看見一大片的巨砂岩，在陽光下由上望下看會發現巨砂岩發出閃閃光亮，俯身細看，岩石裡細小的石英粒發出閃亮。
                        </div>
                    </div>
                    <div >
                        <img src={GMM3} alt="陡峭的大岩壁與巨型砂岩" className="fish-img2" ></img>
                        <div className="img-min-title">陡峭的大岩壁與巨型砂岩 (德明科大何家寧拍攝)</div>
                    </div>
                </div>
                </div>
                {/* =========================== */}
                <img src={manyMountains} className="manyM" />
                {/* =========================== */}
                <div className="line"></div>
                    <div className="story-text">
                        在金面山上最著名的景點就是剪刀石；許多民眾都會特別爬上去拍照。兩個石頭組合起來像剪刀，但也有人覺得像鳥的嘴巴；無論像什麼，這都是自然奇景。
                    </div>
                {/* ============================= */}
                <div className="story-img-space">
                    <div>
                        <img src={STONE} alt="剪刀石" className="fish-img2"/>
                        <div className="img-min-title">剪刀石 (德明科大陳予傑拍攝)</div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="color-block2">
                <div className="section">
                    <div className="section-in-r2">
                        <div className="fishText4" >
                            從剪刀石往松山機場那個方向眺望出去可以看見整個台北盆地，景色優美。
                        </div>
                    </div>
                    <div >
                        <img src={GMM4} alt="從剪刀石眺望的台北盆地" className="fish-img2" ></img>
                        <div className="img-min-title">從剪刀石眺望的台北盆地 (德明科大陳予傑拍攝)</div>
                    </div>
                </div>
                </div>
                {/* ============================= */}
                <div className="section">
                    <div >
                        <img src={GMMmap} alt="金面山地圖" className="fish-img2" ></img>
                        <div className="img-min-title">
                            金面山地圖 (OpenStreetMap 貢獻者 
                            來捐款吧 網站與API項目)
                        </div>
                    </div>
                    <div className="section-in-r2">
                        <div className="fishText4" >
                            金面山步道登山入口位於台北市內湖區環山路一段136巷內，海拔僅有258公尺高，雖然海拔不高，但非常具有挑戰性。
                        </div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="image-line">
                    <img src={GMM5} />
                    <img src={GMM6} />
                </div>
                <div className="line2"></div>
                {/* ============================= */}
                <div className="line"></div>
                <div className="mountain-title">
                    <img src={Mountain} alt="山" className="mountain-img"/>
                    <div className="heading2">金面山生態</div>
                    <div></div>
                </div>
                <div className="double-line"></div>
                {/* ============================= */}
                <div className="color-block2">
                <div className="story-text">
                    從環山路一段136巷入口的登山步道，沿路都是利用本
                    地的石英砂岩做成的石道。在登山步道沙地上常可看到
                    一個個漏斗形的凹坑，是俗稱沙豬的「蟻獅」為獵食螞
                    蟻所設的陷阱，易讓獵物陷落而掙脫不開。金面山有非
                    常多的物種 例如大冠鷲、台灣藍鵲、流星蛺蝶、長吻白
                    獵蟲、龜殼花……等，光是蝴蝶就多達90多種。
                </div>
                </div>
                {/* ============================= */}
                <div className="story-img-space">
                    <div>
                        <img src={GMM7} alt="漏斗形的凹坑" style={{width:"250px"}}/>
                        <div>漏斗形的凹坑  (德明科大陳予傑拍攝)</div>
                    </div>
                    <div>
                        <img src={GMM8} alt="流星蛺蝶" />
                        <div>流星蛺蝶 (荒野保護協會提供)</div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="color-block2">
                <div className="story-text">
                    金面山因為氣候乾燥，植物多屬於耐乾旱型植物；生長在此的植
                    物如：小葉赤楠、紅楠、小花鼠刺、青剛櫟、茜草樹、大頭茶喜歡
                    生態的人非常適合來登山 路上有各種讓你意想不到的驚喜。上山
                    的路途中地上隨處可見的螞蟻剛好看到他們正在搬運食物山上還有
                    松樹，松樹適合生長在較高海拔的地方，可見金面山冬天的時候
                    受風面較大，溫度有達到才可能長出松樹。山上還有很多紅子莢，非常茂盛。
                </div>
                </div>
                {/* ============================= */}
                <img src={manyMountains} className="manyM" />
                {/* =========================== */}
                <div className="line"></div>
                <div className="story-img-space">
                    <div>
                        <img src={GMM9} alt="紅子莢蒾" className="fish-img" style={{width:'500px'}}/>
                        <div className="img-min-title">紅子莢蒾 (德明科大陳予傑拍攝)</div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="color-block2">
                <div className="section">
                    <div className="section-in-r2">
                        <div className="fishText4" >
                            這個植物很特別，有帶著淡淡的杏仁味；而且這個植物在金面山非常容易找到，不過要小心的是他小時候的葉緣會有刺。
                        </div>
                    </div>
                    <div >
                        <img src={GMM10} alt="刺葉桂櫻" className="fish-img2" ></img>
                        <div className="img-min-title">刺葉桂櫻   (德明科大陳予傑拍攝)</div>
                    </div>
                </div>
                </div>
                {/* ============================= */}
                <div className="section">
                    <div >
                        <img src={GMM11} alt="車桑子" className="fish-img2" style={{width:'250px'}}></img>
                        <div className="img-min-title">
                            車桑子 (德明科大系陳予傑拍攝)
                        </div>
                    </div>
                    <div className="section-in-r2">
                        <div className="fishText4" >
                            在步道的中段很容易看的這個植物，這種植物的果實很像是荷包蛋，他的果實很輕，又剛好在金面山這種，風大的地方，他可以隨心所欲的，散播他的種子出去。
                        </div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="image-line">
                    <img src={GMM5} />
                    <img src={GMM6} />
                </div>
                <div className="line2"></div>
                {/* ============================= */}
                <div className="line"></div>
                <div className="mountain-title">
                    <img src={Mountain} alt="山" className="mountain-img"/>
                    <div className="heading2">開箱金面山</div>
                    <div></div>
                </div>
                <div className="double-line"></div>
                <div className="double-text">探索台北內湖金面山：市區中的自然瑰寶</div>
                <div>作者：何家寧</div>
                {/* ============================= */}
                <div className="section">
                    <div >
                        <img src={MAP} alt="地圖" className="fish-img2"></img>
                    </div>
                    <div className="section-in-r2">
                        <div className="fishText4" style={{lineHeight:'2'}} >
                        位於台北市內湖區西北側的金面山，是少數地理位置位於市區內的山峰之一。這座山以其山清水秀的自然景觀和便利的交通成為許多登山愛好者的首選。今天，我們將深入探索這座充滿魅力的山嶺。金面山擁有一條環狀步道，全長2.2公里，沿途風景優美，適合各類登山者。步道從基點到頂點—海拔258公尺的剪刀石山，只需一小時即可攀登。儘管步道有一定的難度，但提供多條路線以供選擇，並設有涼亭和椅子，方便山友休息。無論是新手還是經驗豐富的登山者，都可以根據個人喜好和體能狀況來規劃挑戰。
                        </div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="color-block2">
                    <div className="story-text">
                    前往金面山的交通非常便捷。乘坐捷運文湖線至西湖站下車，沿著內湖路一段285巷(西湖商圈)前行，即可由距離捷運站最近的登山口(環山路一段136巷)開始登山健行。金面山的主要登山口共有三個，除了環山路一段136巷、還有環山路二段50巷及68巷，後兩個登山口也可透過公車或Ubike到達。
                    </div>
                </div>
                {/* ============================= */}
                <div className="story-img-space">
                    <div>
                        <img src={GMM12} alt="登山口" className="fish-img" style={{width:'600px'}}/>
                        <div className="img-min-title">
                            136巷登山口(德明科大何家寧同學拍攝) 50巷及68巷登山口(德明科大葉冠琳同學拍攝)
                        </div>
                    </div>
                </div>
                {/* ============================= */}
                <img src={manyMountains} className="manyM" />
                {/* =========================== */}
                <div className="line"></div>
                <div className="line"></div>
                <div className="section">
                    <div >
                        <img src={GMM13} alt="136巷登山口的大樹" className="fish-img2" ></img>
                        <div className="img-min-title">
                        136巷登山口的大樹 (德明科大何家寧拍攝)
                        </div>
                    </div>
                    <div className="section-in-r2">
                        <div className="fishText4" style={{lineHeight:'2'}} >
                        從136巷登山口進入金面山後，首先映入眼簾的是一棵大樹，這裡經過整理後成為登山客熱身和休息的場所。許多學校老師會帶著學生來此，並在此拍照留念，為這段登山旅程留下美好的回憶。
                        繼續向上行進，正式進入金面山後，會遇到一個岔路口。左邊的路線通往清代遺留下來的採石場，右邊的路線則是通往傳說中的大岩壁。這兩條路線各有特色和難度。
                        </div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="line"></div>
                <div className="story-img-space">
                    <div>
                        <img src={GMM14} alt="華山亭、論健亭、重陽亭" className="fish-img" style={{width:'1000px', margin:'10% 0 0 0'}}/>
                        <div className="img-min-title" style={{marginBottom:'10%'}}>華山亭、論健亭、重陽亭(德明科大何家寧同學拍攝)</div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="color-block2">
                <div className="section">
                    <div className="section-in-r2">
                        <div className="fishText4" >
                        對於新手來說，左邊的路線較為適合。這條路線沿途會經過華山亭、重陽亭和論劍亭，儘管地圖上看起來距離不遠，但由於金面山的路徑較陡，因此中途有涼亭或大石頭可以坐下來休息。
                        </div>
                    </div>
                    <div >
                        <img src={GMM15} alt="重陽亭旁的岩石" className="fish-img2" ></img>
                        <div className="img-min-title">重陽亭旁的岩石(德明科大葉冠琳同學拍攝)</div>
                    </div>
                </div>
                </div>
                {/* ============================= */}
                <div className="image-line">
                    <img src={GMM5} />
                    <img src={GMM6} />
                </div>
                <div className="line2"></div>
                {/* ============================= */}
                <div className="section">
                    <div >
                        <img src={GMM16} alt="大岩壁的步道" className="fish-img2" style={{width:'300px'}}></img>
                        <div className="img-min-title">大岩壁的步道(行銷系陳予傑同學拍攝)</div>
                    </div>
                    <div className="section-in-r2">
                        <div className="fishText4" >
                            相較之下，右邊的路線起初較為輕鬆，但在大約15分鐘後，會遇到一大片陡峭的石頭，這就是傳說中的「大岩壁」。
                            這段路因長年風化形成，後來經過整理，現在可以扶著旁邊的繩索向上攀爬。這段攀爬充滿挑戰，但也增添了登山的樂趣。
                        </div>
                    </div>
                </div>
                {/* ============================= */}
                <div className="color-block2">
                    <div className="story-text">
                    不管選擇哪條路線，攀登的過程雖然辛苦，但當你站在頂峰的那一刻，所有的努力都是值得的。無論是左邊還是右邊的路線，最終都會通往金面山最著名的拍照打卡點—剪刀石。在這裡，不僅可以拍出美麗的照片，還能俯瞰整個台北盆地的壯麗景色，令人流連忘返。
                    來攀爬金面山的民眾請注意自身安全，山上蚊蟲較多，天氣變化也比較大。建議穿著長褲、攜帶足夠的水和保暖衣物，確保一個安全舒適的登山體驗。總之，金面山以其獨特的地理位置和豐富的自然景觀，成為台北市區內一顆璀璨的明珠。無論是當地居民還是外地遊客，都能在這裡找到一片寧靜的天地，享受大自然的饋贈。邀請您在繁忙的都市生活中，抽出時間來探索這座山嶺，體驗一次難忘的登山之旅。
                    </div>
                </div>
                {/* ============================= */}
                <img src={GMM17} alt="俯瞰台北市" style={{width:'100%'}} ></img>
                
            </div>
        <Contact />
        </div>
        </>
    )
}