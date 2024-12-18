import AOS from "aos";
import React, { useEffect } from "react";
import Contact from "../../home/components/contactus/Contact";
import iceNoodle2 from "../images//店舖餐點.png";
import LADY3 from "../images/優雅氣質淑女風穿搭.png";
import LADY2 from "../images/冬季服飾展示.png";
import DongHe3 from "../images/史奴比擺設.png";
import HaoJi2 from "../images/各式可口小菜.png";
import TEA from "../images/嚮家涼水舖.png";
import LADY1 from "../images/夏季服飾展示.png";
import iceNoodle1 from "../images/店舖外觀.png";
import MNHnoodle from "../images/木須炒麵.png";
import DongHe1 from "../images/東禾外觀.png";
import DongHe2 from "../images/東禾菜單.png";
import fishHouseImage from "../images/百魚鮮食屋外觀.png";
import fishHousefoot from "../images/百魚鮮食屋美食.png";
import miiiEat1 from "../images/米邑 _ MiiiEat米製.png";
import miiiEat2 from "../images/米邑 _ MiiiEat米製店內.png";
import miiiEat3 from "../images/米邑 _ MiiiEat米製蛋捲.png";
import jijun from "../images/美味的拉麵和叉燒飯.png";
import iceNoodle3 from "../images/美味的餐點.png";
import ONE from "../images/西湖飲料一條街.png";
import TRIP from "../images/說茶旅人｜二口旅茶.png";
import MNH from "../images/達人麵館外觀.png";
import MNHfood from "../images/達人麵館清燉牛肉麵.png";
import HaoJi1 from "../images/醒目的招牌.png";
import TEN from "../images/食字路口.png";
import drink1 from "../images/飲料1.png";
import drink2 from "../images/飲料2.png";
import HaoJi3 from "../images/餐點.png";
import BIRD from "../images/鳥泥·飲室.png";
import LUIN from "../images/鹿飲.png";
import "../styles/BusinessDistrict.css";

