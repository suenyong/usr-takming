import "../styles/GMM_history.css";
import { AiOutlineHome } from "react-icons/ai";
import React, { useEffect } from "react";
import Contact from "../../home/components/contactus/Contact";
import { AiFillStar } from 'react-icons/ai';
import AOS from "aos";

export default function GMM_history() {
    useEffect(() => {
        AOS.init({
            duration: 700,
        });
    }, []);

    return (
        <>
            <h1 data-aos="zoom-out-down" id="GMM_intro">景點介紹</h1>

            <div className="Gbox_history">
                <img src={require("..//images/路線圖.png")} id="Map"></img>
                <div id="remind" >
                    <h4 id="red">*(2)號入口 從西湖捷運站下車會經過258巷到德明財經科技大學</h4>
                    <div className="Road"><AiFillStar className="Road_star"></AiFillStar>建議路線：</div>
                    <div className="Road_2" id="y">喜歡挑戰的遊客可以選擇比較有難度的大岩壁<span>(黃色路線)</span></div>
                    <div className="Road_2" id="b">喜歡輕鬆休閒或是帶小朋友的可以選擇<span>(藍色路線)</span></div>
                </div>
            </div>


            <div className="Gbox_history">
                <div className="Content_history">
                    <div className="GMM_Mtitle_history">
                        <img src={require("..//images/圖片1.png")} className="GMM_num"></img>
                        打石場
                    </div>
                    <div className="GMM_box_history">
                        創建年代為清光緒八年，於清代及日治時期被稱為北勢湖採石場， 乃臺北城築城之官方採石場。
                        清末光緒年間計畫興築臺北府城牆時，選用內湖及大直一帶山區所產的石材作為建材。
                        現在臺北城牆的舊石料尚可在下水道及金山南路電信局旁舊監獄圍牆看到可為證。內湖山區的石料開採除了供應城牆外，一直持續到日據時期及戰後，成為民間建材來源之一。
                        近年為保護自然生態與環境，石場已經停止開採。現場遺留許多歷年開鑿痕跡，且當年石料從山上以專闢斜坡道滑下之遺跡尚存，足為臺北建城史之實證。現場環境景觀優美，並保持許多當年開鑿石料遺蹟，具歷史文化價值。
                    </div>
                    <img src={require("..//images/rock.jpg")} className="Rock"></img>
                </div>

                <div className="Content_history">
                    <div className="GMM_Mtitle_history">
                        <img src={require("..//images/圖片4.png")} className="GMM_num"></img>
                        論劍亭
                    </div>
                    <div className="GMM_box_history" id="OSC">
                        論劍亭的由來可以追溯到35年前，一個由山友搭建的涼亭。於2000年政治大選時，眾多山友在此討論政治，周先生說不論政治，論山就好，但因金面山不大，不適合命名為論山亭，在這裡閒聊就像是論劍，故命名為論劍亭。
                        論劍亭於2008年前被人放火燒毀，於2010年左右由大地工程處重建，同期也搭建了重陽亭、華山亭。論劍亭的其中一面牆，貼滿了金面山的-台北盆地的攝影作品與山間雲彩的，周先生是個喜歡登山攝影的社區人士，每天早上都會到論劍亭報到，所以也被譽為金面山土地公。
                        論劍亭由在地耆老周永良先生命名，上面還有許多他拍攝的照片，是台北內湖環山路登山步道的秘境。緊鄰剪刀石山山頂的兩層式木造涼亭，空間寬敞，二樓設有座椅、掛鐘，一樓展覽圖片。通往剪刀石前的站點，是最大的涼亭，有上下兩層各有不同的景觀。此處無提供水源及廁所，純粹是可遮陽、擋雨的休息處。很多人會在此處休息或是用餐，向外左邊可看到碧湖，右側則是美麗華，前面正是101大樓視野非常好，是眺望內湖及台北市的絕佳地點。
                        看到論劍亭等於幾乎快到達了山頂，剩下不到200公尺平緩的山徑。
                    </div>
                    <img src={require("..//images/pavilion.jpg")} className="Pavilion"></img>
                </div>

                <div className="Content_history">
                    <div className="GMM_Mtitle_history">
                        <img src={require("..//images/圖片3.png")} className="GMM_num"></img>
                        大壁岩
                    </div>
                    <div className="GMM_box_history">
                        自然景觀，大坡度面積岩壁，沿途陡峭的路段都有設置拉繩，大岩壁上有人工鑿出的階梯，繩索也設置完善，建議手套帶著可防手拉繩時擦傷。只要穩穩地踏好步伐，再藉由拉繩輔助，回頭就可眺望台北市景。
                        想體驗低難度的攀爬可以選擇此路線，算是比較特殊有趣的地形，需要些微的手腳並用比較方便安全。雖然難度不高但還是具有一定的危險性，所以基本的穿著跟鞋子就要選過，還是要稍微準備一下，至少抓地力比較好些。
                        如果不常運動或是真的有懼高症特別怕的人而還想要來的話可以先考慮一下狀況或是走入口左邊的路線，雖然是巨石路也要稍微爬，但是沒有大岩壁這邊陡峭也比較安全，另外大岩壁這邊其實情況允許的話可以回頭望一下，沒有遮蔽物風景視野超級美！
                    </div>
                    <img src={require("..//images/stone.jpg")} className="Stone"></img>
                </div>

                <div className="Content_history">
                    <div className="GMM_Mtitle_history">
                        <img src={require("..//images/圖片2.png")} className="GMM_num"></img>
                        竹月寺
                    </div>
                    <div className="GMM_box_history" id="CT">
                        竹月寺主殿主供千手觀世音菩薩，副供脅侍文殊菩薩與普賢菩薩，兩側分別是伽藍菩薩與韋馱菩薩。右側副殿地藏王菩薩。左側副殿觀音菩薩(普陀山觀音)。
                        在悠久的中國歷史，觀音菩薩除了是民間信仰的代表，更是家家戶戶都知道的神佛，所以如果是喜歡走道場，參拜上香的人，這裡是不錯的地點非常合適。從入山口起算約500公尺，耗時約25分鐘腳程，此寺寧靜祥和，也有熱情的住持阿姨會向您解說附近的地理介紹。
                    </div>
                    <img src={require("..//images/temple.jpg")} className="Temple"></img>
                </div>

                <div className="Content_history">
                    <div className="GMM_Mtitle_history">
                        <img src={require("..//images/圖片5.png")} className="GMM_num"></img>
                        大金面山(剪刀石)
                    </div>
                    <div className="GMM_box_history" id="GA">
                        金面山俗稱剪刀石山，海拔258公尺，位於內湖金龍寺之西側山稜。 由於其山頂的巨岩含石英細顆， 在陽光下閃閃發亮，因此被稱為金面山。
                        山頂有一巨石，凸向北方，從碧山巖望去，頗似一穿出天際的剪刀，故又名「剪刀石山」。有人說它像鳥嘴般或是螃蟹的大螯等，無論像什麼，都是自然界的奇觀。金面山雖然山勢不高，但因峰頂巨岩疊錯，氣勢偉峻，視野開闊，頗具大山的格局，因此假日不乏登山客到此一遊。
                        剪刀石山最讓人振奮的，就是這無價的視野景觀，不論是台北101、台北大巨蛋、松山機場、基隆河、麥帥一二橋、象山…等，都在眼前一一呈現。

                    </div>
                    <img src={require("..//images/gaduo.jpg")} className="Gaduo"></img>
                </div>
            </div>

            {/* ====按鈕==== */}
            <a href="http://localhost:80/" className="return-But">
                <AiOutlineHome className="return-object"></AiOutlineHome>
            </a>

            <Contact />
        </>
    );
}
