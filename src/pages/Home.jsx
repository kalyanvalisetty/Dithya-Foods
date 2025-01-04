import Banner from "../components/Banner"
import BestSellerSection from "../components/BestSellerSection"
import LatestCollection from "../components/LatestCollection"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicy from "../components/OurPolicy"


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerSection/>
      <LatestCollection/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home