import React from "react";
import styles from "../styles/DailyBestSells.module.css";
import { BsArrowRightShort } from "react-icons/bs";

function DailyBestSells() {
  return (
    <main className={styles.main}>
              <h2>Daily Best Sells</h2>
      <div className={styles.main__container}>

        <div className={styles.coffee_card}>
          <h3>100% Organic Cofee Beans.</h3>
          <p>Get the best deal before close.</p>
          <button>
            Shop now
            <BsArrowRightShort className={styles.arrow_btn} />
          </button>
        </div>
      </div>
    </main>
  );
}

export default DailyBestSells;
