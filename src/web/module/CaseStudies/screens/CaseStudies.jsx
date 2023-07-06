import "../../CaseStudies/styles/CaseStudies.css";
import React, { useRef } from "react";
// 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import US_image_1 from "./US_image_1.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";



export default function CaseStudies() {


  // 
  const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };

  return (
    <>

        <div className="title">案例分享-服務創新育成</div>
          
          <div className="for-title">『Decantar AI商業應用實作坊』系列講座 </div>

          <div className="conversation">
            <div className="image-state">
              <img src={US_image_1} alt="US1" style={{ maxWidth: "550px", maxHeight: "auto" }} />
            </div>
            <div className="text">
              『Decantar AI商業應用實作坊』系列講座(12/02、12/16、12/23、12/30)。從生活日常到娛樂，從商業決策到科研，ML/AI在我們日常生活的重要性與日俱增。從行動裝置語音助理、旅人最愛的GOOGLE翻譯、電子商務的推薦系統、結合生物辨識技術的門禁系統、讓停車場管理更流暢便利的車牌辨識，讓我們的工作與生活更便利、更輕鬆的機器學習技術。從ML機器學習到AI人工智慧，如何將科技應用到生活與商業上，德明科技大學與行動貝果合作開辦AI商業應用實作坊，參加者將利用12月裡4個周三下午，從零編碼、無AI基礎到最後能了解AI原理，並能利用行動貝果的DecantarAI做出應用模型。
            </div>

          </div>
            

      <div >

        
        <Slider ref={sliderRef} {...settings}>
        <div >
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <img src={US_image_1} alt="US1"/>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" alignItems="flex-start" spacing={8}>
                <Grid item>
                  <Typography className="text-image">109/09/04(五)第一場德明創新服務座談-電商社群創新商業模式，由東森得意購股份有限公司研發新事業部『顧武男』執行長，為我們拉開序幕，從產業資歷分享到目前東森集團的新創商業模式超前部屬等豐富的實戰分享，讓所有聽講者受益良多。雖然礙於時間短暫，但不減大家的熱情交流，是本次座談會最棒的收穫！</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src={US_image_1} alt="US1"/>
            </Grid>
            <Grid item xs={4}>
              <Grid container direction="column" alignItems="flex-start" spacing={8}>
                <Grid item>
                  <Typography className="text-image">˙109/09/23(三)第二場德明服務創新座談-兩岸電商創新商業模式，由東森得意購股份有限公司研發事業部襄理「郭俊昱」蒞臨分享，郭襄理可說是有為青年，年紀輕輕但口條問答應對卻令人印象深刻，自然真誠的表現讓所有聽講人都受益良多。本次活動議題：兩岸電商創新商業模式，透過兩岸傳統電商及社交新媒體電商的差異化，及電商產業時下趨勢的分析，也藉由此次能大家互相交流。這次活動也有許多本校學生參加，有此可知，創新的時下商業模式議題，也是深受眾多族群感興趣，也歡迎大家再度參與第三場座談會10/7(三)AI商業應用【自動機器學習如何普及AI和創造商業價值】。</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        </Slider>
        </div>



        <div className="title">案例分享-東協跨境電商</div>


        <div className="title">案例分享-部落愛轉動</div>



    </>
  );
}
