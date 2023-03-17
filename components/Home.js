import styles from '../styles/Home.module.css';
import CardGrid from './GroceryBanner';
import FeaturedCategories from './FeaturedCategories';
import Header from './Header'
import Hero from './Hero';

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <FeaturedCategories/>
    <CardGrid/>
      
    </div>
  );
}

export default Home;
