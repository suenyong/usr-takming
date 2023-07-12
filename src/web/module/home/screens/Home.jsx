import Achieve from "../components/achieve/Achieve";
import NewsFeed from "../components/newsFeed/NewsFeed";
import USRHubCarousel from "../components/usrHubCarousel/USRHubCarousel";
import Contact from "../components/contactus/Contact";
import background_2 from "../../home/screens/image/background_2.png";
import FronPageCarousel from "../../../_basic/components/carousel/screens/FrontPageCarousel";


import TaiwanMap from "../components/TaiwanMap/taiwanmap";
export default function Home() {


  return (

    <>
      <div style={{
        backgroundImage: "url('" + background_2 + "')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}>

        <FronPageCarousel />
        {/* <NewsFeed /> */}
        <Achieve />
        <USRHubCarousel />
        <TaiwanMap />
        <Contact />
      </div>
    </>
  );
}
