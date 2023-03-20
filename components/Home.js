import styles from '../styles/Home.module.css';
import CardGrid from './GroceryBanner';
import FeaturedCategories from './FeaturedCategories';
import Header from './Header'
import Hero from './Hero';
import PopularProducts from './PopularProducts';
import DailyBestSells from './DailyBestSells';
import Benefits from './Benefits';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <FeaturedCategories/>
    <CardGrid/>
    <PopularProducts/>
    <DailyBestSells/>
    <Benefits/>
   
    <Footer/>

      
    </div>
  );
}

export default Home;
