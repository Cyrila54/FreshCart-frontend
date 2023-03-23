import React, { useState } from "react";
import styles from "../styles/FeaturedCategories.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "react-alice-carousel/lib/alice-carousel.css";
import dynamic from "next/dynamic";
const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});


export default function FeaturedCategories() {
  const [index, setIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    321: { items: 2 },
    575: { items: 3 },
    768: { items: 3 },
    1000: { items: 4 },
    1200: { items: 6 },
  };


  const category = [
    {
      id: 1,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-bakery-biscuits.jpg",
      title: "Bakery & Biscuits",
    },
    {
      id: 2,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg",
      title: "Instant Food",
    },
    {
      id: 3,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-tea-coffee-drinks.jpg",
      title: "Tea, Coffee & Drinks",
    },
    {
      id: 4,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-atta-rice-dal.jpg",
      title: "Atta,Rice & Dal",
    },
    {
      id: 5,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-baby-care.jpg",
      title: "Baby Care",
    },
    {
      id: 6,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-chicken-meat-fish.jpg",
      title: "Chicken, Meat & Fish",
    },
    {
      id: 7,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-cleaning-essentials.jpg",
      title: "Cleaning Essentials",
    },
    {
      id: 8,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-pet-care.jpg",
      title: "Pets Care",
    },
    {
      id: 9,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-dairy-bread-eggs.jpg",
      title: "Dairy, Bread & Eggs",
    },
    {
      id: 10,
      image:
        "https://freshcart.codescandy.com/assets/images/category/category-snack-munchies.jpg",
      title: "Snack & Munchies",
    },
  ];

  const nextSlide = () => {
    setIndex(index + 1);
  };

  const prevSlide = () => {
    setIndex(index - 1);
  };

  if (index == 9) {
    setIndex(0);
  }
  // Carousel featured product .MAP
  const featuredProduct = category.map((slide) => {
    return (
      <div className={styles.featuredProduct} key={slide.id}>
        <img src={slide.image} className={styles.carouselImg} />
        <p className={styles.productName}>{slide.title}</p>
      </div>
    );
  });

  /* <----- RETURN -----> */

  // Render the AliceCarousel component only on the client side
  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <h2 className={styles.categoryName}>Featured Categories</h2>
        <div className={styles.arrowContainer}>
          <IoIosArrowBack onClick={prevSlide} className={styles.arrowBack} />
          <IoIosArrowForward className={styles.arrowNext} onClick={nextSlide} />
        </div>
      </div>
      {typeof window !== "undefined" && (
        <AliceCarousel
          mouseTracking
          items={featuredProduct}
          responsive={responsive}
          autoPlay
          autoPlayControls={false}
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          activeIndex={index}
          onSlideChanged={() => setIndex(index + 1)}
        />
      )}
    </main>
  );
}
