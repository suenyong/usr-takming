import React from 'react';
import "../../CaseStudies/styles/CaseStudies.css";
import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import US_image_1 from "../../CaseStudies/images/US_image_1.png";
import ASEAN_5 from "../../CaseStudies/images/ASEAN_5.JPG";
import { SettingCaseStudies } from "../../CaseStudies/screens/SettingCaseStudies";
import Contact from '../../home/components/contactus/Contact';
import { AiOutlineHome } from 'react-icons/ai';




export default function CaseStudies() {



  const carouselItems1 = [
    {
      image: US_image_1,
      alt: "US1",
      date: "109/09/04(五)第一場德明創新服務座談-電商社群創新商業模式，由東森得意購股份有限公司研發新事業部『顧武男』執行長，為我們拉開序幕，從產業資歷分享到目前東森集團的新創商業模式超前部屬等豐富的實戰分享，讓所有聽講者受益良多。雖然礙於時間短暫，但不減大家的熱情交流，是本次座談會最棒的收穫！",
    },
    {
      image: US_image_1,
      alt: "US1",
      date: "109/09/23(三)第二場德明服務創新座談-兩岸電商創新商業模式，由東森得意購股份有限公司研發事業部襄理「郭俊昱」蒞臨分享，郭襄理可說是有為青年，年紀輕輕但口條問答應對卻令人印象深刻，自然真誠的表現讓所有聽講人都受益良多。本次活動議題：兩岸電商創新商業模式，透過兩岸傳統電商及社交新媒體電商的差異化，及電商產業時下趨勢的分析，也藉由此次能大家互相交流。這次活動也有許多本校學生參加，有此可知，創新的時下商業模式議題，也是深受眾多族群感興趣，也歡迎大家再度參與第三場座談會10/7(三)AI商業應用【自動機器學習如何普及AI和創造商業價值】。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/10/07(三)第三場德明服務創新座談會-自動機器學習如何普及AI和創造商業價值，由行動貝果共同創辦人兼營運長『王易如』蒞臨分享。網路資料繁多複雜，該如何利用自動機器學習協助企業打造適合又精準的AI系統，從大數據中萃取出各項重要資訊，利用這些資訊幫助企業做出關鍵決策創造商業價值。營運長也分享許多知名品牌合作夥伴的實例及經驗，讓貼近生活的分享方式讓大家更容易理解。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/10/14(三)第四場德明服務創新座談-MarTech的下一步：如何透過AI行銷自動化創造零售新商機。由awoo阿物事業開發副總『廖重榮』蒞臨分享。隨著隱私權意識抬頭，開啟了cookieless的時代，企業如何從AdTech走向MarTech，如何利用最新的行銷科技精確切入消費者和業主之間。講者也透過合作夥伴的實例分享帶領大家一同學習。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/10/28(三)第五場德明服務創新座談–無須寫程式也能做AI智能零售，由優選科技執行長劉憶涵蒞臨分享，專為零售商打造A.I.工具平台，致力於開發智能小工具，協助零售商節省時間，創造價值。講座過程中，除了講述AI在商業和零售業的應用還有實作AI智能銷售平台，讓大家都能體驗。最後講師還分享自己創業上的心路歷程，並分享許多青年創業機會及辦法，就是希望有更多人能在創業這條路上，也能順利找到自己所好，並欣然接受自己的選擇。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/11(三)第六場德明服務創新座談—生鮮電商營銷數據應用。由鮮食家莊盛文營運長來分享，目前電商產業正是興盛，但面對冷凍食品或低溫食品保存卻是一大難題，營運長提到，目前鮮食家有-25度專業大型冷凍統倉，許多知名電商平台的冷凍食品也是有他們後台在支援。除了這些營運長還為大家分析電商站內及站外的不同之處，及從事電商產業的經歷等，讓大家又對電商產業及生鮮食品平台有新見解。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/18(三)第七場德明創新服務座談-科技思維下的新商業模式。由JustKitchen數據分析師「蔡和宸」先生蒞校分享。隨著疫情的爆發, 各行各業都受到很大的影響, 因此大數據和人工智能的應用變成了很重要的課題, 不但協助企業們精準行銷也幫助消費者更簡單的購買到所需的物品，而無論科技進化，飲食仍是必須，餐飲創業在這個時代的挑戰與創新是什麼呢?如何將科技技術與商業模式應用及落地，還有未來的願景規劃與日後產業的想像。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/26(四)第八場德明服務創新座談—數據驅動新零售。由全家便利商店會員暨電商推進部「黃士杰」部長蒞校分享。如何透過會員APP捕捉消費者輪廓，利用不同類別、大小規模數據做出不同的分析，進而改善舊服務和推動新模式，全家便利商店如何把傳統的銷售結帳線下線上整合，利用數據推動新零售呢? 這次請到全家便利商店會員暨電商推進部的黃士杰部長，從全家基層做起至目前全家會員系統及虛實電商的整合，推動全家與各種異業合作，開創許多領先同業的指標。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/12/09(三)第九場德明服務創新座談—區塊鏈的應用實驗進行式。Bitmark致力於開發區塊鏈技術於數位產權的應用，從有形的土地、房屋至無形的知識、智財，甚至數據隱私，但如何從數位時代中網路商業巨頭行銷、廣告的操縱行為中重新奪回擁有數據的個人自主權?Bitmark的團隊組成多國、專長多元，從電腦工程、數位藝術、醫療工程、應用材料至電玩遊戲，是個帶著使命感、用著理想在商業世界衝撞的區塊鏈新創公司，但Bitmark究竟做什麼，怎麼改變既有規則，兼顧理想與商業的永續經營呢?Bitmark的Community Advocate 陳依靖(Vivian)來年終解密!"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/12/17(四)第十場德明創新服務座談-新金融：DeFi的入侵DeFi (Decentralized Finance) 去中心化金融從2019開始風風火火，區塊鏈的應用在金融應用上看似又更上一層樓，不但吸引了比特幣持有者投資，也豐富了原有的以太幣應用，並牽動了穩定幣的流通。但DeFi怎麼做到讓幣圈和鏈圈甚至圈外的人都眼睛一亮呢？新金融的未來是不是更近了呢?我們請來開發出7天漲700%客家幣HAKKA Finance及沛理科技的創辦人暨執行長陳品來告訴你，DeFi是什麼?影響改變了什麼?下一步可能是什麼?"
    }
  ];

  const carouselItems2 = [
    {
      image: US_image_1,
      alt: "US1",
      date: "109/10/23(五)『創業要Know How』系列講座1：新創規劃與策略，由本校研發處與繆思建造所共同主辦，嚴選必要的創新創業基礎知識，透過每個週五下午六次免費講座課程的設計，特請繆思建造所所長李雅妮及顧問李克中為大家精選創新創業所需的知識和資源，從環境趨勢分析、商業模式和營運規劃三面向讓大家增強功力，讓大家面對市場及團隊時，對內對外能知己知彼，做好應有的風險管控和迎戰策略，進而在市場中成長茁壯，創業成功。新創初期，大家是夥伴，通常有錢出錢有力出力，但若沒有共識與良好的根基，在面對市場風險、營收不穩定，人事變動、資源分配、技術方向、接不接受投資等考驗，通常97%的團隊會失敗。因此該如何在創業初期時好好的規劃，並能善用各種不同策略，在每次未知的風險襲來時，大家一起安然度過撐過呢？",
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/10/30(五)『創業要Know How』系列講座2：政府新創資源與解析。將政府投入的各種新創補助方案與資源各種利弊分析給你聽，哪個方案適合公司哪個階段，申請重點該著重在哪裡？哪個方案是助力？哪個方案可能會變成負擔？隨著新創的興起，政府也越來越多相關單位提供許多新創的服務及資源，但往往因為影響力不夠大或者我們沒有接觸就錯失這些資源，透過講座，講師直接分析哪些政府單位有提供相關的新創資源，更能帶領許多無論你正在創業或有想法想創業，都歡迎參加這一系列的講座課程，相信會對您有所受益。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/06(五)『創業要Know How』系列講座3：商業模式九宮格和投資人觀點。創業獲利看商業模式，投資與否看商業模式，轉型創新看商業模式，現在多元複雜化的商業戰場如何設計商業模式，讓你的事業收支平衡，內外資源正確循環，公司企業才能永續經營。商業模式怎麼設計呢? 各階段的投資人會怎麼考慮呢?"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/13(五)『創業要Know How』系列講座4：商業計劃書募資的重點資訊。商業計畫書該怎麼撰寫，除了基本資訊讓人知道你築夢踏實，又該怎麼讓人相信你的規劃有獲利未來，打動投資方的心呢?  怎麼讓你的夢想讓伯樂看見?許多人都擁有自己得創業夢，而往往希望可以透過天使投資人或政府創業貸款等，前提都需要一份清楚明瞭，馬上讓投資人瞭解你的目標等，很多人會盲目的在撰寫不知道重點該放什麼?又或是根本不知道該如何下手，這次議題除了可以聽講師在商業計劃書中的秘訣及重點，計劃書是要不斷更新並因應最新的情況在做增強，可說是相當豐富的內容，真叫人大開眼界了。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/20(五)『創業要Know How』系列講座5：如何打造MVP和PMF?創業初期如何打造MVP(最小可行產品)?又如何確定產品是否擁有成功的PMF(Product-Market Fit市場迎合度)?在市場中有確定的目標客層呢? 每個環節都是關鍵，每個關鍵都緊扣著創業當下的時間成本與未來成功與否。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/27(五)『創業要Know How』系列講座6：如何打造Sales Funnel?提升Retention Rate?產品製造出來就要賣出去，那您應該如何打造銷售漏斗(Sales Funnel)和提高回客率(Retention Rate)，讓事業維持營利，創業成功? 這次的講師是繆思建造所顧問李克中(Nick Lee)，他是一位多元又跨產業的連續創業家，他的產品與足跡也遍布全球，從網頁、APP至區塊鏈，軟體、硬體到服務，設計、製造到銷售端，他都能信手捻來說給你聽，甚至音樂娛樂他也有涉入，賣點在哪裡，讓他告訴你。"
    },
    {
      image: US_image_1,
      alt: "US1",
      date: "109/12/04(五)『創業要Know How』系列講座7：如何評估產品設計可行性新產品開發除了創意、設計、製造面向外，還有可行性評估，而可行性評估又最為複雜，技術可行性評估、市場可行性評估、財務可行性評估等變數，這些含有連設計大神或知名公司都說不準的風險。能怎麼根據經驗、資料或趨勢評估以及還有什麼能考慮的因素嗎?這次合作的講師是繆思建造所顧問李克中(Nick Lee)，他是一位多元又跨產業的連續創業家，他的產品與足跡也遍布全球，從網頁、APP至區塊鏈，軟體、硬體到服務，設計、製造到銷售端，他都能信手捻來說給你聽，甚至音樂娛樂他也有涉入，市場在哪裡，賣點在哪裡，讓他告訴你。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/12/11(五)『創業要Know How』系列講座8：新創資金募集與財務規劃。新創創業初期，不論是新技術、新服務或新商業模式的開發推廣都需要資本與時間，如何募集資金和做好財務規劃因應未來營運狀況？讓新創軌道顧問公司創辦人暨繆思建造所所長李雅妮告訴你，雅妮曾為亞太區四個加速器 funding team, 包含台灣比翼加速器、韓國Shift Accelerator、中國BARSA加速器及台灣資策會IDEAS Show+，新創領域從業近10年，輔導超過200家新創團隊，台灣團隊如gogolook, accupass等。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/12/18(五)『創業要Know How』系列講座9：如何建立國際連結 。在台灣如何建立國際連結？友人、社群、公司、企業？認識誰，可信任判斷，如何起始？商業合作如何運作？讓新創軌道顧問公司創辦人暨繆思建造所所長李雅妮告訴你，雅妮曾為亞太區四個加速器 funding team, 包含台灣比翼加速器、韓國Shift Accelerator、中國BARSA加速器及台灣資策會IDEAS Show+，新創領域從業近10年，輔導超過200家新創團隊，台灣團隊如gogolook, accupass等。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/12/25(五)『創業要Know How』系列講座10：品牌定位與行銷案例分享。品牌定位決定了客戶願意從口袋掏出多少錢購買你的商品，品牌定位的瞬間決定了價值，那該如何品牌定位，又根據品牌定位做適當的行銷規劃，如何鞏固或加強品牌價值?這次合作的講師是繆思建造所顧問李克中(Nick Lee)，他是一位多元又跨產業的連續創業家，他的產品與足跡也遍布全球，從網頁、APP至區塊鏈，軟體、硬體到服務，設計、製造到銷售端，他都能信手捻來說給你聽，甚至音樂娛樂他也有涉入，市場在哪裡，賣點在哪裡，讓他告訴你。"
    }
  ];

  const carouselItems3 = [
    {
      image: US_image_1,
      alt: "US1",
      date: "109/11/17(二)東協跨境電商講座—網紅核心課plus，由名格娛樂有限公司蘇彥翰執行長為外籍學生做實務交流分享。電商產業的興起，網紅也逐漸成為電商經營的一群，當紅的自媒體、數位媒體也順勢成長，越來越多人懂得運用網路在賺錢。蘇執行長除了分享許多網紅案例也為大家做了行銷分析及S.M.A.R.T理論的分享，透過討論練習可以互相分享及交流，外籍生大家反應都很熱烈。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/20(五)東協跨境電商講座—網紅核心課plus。新興電子商務模式不段推陳出新，像年輕世代常見的自媒體、網路直播、網紅youtube等都是時下新模式，而講師透過自家網紅及正在栽培的外籍學生作為例子，從網路電商到網紅youtube拍攝等，讓外籍同學能見識到平常課程外的實際案例，加深他們對於電子商務及跨境電商的印象。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/23(一)東協跨境電商講座—跨境電商實務。本次邀請昭博國際商務股份有限公司產品技術總監劉俊宏先生蒞校分享。網路跨國交易等日益盛行，比起傳統的國際貿易耗時長價格高方便性欠缺等，跨境電商平台的演進，促使簡易的貿易模式，並減少耗時及不必要的中間成本，今天的跨境電商實務課程，除了讓外籍生能聽到學到除了教科書上的理論外，實際的業界交流，更能加深他們的印象。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/26(四)東協跨境電商講座-網紅電商課程。自媒體無論境內或境外日益盛行，而網紅電商、媒體等也為此帶來龐大商機。今日講師的課程不單方面介紹網紅電商，更帶領外籍同學從自我發現到如何以自我興趣及探索自我，來找到如果成為自媒體的博客主該如何找到正確的軌道。除此也透過心理測驗等方式，讓大家更了解自我，也可找到自己及團隊的各自強項，才能各司其職。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/11/30(一)東協跨境電商講座-跨境電商物流。本堂課邀請昭博國際股份有限公司產品行銷副理林子穩先生蒞校分享。跨境電商營運模式解析(包含出口型、進口型、轉口型)，跨境物流的方式及計費說明(供應鏈及貿易FCD、物流材積方式及各式物流評比等)，執行跨境物流前必須注意賣給誰、貨物狀態、時效性成本等，講師今天的課程解析的很詳細，也聽到同學反應與目前所學有共通關聯，能達到學以致用的效果很好。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/12/03(四)東協跨境電商講座-國際行銷。本次邀請雄德股份有限公司商務長李良頤先生蒞校分享。從行銷的定義到國際行銷的整個環境過程分析，行銷工具的應用（產品、定位、推廣、通路）及策略行為（市場區隔、品牌定位、設定目標對象）。行銷自動化工具的介紹（客戶關係管理、電子郵件、社群數據、一頁式網頁互動及自動化客服等），串接資料來源的連結資源（主要對廣告投放及資料分析的依據）。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "109/12/11(五)東協跨境電商講座-全球跨境電商品牌。本次邀請樂利數位科技股份有限公司國際業務部越南顧問阮氏碧撿小姐蒞校分享。全球跨境電商也是目前日漸盛行的產業，過去傳統的國際貿易過程繁雜極不方便，透過現今跨境平台整合及數據分析後，讓跨境電商能連結全球。從交易成立、支付結算、國際物流等過程分析等商業活動，介紹目前的跨境現況及趨勢等。"
    }, {
      image: US_image_1,
      alt: "US1",
      date: "2020大專院校越南電商行銷企劃競賽活動花絮》在面臨少子化衝擊影響，招攬境外學生勢在必行，而本校目前近8000位學生，外籍生數量有400多位，其中又以越南生占多數高達395位，係本校一大優勢，將來越南學生不論是畢業歸國抑或是留在臺灣發展，都可以預期能替本校帶來更多學生。藉此舉辦大專院校越南電商行銷企劃競賽，培養外籍學生之網紅經營、社群行銷和跨境電商等經營能力。"
    }
  ];



  return (
    <>
      <div className="title">案例分享-服務創新育成</div>

      <div className="for-title">『Decantar AI商業應用實作坊』系列講座 </div>

      <div className="conversation_all">
        <div className="image-state">
          <img src={ASEAN_5} alt="US1" style={{ maxWidth: "400px", maxHeight: "auto" }} />
        </div>
      </div>
      <div className="text_CS">
        『Decantar AI商業應用實作坊』系列講座(12/02、12/16、12/23、12/30)。從生活日常到娛樂，從商業決策到科研，ML/AI在我們日常生活的重要性與日俱增。從行動裝置語音助理、旅人最愛的GOOGLE翻譯、電子商務的推薦系統、結合生物辨識技術的門禁系統、讓停車場管理更流暢便利的車牌辨識，讓我們的工作與生活更便利、更輕鬆的機器學習技術。從ML機器學習到AI人工智慧，如何將科技應用到生活與商業上，德明科技大學與行動貝果合作開辦AI商業應用實作坊，參加者將利用12月裡4個周三下午，從零編碼、無AI基礎到最後能了解AI原理，並能利用行動貝果的DecantarAI做出應用模型。
      </div>


      <div className="for-title">德明服務創新座談 </div>
      <Carousel {...SettingCaseStudies} >
        {carouselItems1.map((item, index) => (

          <Box display="flex" flexDirection="row" alignItems="center" textAlign="justify">
            <Box flex="1">
              <img src={item.image} alt={item.alt} className="imcs" />
            </Box>
            <Box flex="1">
              <div className="textTy1">
                <Typography fontSize="22px">{item.date}</Typography>
              </div>
            </Box>
          </Box>

        ))}
      </Carousel>

      <div className="for-title"> 『創業要Know How』系列講座 </div>
      <Carousel  {...SettingCaseStudies} >
        {carouselItems2.map((item, index) => (

          <Box display="flex" flexDirection="row" alignItems="center" textAlign="justify">
            <Box flex="1">
              <img src={item.image} alt={item.alt} className="imcs" />
            </Box>
            <Box flex="1">
              <div className="textTy2">
                <Typography fontSize="22px">{item.date}</Typography>
              </div>
            </Box>
          </Box>

        ))}
      </Carousel>


      <div className="title">案例分享-東協跨境電商</div>

      <div className="for-title"> 東協跨境電商講座 </div>
      <Carousel {...SettingCaseStudies}  >
        {carouselItems3.map((item, index) => (

          <Box display="flex" flexDirection="row" alignItems="center" textAlign="justify">
            <Box flex="1">
              <img src={item.image} alt={item.alt} className="imcs" />
            </Box>
            <Box flex="1">
              <div className="textTy3">
                <Typography fontSize="22px">{item.date}</Typography>
              </div>
            </Box>
          </Box>

        ))}
      </Carousel>




      <div className="title">案例分享-部落愛轉動</div>

      <div className="conversation_all">
        <div className="image-state">
          <img src={ASEAN_5} alt="US1" style={{ maxWidth: "400px", maxHeight: "auto" }} />
        </div>
      </div>
      <div className="text_TLTS">
        《烏來-忠治部落》透過部落文化及生態體驗活動，讓參與服務的師生更認識原住民文化、找回對原住民文化歸屬與認同感；透過體育及衛生教育教學課程，讓部落居民及孩童，養成良好運動及衛生保健習慣；透過闖關及方案活動進行，培育孩童從小建立正確理財觀念等。


        <p>【校園新聞連結，帶領大家一同參與部落世界】</p>

        <p>◆德明科大舉辦109年度大學社會責任實踐基地-忠治「部落．愛轉動」暑期夏令營</p>
        <a href="http://netinfo.takming.edu.tw/tip/sec_onenews.php?N=18575" style={{ fontSize: "15px", width: "100%" }}>http://netinfo.takming.edu.tw/tip/sec_onenews.php?N=18575</a>

        <p>◆109年度大學社會責任實踐基地－忠治「部落．愛轉動」基隆海科館戶外教學活動</p>
        <a href="http://netinfo.takming.edu.tw/tip/sec_onenews.php?N=18589" style={{ fontSize: "15px" }}>http://netinfo.takming.edu.tw/tip/sec_onenews.php?N=18589</a>


      </div>

      {/* ====按鈕==== */}
      <a href="http://localhost:3000/" className="return-But">
        <AiOutlineHome className="return-object"></AiOutlineHome>
      </a>


      <Contact />

    </>
  );
}
