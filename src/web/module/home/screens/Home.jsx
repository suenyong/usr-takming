import Carousel from "../../../_basic/components/carousel/Carousel";
import Achieve from "../components/achieve/Achieve";
import NewsFeed from "../components/newsFeed/NewsFeed";
import USRHubCarousel from "../components/usrHubCarousel/USRHubCarousel";


export default function Home() {
  return (
    <>
        <Carousel />
        <NewsFeed />
        <Achieve />
        <USRHubCarousel/>
    </>
      );
}


