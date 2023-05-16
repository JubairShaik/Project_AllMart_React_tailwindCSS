import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
 
import Slider from './../components/Slider';
import Heading from './../components/Heading';
import Auth from './Auth';
import SearchBar from './../components/SearchBar';




function Home( ) {
  return (
    <>
    <Heading/>
    <Hero />
    
      <ProudProducts />
      <Banner
      
        title="Freshness guaranteed"
        text=" Our produce is picked at peak ripeness and delivered straight to your doorstep"
        
      />
      <TrendingSlider />  
      <Slider time={3400}   />
      <Newsletter />
      <Auth />
      <Footer />
    </>
  );
}

export default Home;
