import Carousel from "../../../_basic/components/carousel/Carousel";
import Achieve from "../components/achieve/Achieve";
import NewsFeed from "../components/newsFeed/NewsFeed";
import USRHubCarousel from "../components/usrHubCarousel/USRHubCarousel";
import Contact from "../components/contactus/Contact";
import background from "../../home/screens/image/background.png";

export default function Home() {
  return (
    <>
    <div style={{backgroundImage:"url('" + background + "')"}}>
      <Carousel />
      <NewsFeed />
      <Achieve />
      <USRHubCarousel />
      <Contact />
      </div>
    </>
  );
}