export default function BusinessDistrict() {
    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, []);

    return (
        <div className="page-background">
            <div className="BD-title">西湖商圈</div>
            <div className="container">
                <div>The cuisine of XIHU</div>
                <div className="line"></div>
                    <div className="heading">日式料理</div>
                <div className="double-line"></div>
                <div>2024/4/25</div>
                <div className="section">
                    <div >
                        <img src={fishHouseImage} alt="百魚鮮食屋外觀" className="fish-img" ></img>
                        <div className="img-min-title">百魚鮮食屋外觀   (德明科大張宜萍拍攝)</div>
                    </div>
                    <div className="section-in-r">
                        <h1>西湖商圈美食推薦！！！</h1>
                        <div className="fishText">
                        #2023必吃的日式料理在西湖！
                        喜歡吃日料的學生、上班族有福囉～
                        從平價到精緻路線應有盡有，
                        滿足喜愛日料饕客的味蕾！
                        無論是下班後聚餐，
                        還是週末出門探店都很適合！
                        </div>
                    </div>
                </div>
                {/* ============================================================================================== */}
                <div className="color-block">
                <div className="section">
                    <div className="section-in-r2">
                        <div className="fishText2" >
                        首先，先來介紹位於西湖商圈的「百魚鮮食屋」，
                        它有西湖小立吞之稱！傳承平價好味道，主打海鮮
                        丼飯、握壽司及生魚片等日式料理，深受附近內湖
                        科技園區上班族及學生的喜愛。首先，先來介紹位
                        於西湖商圈的「百魚鮮食屋」，它有西湖小立吞之
                        稱！傳承平價好味道，主打海鮮丼飯、握壽司及生
                        魚片等日式料理，深受附近內湖科技園區上班族及學生的喜愛。
                        </div>
                    </div>
                    <div >
                        <img src={fishHousefoot} alt="百魚鮮食屋食物" className="fish-img" ></img>
                        <div className="img-min-title">百魚鮮食屋食物   (德明科大張宜萍拍攝)</div>
                    </div>
                </div>
                </div>
                {/* ============================================================================================== */}
                <div className="line"></div>
                <div className="section">
                    <div >
                        <div style={{marginBottom:"40px", fontSize:"30px"}}>雞吉君拉麵 </div>
                        <img src={jijun} alt="美味的拉麵和叉燒飯" className="fish-img" ></img>
                        <div className="img-min-title">美味的拉麵和叉燒飯   (德明科大張宜萍拍攝)</div>
                    </div>
                    <div className="section-in-r">
                        <div className="fishText" >
                        緊接著就來介紹號稱台北最強
                        雞白湯王者「雞吉君拉麵」啦～
                        除了主打的雞白湯拉麵，
                        竟然還有聽說也是必點的叉燒飯！
                        「叉燒飯」炙烤過後的切丁叉燒香氣十足，淋上美乃滋還有蔥花超級下飯，
                        這間幾乎每次經過都會看到滿滿的排隊人潮！可見多麼深受日式饕客的喜愛。
                        而且好消息來囉！
                        雞吉君在西門開分店囉！
                        大家有空可以去朝聖看看。
                        </div>
                    </div>
                </div>
                {/* ============================================================================================== */}
                <div>The cuisine of XIHU</div>
                <div className="line"></div>
                    <div className="heading">米邑 / MiiiEat米製</div>
                <div className="double-line"></div>
                <div>2024/4/25</div>
                <div className="section">
                    <div >
                        <img src={miiiEat1} alt="具簡約設計感的明亮店面" className="fish-img" ></img>
                        <div className="img-min-title">具簡約設計感的明亮店面   圖片來源:米邑官網(德明科大王思涵拍攝)</div>
                    </div>
                    <div className="section-in-r">
                    <h1>西湖商圈美食介紹！！！</h1>
                        <div className="fishText">
                        位於捷運西湖站1號出口的米邑，是一家
                        主打以無麩質米製品為特色的點心小舖，
                        產品使用台灣稻米為原型食材，不使用麵粉、
                        膨鬆劑、香精與其他人工添加物。健康無麩質
                        、造型卡哇依的美味點心，甚至吸引外地粉絲大老遠跑過來朝聖。
                        </div>
                    </div>
                </div>
                {/* ============================================================================================== */}
                <div className="color-block">
                <div className="section">
                    <div className="section-in-r2">
                        <div className="fishText2" >
                        創辦人自孩提時代便喜歡吃雞蛋糕，因故鄉位於西湖商圈
                        ，於是想從最初夢想開始的地方發展，製作出全天然無
                        添加的雞蛋糕。而有鑑於無麩質的健康飲食概念興起，且大
                        部分對麩質食品過敏人士，無緣享用一般蛋糕，因此他用
                        心開發無麩質產品，除了希望家裡人吃得健康，更希望將
                        童年的味道分享給大眾。
                        </div>
                    </div>
                    <div >
                        <img src={miiiEat2} alt="木質陳列架展現出米邑的自然風訴求" className="fish-img" ></img>
                        <div className="img-min-title">木質陳列架展現出米邑的自然風訴求 (德明科大王思涵拍攝)</div>
                    </div>
                </div>
                </div>
                <div>訂購專線 : 02-2875-6680</div>
                <div className="line"></div>
                {/* ============================================================================================== */}
                <div className="section">
                    <div className="section-in-r2">
                        <div className="fishText2" >
                        產品要好吃，除了烘焙技術，原料也是關鍵因素，因此
                        米邑除了研發米製點心新口感，更用心鑽研如何以台灣
                        優質的原生米，磨製成的高品質的米穀烘焙粉，並積極
                        取得ISO、無麩質與清真等食品認證，目前已透過政府管
                        道將公司的米穀粉外銷，向國際推廣台灣米。因米穀粉
                        具備易消化、不易吸油、保水力強等優點，相較於一般麵
                        粉不利麩質過敏症與乳糜瀉患者食用，以米穀粉製作的甜點
                        ，製作出的烘培產品甚至有健康加分的效果，無論男女老少皆可安心享用。
                        </div>
                    </div>
                    <div >
                        <img src={miiiEat3} alt="百魚鮮食屋食物" className="fish-img" ></img>
                        <div className="img-min-title">多種口味的蛋捲可單買也有盒裝(德明科大王思涵拍攝)</div>
                    </div>
                </div>
                <div>
                    <div className="a-left">地址: 台北市內湖區內湖路一段285巷15號</div>
                    <div className="a-right"> 營業時間:上午11:00~晚上19:30(周日公休)</div>
                </div>
                {/* ============================================================================================== */}
                <div>The cuisine of XIHU</div>
                <div className="line"></div>
                    <div className="heading">達人麵館</div>
                <div className="double-line"></div>
                <div>2023/12/13</div>
                <div className="section">
                    <div >
                        <img src={MNH} alt="達人麵館外觀" className="fish-img" ></img>
                        <div className="img-min-title">達人麵館外觀   (德明科大李宜捷拍攝)</div>
                    </div>
                    <div className="section-in-r">
                    <h1>內湖最強牛肉麵霸主三冠王</h1>
                        <div className="fishText">
                        這間隱身於內湖巷弄裡的達人麵館是相當推薦的
                        一間牛肉麵店，他們曾經榮獲台北國際牛肉麵節
                        的三冠王殊榮，在2008年的傳統組得了冠軍、2011年
                        的清燉組和創新米食組皆贏得了冠軍，看似普通的店面
                        ，卻是在地人推薦的美味呀～他們的餐點幾乎以刀削麵
                        為主，口感相當有彈性和嚼勁。一進店門就看見手
                        寫的黑板菜單，品項豐富令人都想嚐鮮呢!
                        </div>
                    </div>
                </div>
                <div className="color-block">
                <div className="section">
                <div className="section-in-r2">
                        <div className="fishText" >
                        「達人麵館」的招牌之一是其對新鮮牛肉的堅持。每日
                        挑選最優質的牛肉，保證每一口都是鮮嫩多汁。而這裡
                        的湯頭更是巧妙組合各種秘密香料，從而製成多種風味
                        獨特的湯底，從清爽的清湯到深沉的紅燒湯，滿足了不
                        同食客的口味需求。達人麵館的獨特之處不僅體現在美
                        味的牛肉麵上，更蘊含了對台灣美食文化的深刻理解。
                        </div>
                    </div>
                    <div >
                        <img src={MNHfood} alt="達人麵館清燉牛肉麵" className="fish-img" ></img>
                        <div className="img-min-title">達人麵館清燉牛肉麵(德明科大李宜捷拍攝)</div>
                    </div>
                </div>
                </div>
                <div>電話專線:2798-9901</div>
                <div className="line"></div>
                <div className="section">
                    <div >
                        <img src={MNHnoodle} alt="木須炒麵" className="fish-img2" ></img>
                        <div className="img-min-title">木須炒麵(德明科大李宜捷拍攝)</div>
                    </div>
                    <div className="section-in-r">
                        <div className="fishText2">
                        木須炒麵絕對也是本店必點的，也是我私心最愛的一道
                        主食，一上桌醬香味香氣逼人且調味適中，小鳥胃的人
                        絕對吃不完！所以建議可以點一份兩個人吃，份量實在
                        驚人呀～ cp值超高！一入口就感受到滿滿的鍋氣，再
                        加上Q彈的刀削麵，口感更是豐富好吃。
                        </div>
                    </div>
                </div>
                <div>
                    <div className="a-left">地址: 114 臺北市內湖區內湖路一段9巷7號1樓</div>
                    <div className="a-right"> 營業時間:11:00 am - 2:30 pm, 5:00 pm - 8:30 pm</div>
                </div>
                {/* ============================================================================================== */}

                <div>The fashion of XIHU</div>
                <div className="line"></div>
                    <div className="heading">HEY!LADY</div>
                <div className="double-line"></div>
                <div>2023/9/27</div>
                <div className="section">
                    <div >
                        <img src={LADY1} alt="春夏服飾展示" className="fish-img" ></img>
                        <div className="img-min-title">春夏服飾展示(受訪者提供)</div>
                    </div>
                    <div className="section-in-r">
                        <div className="fishText2">
                        HEY ! LADY是一家在疫情期間成立的時尚流行服飾店，商品內
                        容包含女裝、配飾及女鞋，標榜獨特、質感與流行，每周
                        不定期上架不同風格的新品，滿足顧客時尚需求，讓顧客
                        可以在一站式購物中穿搭出自己喜歡的風格。商品價格屬中
                        價位，還時常有促銷活動，CP值很高，小資女孩都可以負擔。店
                        內環境採用溫馨的裝修風格，運用清新的色調和巧妙的陳列方
                        式，展示高質感、簡約百搭的女裝，營造出舒適的購物氣氛。
                        </div>
                    </div>
                </div>
                <div className="color-block">
                <div className="section">
                <div className="section-in-r2">
                        <div className="fishText" >
                        創業故事:闆娘有個服飾夢，趁疫情漸漸趨緩，籌備將近一
                        年的時間，在大台北地區尋找店址，因機緣巧合找到西湖店
                        面，於2022年12月4號正式開幕。闆娘希望每位女士都能多
                        愛自己一點，「Go to pick, buy some chic.」挑你所
                        選、擇你所愛，生活是自己的，盡情打扮盡情可愛，HEY! LADY的衣
                        服穿搭，都能讓妳以簡單且帶點設計感的服飾，穿出自我風格與自信美。
                        </div>
                    </div>
                    <div >
                        <img src={LADY2} alt="秋冬服飾展示" className="fish-img2" ></img>
                        <div className="img-min-title">秋冬服飾展示(受訪者提供)</div>
                    </div>
                </div>
                </div>
                <div>連絡電話: 0906567827</div>
                <div className="line"></div>
                <div className="section">
                <div className="section-in-r2">
                        <div className="fishText" >
                        除了實體店，您還可以蝦皮線上店面輕鬆購物，闆娘也會在FB及IG發
                        布新品照片，讓顧客隨時隨地都能掌握到最新的時尚資訊。HEY! LADY期待
                        為您提供一個愉快的時尚購物體驗。
                        <li>FB:h.heylady</li>
                        <li>IG:h.heylady</li>
                        </div>
                    </div>
                    <div >
                        <img src={LADY3} alt="優雅氣質淑女風穿搭" className="fish-img" ></img>
                        <div className="img-min-title">優雅氣質淑女風穿搭(受訪者提供)</div>
                    </div>
                </div>
                
                <div>
                    <div className="a-left">地址: 台北市內湖區內湖路一段285巷63弄2號</div>
                    <div className="a-right"> 營業時間:11:00 am -  8:00 pm  週日公休</div>
                </div>
                {/* ============================================================================================== */}
                
                <div>The cuisine of XIHU</div>
                <div className="line"></div>
                    <div className="heading">豪記水餃</div>
                <div className="double-line"></div>
                <div>2024/4/25</div>
                <div className="section">
                    <div >
                        <img src={HaoJi1} alt="醒目的招牌" className="fish-img" ></img>
                        <div className="img-min-title">醒目的招牌(德明科大蔡家佳拍攝)</div>
                    </div>
                    <div className="section-in-r">
                    <h1>西湖商圈美食推薦！！！</h1>
                        <div className="fishText2">
                        當你想不到吃什麼的時候，第一個想到的是不是
                        水餃呢?今天帶各位到隱藏在323巷弄中，從捷運
                        站步行僅需5分鐘的「濠記水餃」。這間外觀看起
                        來平平無奇的小店，即便水餃僅有兩種口味，每日
                        也會有諸多顧客為了這盤美味飽滿的水餃而上門，
                        是內湖人心目中水餃Top 1。
                        </div>
                    </div>
                </div>
                <div className="color-block">
                <div className="section">
                <div className="section-in-r2">
                        <div className="fishText2" >
                        濠記在西湖商圈已長達11年，店名是取自老闆姓名中的「濠」字。
                        來到這裡必點的就是招牌「手工水餃」，水餃粒粒大顆、紮實
                        、美味又多汁，口感令人回味無窮，難怪不管是中午時段的上班
                        族，還是晚餐時段的住戶，稍微晚點可能就一位難求，需要稍加等候。
                        </div>
                    </div>
                    <div >
                        <img src={HaoJi2} alt="各式可口小菜" className="fish-img" ></img>
                        <div className="img-min-title">各式可口小菜(德明科大蔡家佳拍攝)</div>
                    </div>
                </div>
                </div>
                <div>訂購專線:2627-7371</div>
                <div className="line"></div>
                <div style={{marginBottom:"40px", fontSize:"30px"}}>Uber  。  熱食  。  冷凍水餃 </div>
                <div className="section">
                <div >
                        <img src={HaoJi3} alt="餐點" className="fish-img2" ></img>
                        <div className="img-min-title">餐點、小菜(德明科大蔡家佳拍攝)</div>
                    </div>
                    <div className="section-in-r">
                        <div className="fishText2">
                        老闆是一位非常熱心、活潑的男士，而店內環境寬
                        敞簡約，有種家的感覺，為整個用餐體驗增色不少。菜
                        單設計清晰明瞭，除了最受歡迎的招 牌水餃外，還提
                        供了多樣化的選擇，例如榨菜肉絲面、滷肉飯、各式小
                        菜(素雞、海帶、豆乾、豆腐等）等，自助醬料台也是很貼
                        心的服務，讓顧客根據自己的口味調配醬料。而與Uber合
                        作，為不想出門卻又想品嚐美味水餃的顧客們提供便利
                        服務。另外，冷凍水餃的販售，更讓顧客可以在家中隨時享受到店裡的美味。
                        牛肉湯餃、韭菜和高麗菜水餃、陽春麵，配上豆干滷蛋
                        是顧客的最愛。
                        </div>
                    </div>
                </div>
                <div>
                    <div className="a-left">地址: 114 臺北市內湖區內湖路一段323巷10號</div>
                    <div className="a-right"> 營業時間:11:00 am - 2:30 pm, 5:00 pm - 8:30 pm</div>
                </div>
                {/* ============================================================================================== */}

                <div>The cuisine of XIHU</div>
                <div className="line"></div>
                    <div className="heading">西湖涼麵魷魚羹</div>
                <div className="double-line"></div>
                <div>2023/4/25</div>
                <div className="section">
                    <div >
                        <img src={iceNoodle1} alt="店鋪外觀" className="fish-img" ></img>
                        <div className="img-min-title">店鋪外觀(德明科大王思涵拍攝)</div>
                    </div>
                    <div className="section-in-r">
                    <h1>西湖商圈美食介紹！！！</h1>
                        <div className="fishText2">
                        炎熱的夏天，是不是想吃可以消暑的美食呢？ 我們帶
                        大家來了解高人氣的西湖涼麵魷魚羹！從西湖捷運站1
                        號出口步行2分鐘就會抵達西湖涼麵，雖然店面外觀看
                        起來平淡無奇，菜單看起來也很普通，但食物卻令人讚
                        不絕口，是西湖商圈著名的隱藏版美食。附近居民和上
                        班族為了吃上一碗涼麵與羹湯，常常需要耐心排隊等待。
                        </div>
                    </div>
                </div>
                <div className="color-block">
                <div className="section">
                <div className="section-in-r2">
                        <div className="fishText2" >
                        西湖涼麵-魷魚羹在西湖商圈已營業13年，是一家非常受
                        歡迎的老字號店家，每到用餐時間，老闆與老闆娘總是忙
                        得不可開交。每位顧客來店必點上一碗涼麵，可見這招
                        牌菜品的美味程度。店裡有特製的大蒜和辣椒提供給用
                        餐的客人使用，加了調味之後滋味更是大大升級。由於
                        嚮家涼水鋪就在旁邊，人手一杯飲料搭配上可口的涼麵，
                        清涼爽感迎面而來，令人暑氣頓消。西湖商圈有名又好
                        吃的涼麵，肯定非西湖涼麵-魷魚羹莫屬，趕快來品嚐看看吧！
                        </div>
                    </div>
                    <div >
                        <img src={iceNoodle2} alt="店鋪餐點" className="fish-img" ></img>
                        <div className="img-min-title">店鋪餐點(德明科大王思涵拍攝)</div>
                    </div>
                </div>
                </div>
                <div>訂購專線: 02-2799-2463</div>
                <div className="line"></div>
                <div style={{marginBottom:"40px", fontSize:"30px"}}>外送專區 </div>
                <div className="section">
                <div >
                        <img src={iceNoodle3} alt="美味的小吃" className="fish-img2" ></img>
                        <div className="img-min-title">美味的小吃(德明科大王思涵拍攝)</div>
                    </div>
                    <div className="section-in-r">
                        <div className="fishText2">
                        店內座位區明亮乾淨，菜單的內容以涼麵以及羹湯為主，並備有各式小菜供客人
                        挑選，附設醬料區則有辣油、辣醬、蒜頭、白胡椒與
                        黑醋等供客人選用調味。另外，店家還與Uber外送合
                        作，讓客人在家不用出門也能享受到美味的涼麵與羹湯。
                        </div>
                    </div>
                </div>
                <div>
                    <div className="a-left">地址: 114台北市內湖區內湖路一段323巷4弄18號</div>
                    <div className="a-right"> 營業時間: 周一~周六早上07:00~下午13:30/周日公休</div>
                </div>
                {/* ============================================================================================== */}

                <div>The drinks of XIHU</div>
                <div className="line"></div>
                    <div className="heading">探索西湖商圈的多元飲品天地</div>
                <div className="double-line"></div>
                <div>2023/4/25</div>
                <div className="drink-container">
                    <img src={drink1} className="drink-img"/>
                    <div className="drink-text">西湖商圈緊鄰捷運西湖站，交通非常便利，進入商圈500公尺內就有超過數十家手搖飲料店，是許多上班族和學生的最愛。這裡提供著各種口味獨特、風格迥異的飲品，讓人在品味的過程中享受無盡的驚喜和樂趣。現在，讓我們來一一介紹這些飲料店吧！ </div>
                    <img src={drink2} className="drink-img"/>
                </div>
                {/* ===== */}
                <div className="color-block">
                <div className="section2">
                    <div className="text-block">
                        <div className="drink-title">鹿飲 LUIN</div>
                        <div className="drink-store">
                            首先是西湖市場裡面的「鹿飲LUIN」，大家最推薦的招牌就是3Q鮮奶茶，裡面是珍珠搭配椰果，珍珠咬起來Q彈帶勁，店家也時常在 Facebook 推出限定優惠，去市場吃飯時，千萬別錯過嘍！
                        </div>
                    </div>
                    <div className="image-block">
                        <img src={LUIN} alt="鹿飲 LUIN" />
                        <div className="img-min-title">整潔明亮的外觀(德明科大李宜捷攝)</div>
                    </div>
                </div>
                </div>
                {/* ===== */}
                <div className="section2">
                    <div className="image-block">
                        <img src={BIRD} alt="鳥泥·飲室" />
                        <div className="img-min-title">寬敞明亮的外觀(德明科大李宜捷攝)</div>
                    </div>
                    <div className="text-block">
                        <div className="drink-title">鳥泥·飲室</div>
                        <div className="drink-store">
                        走進市場大樓旁的小巷，就可以看到「鳥泥·飲室」，飲料種類從單茶、水果茶到氣泡飲應有盡有，無論何時都是滿滿的人潮，而且週三還可以免費加珍珠！除了他們的招牌奶韻金萱外，厲害的還有水果茶系列，都是使用真材實料的，是許多內湖上班族和學生的飲料口袋名單。</div>
                    </div>
                </div>
                {/* ===== */}
                <div className="section2">
                    <div className="image-block">
                        <img src={TRIP} alt="說茶旅人｜二口旅茶" />
                        <div className="img-min-title">簡約的裝潢(德明科大李宜捷攝)</div>
                    </div>
                    <div className="text-block">
                        <div className="drink-title">說茶旅人｜二口旅茶</div>
                        <div className="drink-store">
                        緊接著要介紹的是「說茶旅人｜二口旅茶」，店內裝潢雅緻，佈置簡約大方，令人感受到一種舒適的氛圍，而且店員也都非常熱情和友善，招牌紅茶歐蕾加珍珠口感獨特，堪稱是學生們下課放鬆身心的絕佳選擇！ </div>
                    </div>
                </div>
                {/* ===== */}
                <div className="color-block">
                <div className="section2">
                    <div className="text-block">
                        <div className="drink-title">食字路口</div>
                        <div className="drink-store">
                        再來就是「食字路口」，提供各種口味豐富、營養美味的現打新鮮果汁和果汁混合飲品，而且製作完飲料後還會再給一小杯請顧客品嚐，喝上一杯冰冰涼涼的西瓜汁，絕對讓人消暑解渴暢快到底，有別於其他果汁店「食字路口」還有販售各類茶飲，口感香醇Q彈的焦糖珍珠奶茶，是除了果汁類以外的必點之一！！</div>
                    </div>
                    <div className="image-block">
                        <img src={TEN} alt="食字路口" />
                        <div className="img-min-title">顯眼的招牌(德明科大李宜捷攝)</div>
                    </div>
                </div>
                </div>
                {/* ===== */}
                <div className="section2">
                    <div className="image-block">
                        <img src={TEA} alt="嚮家涼水舖" />
                        <div className="img-min-title">復古的裝潢(德明科大李宜捷攝)</div>
                    </div>
                    <div className="text-block">
                        <div className="drink-title">嚮家涼水舖</div>
                        <div className="drink-store">
                        主打輕熟普洱的「嚮家涼水舖」，飲料種類齊全，各式茶飲、咖啡都有，其中最具特色的是普洱茶系列，普洱是經由特殊的熟成製程，並與珍貴罕見的崑崙天山雪菊互相燻製香氣成特殊風味，喜愛嚐鮮的顧客，只要是普洱系列對是每種口味都要點一遍的吧～ </div>
                    </div>
                </div>
                {/* ===== */}
                <div className="color-block-2">
                <div className="section3">
                    <div className="image-block">
                        <img src={ONE} alt="西湖飲料一條街" />
                        <div className="img-min-title">西湖飲料一條街(德明科大李宜捷攝)</div>
                    </div>
                    <div className="text-block">
                        <div className="W-M">
                        除了上面那些特色飲料店外，還有許多連鎖飲料店例如清心、Mr.Wish、COMEBUY、CoCo都可、迷客夏等等西湖商圈通通有！無論您喜歡清新的水果茶、濃郁的奶茶還是創意的特色飲品，西湖商圈的飲料店都能滿足您的口味。歡迎您來到這裡，探索各種美味，享受愜意的飲品體驗。
                        </div>
                    </div>
                </div></div>
                

                <div>The coffec of XIHU</div>
                <div className="line"></div>
                    <div className="heading">東禾咖啡館</div>
                <div className="double-line"></div>
                <div>2023/4/25</div>
                <div className="section">
                    <div >
                        <img src={DongHe1} alt="店鋪外觀" className="fish-img" ></img>
                        <div className="img-min-title">店鋪外觀(德明科大張宜萍拍攝)</div>
                    </div>
                    <div className="section-in-r">
                        <div className="fishText2">
                        「東禾咖啡」是一間結合咖啡和簡餐咖啡店，到今
                        年已營業30年之久，是一家非常受歡迎的老字號店
                        家，鄰近西湖捷運站，交通便利。店裡除了好喝的
                        咖啡和簡餐之外，店裡還擺設著滿滿闆娘喜愛的史努比周邊，是許多人朝聖的一大賣點！
                        儘管前陣子面臨疫情有受到影響，但東禾依舊能經營到現
                        在，而且生意好到用餐時間總是忙得不可開交，到底有什
                        麼厲害的秘訣呢? 讓我們來一探究竟。
                        </div>
                    </div>
                </div>
                <div className="color-block">
                <div className="section">
                <div className="section-in-r2">
                        <div className="fishText2" >
                        東禾餐點的部份區分為咖啡飲品和簡餐，由右邊菜單可
                        以感受到價位非常親民，而且竟然還有銷售市面上少見
                        的虹吸式咖啡。店內使用的進口咖啡豆來自相當多的國
                        家和產地，擁有的風味各異，能滿足不同的咖啡愛好者
                        ，且綜合咖啡是老闆特調的，喜歡新鮮感的朋友，不妨
                        點一杯來品嚐看看，此外店裡主打的皆為純手工調製，
                        充分展現咖啡職人的執著與熱情。
                        </div>
                    </div>
                    <div >
                        <img src={DongHe2} alt="店鋪餐點" className="fish-img" ></img>
                        <div className="img-min-title">店鋪餐點(德明科大張宜萍拍攝)</div>
                    </div>
                </div>
                </div>
                <div>訂購專線: 02-2658-8731</div>
                <div className="line"></div>
                <div className="section">
                <div >
                        <img src={DongHe3} alt="店內史努比擺設" className="fish-img2" ></img>
                        <div className="img-min-title">店內史努比擺設(德明科大張宜萍拍攝)）</div>
                    </div>
                    <div className="section-in-r">
                        <div className="fishText2">
                        東禾咖啡在競爭激烈的市場中屹立不搖，因交通便利、裝潢獨特
                        ，且堅持咖啡品質與創新。從親民價格到多樣飲品，特別是少見
                        的虹吸式咖啡，展現了對消費者需求的細心考量。每杯手工調製
                        的咖啡，專業與熱情使其在疫情下依然吸引忠實顧客，成為老顧
                        客心中一再回訪、其味無窮的朝聖地。
                        </div>
                    </div>
                </div>
                <div>
                    <div className="a-left">地址: 114台北市內湖區環山路一段9巷5號</div>
                    <div className="a-right"> 營業時間: 周一~周五 10：00-14：00，假日公休</div>
                </div>
                {/* ============================================================================================== */}

            </div>
            <Contact />
        </div>
    );
}
