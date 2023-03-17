import React from "react";
import styles from "../styles/GroceryBanner.module.css";

function CardGrid() {
  return (
    <main className={styles.main}>
      <div className={styles.grocery_banner_container}>
        <h2>Fruits & Végetables</h2>
        <p>Get Upto 30% Off</p>
        <button>Shop Now</button>
      </div>
      <div className={styles.grocery_banner2_container}>
        <h2>Freshly Baked Buns</h2>
        <p>Get Upto 25% Off</p>
        <button>Shop Now</button>
      </div>
    </main>
  );
}

export default CardGrid;
