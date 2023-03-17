import React from "react";
import styles from "../styles/Hero.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


export default function Hero() {
  const images = [
    {
      id: 1,
      image: "./slide-1.jpg",
      title: "SuperMarket For Fresh Grocery",
      description:
        "Introduced a new model for online grocery shopping and convenient home delivery.",
      button: "See More",
      info: "Opening Sale Discount 50%",
    },
    {
      id: 2,
      image: "./slide-2.jpg",
      title: `Free Shipping on orders over `,
      description:
        "Free shipping to first-time customers only after promotions and discounts are applied.",
      button: "Shop Now",
      info: "Free Shipping : orders over $100",
    },
  ];

  let price = <span className={styles.price}> $100</span>;

  // Carousel .MAP
  const carouselImg = images.map((slide) => {
    return (
      <div
        key={slide.id}
        style={{ backgroundImage: `url(${slide.image})` }}
        className={styles.carouselImg}
      >
        <div className={styles.text_container}>
          <p className={styles.infos}>{slide.info}</p>
          <h2 className={styles.overlay_title}>
            {slide.title}
            {slide.id == 2 ? price : ""}
          </h2>
          <p className={styles.overlay_text}>{slide.description}</p>
          <button className={styles.button}>{slide.button} </button>
        </div>
      </div>
    );
  });

  return (
    <main>
      <Carousel
        autoPlay
        infiniteLoop
        interval={6000}
        thumbWidth={120}
        showIndicators={true}
        showStatus={false}
        stopOnHover={true}
        transitionTime={500}
        showThumbs={false}
        className={styles.carousel}
      >
        {carouselImg}
      </Carousel>
    </main>
  );
}
