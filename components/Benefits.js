import React from "react";
import styles from "../styles/Benefits.module.css";

function Benefits() {
  return (
    <main className={styles.main}>
      <div className={styles.grid_card}>
        <img src="https://freshcart.codescandy.com/assets/images/icons/clock.svg"/>
        <h4>10 minute grocery now</h4>
        <p>
          Get your order delivered to your doorstep at the earliest from
          FreshCart pickup stores near you.
        </p>
      </div>
      <div className={styles.grid_card}>
        <img src="https://freshcart.codescandy.com/assets/images/icons/gift.svg"/>
        <h4>Best Prices & Offers</h4>
        <p>
        Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.
        </p>
      </div>
      <div className={styles.grid_card}>
        <img src="https://freshcart.codescandy.com/assets/images/icons/package.svg"/>
        <h4>Wide Assortment</h4>
        <p>
        Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.
        </p>
      </div>
      <div className={styles.grid_card}>
        <img src="https://freshcart.codescandy.com/assets/images/icons/refresh-cw.svg"/>
        <h4>Easy Returns</h4>
        <p>
        Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.
        </p>
      </div>
    </main>
  );
}

export default Benefits;
