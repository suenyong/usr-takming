import React, { useState, useEffect } from "react";
import "./styles/taiwanese.css";
import AOS from "aos";
import taiwan from "./images/taiwan.png"; //台灣圖
import Philippinessold from "./images/PhilippineLine.png"; //菲律賓圖
import Philippines from "./images/Philippines.png"; //菲律賓
import Taichung from "./images/Taichung.png"; // 台中
import Keelung from "./images/Keelung.png"; // 基隆
import Taitung from "./images/Taitung.png"; //台東
import Tainan from "./images/Tainan.png"; //台南
import Yilan from "./images/Yilan.png"; //宜蘭
import Hualien from "./images/Hualien.png"; //花蓮
import Nantou from "./images/Nantou.png"; //南投
import Pingtung from "./images/Pingtung.png"; //屏東
import Kaohsiung from "./images/Kaohsiung.png"; //高雄
import chiayi_city from "./images/chiayi city.png"; //嘉義市
import Chiayi_County from "./images/Chiayi_County.png"; //嘉義縣
import Changhua from "./images/Changhua.png"; // 彰化
import Yunlin from "./images/Yunlin.png"; //雲林
import Miaoli from "./images/Miaoli.png"; //苗栗
import Hsinchu_City from "./images/Hsinchu_City.png"; //新竹市
import Hsinchu_County from "./images/Hsinchu_County.png"; //新竹縣
import Taoyuan from "./images/Taoyuan.png"; //桃園
import New_Taipei from "./images/New_Taipei.png"; //新北
import taipei from "./images/taipei.png"; //台北
import Philippinessever from "./images/philippinesevent.png"; //菲律賓活動照片
import sever1 from "./images/nophoto.png"; //無照片
import sever2 from "./images/TaipeiEventPhotos.png"; //台北活動照片
import sever3 from "./images/New TaipeiEventPhotos.png"; //新北活動照片
import Service from "./Service"; //點閱讀更多跳至
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const TaiwanMap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const defaultContent = "\n\n\n\n請點選旁邊縣市選擇地點！";
  const defaultImage = sever1;

  const [isDefault, setIsDefault] = useState(true);
  const [imgPath, setImgPath] = useState(taiwan);
  const [isPhilippines, setIsPhilippines] = useState(false);
  const [selectedContent, setSelectedContent] = useState(defaultContent);
  const [selectedImg, setSelectedImg] = useState(defaultImage);

  const handleClick = (newContent, newImg) => {
    setSelectedContent(newContent);
    setSelectedImg(newImg);
    setIsDefault(false);
  };

  const handleMouseOver = (newImgPath) => {
    setImgPath(newImgPath);
  };

  const handleMouseOut = () => {
    setImgPath(taiwan);
  };

  const handlePhilippinesOver = () => {
    setIsPhilippines(true);
  };

  const handlePhilippinesOut = () => {
    setIsPhilippines(false);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      {/* <div className="hr-line"></div> */}
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#90cbc0",
          width: "40%",
          marginRight: "30%",
          marginLeft: "30%",
        }}
      >
        服務足跡
      </h1>

      {windowWidth > 960 ? (
        <div className="taiwan-map" data-aos="fade-left">
          <img src={imgPath} alt="123" style={{ width: "20%" }} />
          <button
            onMouseOver={() => handleMouseOver(Taichung)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：台中\n目前尚無服務資訊", sever1)
            }
            className="Taichung-button"
          >
            台中
          </button>

          <button
            onMouseOver={() => handleMouseOver(Keelung)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：基隆\n目前尚無服務資訊", sever1)
            }
            className="Keelung-button"
          >
            基隆
          </button>

          <button
            onMouseOver={() => handleMouseOver(Taitung)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：台東\n目前尚無服務資訊", sever1)
            }
            className="Taitung-button"
          >
            台東
          </button>

          <button
            onMouseOver={() => handleMouseOver(Tainan)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：台南\n目前尚無服務資訊", sever1)
            }
            className="Tainan-button"
          >
            台南
          </button>

          <button
            onMouseOver={() => handleMouseOver(Yilan)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：宜蘭\n目前尚無服務資訊", sever1)
            }
            className="Yilan-button"
          >
            宜蘭
          </button>

          <button
            onMouseOver={() => handleMouseOver(Hualien)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：花蓮\n目前尚無服務資訊", sever1)
            }
            className="Hualien-button"
          >
            花蓮
          </button>

          <button
            onMouseOver={() => handleMouseOver(Nantou)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：南投\n目前尚無服務資訊", sever1)
            }
            className="Nantou-button"
          >
            南投
          </button>

          <button
            onMouseOver={() => handleMouseOver(Pingtung)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：屏東\n目前尚無服務資訊", sever1)
            }
            className="Pingtung-button"
          >
            屏東
          </button>

          <button
            onMouseOver={() => handleMouseOver(Kaohsiung)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：高雄\n目前尚無服務資訊", sever1)
            }
            className="Kaohsiung-button"
          >
            高雄
          </button>

          <button
            onMouseOver={() => handleMouseOver(chiayi_city)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：嘉義市\n目前尚無服務資訊", sever1)
            }
            className="chiayi_city-button"
          >
            嘉義市
          </button>

          <button
            onMouseOver={() => handleMouseOver(Chiayi_County)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：嘉義縣\n目前尚無服務資訊", sever1)
            }
            className="Chiayi_County-button"
          >
            嘉義縣
          </button>

          <button
            onMouseOver={() => handleMouseOver(Changhua)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：彰化\n目前尚無服務資訊", sever1)
            }
            className="Changhua-button"
          >
            彰化
          </button>

          <button
            onMouseOver={() => handleMouseOver(Yunlin)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：雲林\n目前尚無服務資訊", sever1)
            }
            className="Yunlin-button"
          >
            雲林
          </button>

          <button
            onMouseOver={() => handleMouseOver(Miaoli)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：苗栗\n目前尚無服務資訊", sever1)
            }
            className="Miaoli-button"
          >
            苗栗
          </button>

          <button
            onMouseOver={() => handleMouseOver(Hsinchu_City)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：新竹市\n目前尚無服務資訊", sever1)
            }
            className="Hsinchu_City-button"
          >
            新竹市
          </button>

          <button
            onMouseOver={() => handleMouseOver(Hsinchu_County)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：新竹縣\n目前尚無服務資訊", sever1)
            }
            className="Hsinchu_County-button"
          >
            新竹縣
          </button>

          <button
            onMouseOver={() => handleMouseOver(Taoyuan)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick("\n\n地點：桃園\n目前尚無服務資訊", sever1)
            }
            className="Taoyuan-button"
          >
            桃園
          </button>

          <button
            onMouseOver={() => handleMouseOver(New_Taipei)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick(
                "德明財經科技大學為實踐大學社會責任，並使學生有機會實際體驗城鄉交流服務經驗， 培育未來參與社會的關懷奉獻能力，在林昭光教授介紹，及烏來忠治長老基督教會的協助下，由該校原資中心黃明雪、劉玉萍及林芝淇老師帶領學校學生會、有氧健身社、原住民志工團 等師生於 109 年 10 月 11 日，前往新北市烏來區忠治部落，辦理 109 年度「部落.愛轉動」成 果發表會活動。 經執行「部落暑期夏令營」、「海科館自然生態體驗」、「部落人文採訪」活動後，該成果發表會是為該校 109 年度大學社會責任實踐基地(USR Hub)-忠治「部落.愛轉動」第四階段之 計畫活動。透過該發表會，展現由社區居民及青少年所共同繪製部落綠色生活地地圖，引領 在地居民開始觀察生活周圍的綠色資源，期許啟發社區的親觀點。該發表會計有部落居民、 青少年、小朋友及該校師生 130 位共同參與，並於成果發表會後編印部落社區綠地圖，且於 11 月份正式出刊。 在此 109 年忠治「部落.愛轉動」四階段活動劃下圓滿句點，大家期許明年再見。該校 參與服務的陳同學表示，透過四階段活動設計規劃，除讓參與學員能接觸社會議題，建立正 確價值觀，發展道德判斷力及公民素養外，也讓服務學生從參與過程中，了解該活動是與大 學社會責任相結合，學習服務與付出，並獲得肯定自我、自我成長和貢獻社會的機會，更期 許透過「忠治部落綠地圖」，讓忠治社區可以永續經營、有著獨特在地特色，並發展專屬能力。",
                sever3
              )
            }
            className="New_Taipei-button"
          >
            新北
          </button>

          <button
            onMouseOver={() => handleMouseOver(taipei)}
            onMouseOut={handleMouseOut}
            onClick={() =>
              handleClick(
                "德明財經科大為帶動中小學社團發展、強化建立社區關係、運用與連結社區資源，並建 構學生服務學習之場域，該校學生會特邀請吉他社、熱音社、有氧健身社、舞研社於 06 月 06 日協辦「來去德明彬彬ㄅ一ㄤˋㄅ一ㄤˋ」生態暨社團教學活動，希望能藉由整合不同屬性 社團，提供更加多元且完善的服務內容。該活動計有 75 位學員、師生及家長的參與。該活動 上午安排荒野保護協會謝淑勤老師介紹內湖金面山生態並帶領大家實際走訪金面山，體驗自 然豐富生態。下午課程則由有氧健身社帶來有氧舞蹈教學，以及顏苾盈老師教導由廢物再利 用的羽毛球鑰匙圈及應景的手作香包，最後則製作由從生態步道收集之葉片進行拓印畫及創 意帆布袋。 整日活動下來，參與伙伴們皆獲得寶貴的經驗與感動，擔任服務的李同學表示，期待透 過結合生態及社團教學營隊的推動，來強化社團多元技能並深化同學服務學習理念，讓社團 夥伴都能發揮所長，展現社團精神及價值，且能建立學校、社團與社區的良好關係。",
                sever2
              )
            }
            className="taipei-button"
          >
            台北
          </button>

          <div className="Philippines-image">
            {isPhilippines ? (
              <img
                src={Philippines}
                alt="Philippines"
                style={{ width: "20%" }}
              />
            ) : (
              <img
                src={Philippinessold}
                alt="Philippines"
                style={{ width: "20%" }}
              />
            )}
            <button
              onMouseOver={handlePhilippinesOver}
              onMouseOut={handlePhilippinesOut}
              onClick={() =>
                handleClick(
                  "地點：菲律賓\n\n\n\n德明科大於 100 年~110 年已連續 11 年對菲律賓進行以「愛無國界．菲你莫屬」為號召的國際志工服務活動；透過多年來的志工義務服務，看到當地資源及資訊的缺乏，該校志工們希望集合有心願者的力量，透過「聖誕鞋盒禮物行動」活動，讓愛心、喜樂與盼望來豐富小朋友精采的生命。該校學生會志工同學表示，透過物資轉動的愛與關懷，讓菲律賓弱勢小朋友感受到無國界的溫暖與支持，也將志工服務的真正內涵具體呈現。",
                  Philippinessever
                )
              }
              className="Philippines-button"
            >
              菲律賓
            </button>
          </div>
          <div
  className="content-box"
  style={{
    backgroundColor:"rgb(6, 202, 173)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    overflow: "auto",
  }}
>
  <div
    style={{
      color: "black",
      fontSize: "0.5vw",
      zIndex: 0.5,
      width: "30vw",
      textAlign: "justify",
      whiteSpace: "pre-wrap",
      marginLeft: "-5vw",
      marginTop: "10vh",
    }}
  >
    {selectedContent}
  </div>
  
  {selectedImg && (
    <img
      src={selectedImg}
      alt="Selected"
      style={{
        width: "39vw",
        maxHeight: "30vh",
        objectFit: "contain",
        marginBottom: "2vh",
        marginLeft:"-1vw",
        marginTop: "5vh",
      }}
    />
  )}

  {!isDefault && (
    <Link
      to="/Service"
      target="_blank"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <button
        className="twMin-more-button"
        style={{
          fontSize: "1vw",  // 字體大小隨著視窗寬度變化
          padding: "1vh 0.5vw",  // 內部填充隨著視窗大小變化
          margin: "1vh 0",  // 邊距隨著視窗高度變化
        }}
        onClick={() => {
          <Routes>
            <Route path="/Service" element={<Service />} />
          </Routes>;
        }}
      >
        點選可閱讀更多
      </button>
    </Link>
  )}
</div>
</div>

      ) : (
        <>
          <div
            className="taiwan-map2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={imgPath} alt="123" style={{ width: "30%" }} />
          </div>

          <div
            className="box"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="taiwan-map2" style={{ marginRight: "20px" }}>
              <img src={imgPath} alt="123" style={{ width: "30%" }} />
            </div>

            <Link
              to="/Service"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "500%",
              }}
            >
              <button
                className="twMax-more-button1"
                onClick={() => {
                  <Routes>
                    <Route path="/Service" element={<Service />} />
                  </Routes>;
                }}
              >
                閱讀更多
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default TaiwanMap;
