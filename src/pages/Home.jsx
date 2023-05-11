import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";
import Slider from './../components/Slider';
import Heading from './../components/Heading';
import Auth from './Auth';



var images = [
  "https://img.freepik.com/free-photo/young-woman-with-fruit-her-hands-supermarket_169016-5032.jpg?w=1060&t=st=1681473129~exp=1681473729~hmac=63441eac4a266ae28658488589575016c8db42d0f718bbbdad42a5ded6f1b221",
  "https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?w=996&t=st=1681466590~exp=1681467190~hmac=b73013d5cd20fb3e97b99bfcd9d0ec63c90d2a792d570e45b009b53a9694363f",
  'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8&w=1000&q=80',
  'https://media.product.which.co.uk/prod/images/1500_750/gm-b02b3111-2f9e-46fc-8139-03545de1402b-looking-at-food-packaging-supermarket.jpg',
  'https://c8.alamy.com/comp/H2E737/goods-animal-food-on-shelves-in-supermarket-swakopmund-namibia-H2E737.jpg'
];


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
      <Slider time={2900}  images={images}/>
      <Newsletter />
      <Auth />

      <Footer />
    </>
  );
}

export default Home;
