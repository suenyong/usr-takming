import Achieve from "../components/achieve/Achieve";
// import NewsFeed from "../components/newsFeed/NewsFeed";
// import USRHubCarousel from "../components/usrHubCarousel/USRHubCarousel";
import Contact from "../components/contactus/Contact";
import background_2 from "../../home/screens/image/background_2.png";
import FronPageCarousel from "../../../_basic/components/carousel/screens/FrontPageCarousel";
import "../styles/Home.css";
import TaiwanMap from "../components/TaiwanMap/taiwanmap";
import UsrUsrHub from "../components/UsrUsrHub/UsrUsrHub";
import AllName from "../components/AllName/AllName";




export default function Home() {


  return (

    <>
      <div 
      // style={{
        // backgroundImage: "url('" + background_2 + "')",
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center center',
        // backgroundAttachment: 'fixed'
      // }}
      >

        <FronPageCarousel />
        {/* <NewsFeed /> */}
        <div className="block-distance"></div>
        <Achieve />
        <div className="block-distance"></div>
        <UsrUsrHub />
        <div className="block-distance"></div>
        <TaiwanMap />
        {/* <div className="block-distance"></div> */}
        {/* <div className="block-distance"></div> */}
        <Contact />
        <AllName />
      </div>
    </>
  );
}
