import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer_linksContainer}>
        <div className={styles.categoryContainer}>
          <h5 className={styles.linkSection__title}>Categories</h5>

          <section className={styles.footer_links__section}>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Vegetables & Fruits
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Breakfast & instant food
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Bakery & Biscuits
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>Atta, rice & dal</span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>Sauces & spreads</span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Organic & gourmet
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>Baby care</span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Cleaning essentials
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>Personal care</span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Dairy, bread & eggs
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Cold drinks & juices
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Tea, coffee & drinks
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Masala, oil & more
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Chicken, meat & fish
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>Paan corner</span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>
                Pharma & wellness
              </span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>Home & office</span>
            </Link>
            <Link href="/#">
              <span className={styles.linkSection__link}>Pet care</span>
            </Link>
          </section>
        </div>

        <section className={styles.footer_links__section}>
          <h5 className={styles.linkSection__title}>Get to know us</h5>
          <Link href="/#">
            <span className={styles.linkSection__link}>Company</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>About</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Blog</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Help Center</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Our Value</span>
          </Link>
        </section>
        <section className={styles.footer_links__section}>
          <h5 className={styles.linkSection__title}>For Consumers</h5>
          <Link href="/#">
            <span className={styles.linkSection__link}>Payments</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Shipping</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Product Returns</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>FAQ</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Shop Checkout</span>
          </Link>
        </section>
        <section className={styles.footer_links__section}>
          <h5 className={styles.linkSection__title}>Become a Shopper</h5>
          <Link href="/#">
            <span className={styles.linkSection__link}>
              Shopper Opportunities
            </span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Become a Shopper</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Earnings</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Ideas & Guides</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>New Retailers</span>
          </Link>
        </section>
        <section className={styles.footer_links__section}>
          <h5 className={styles.linkSection__title}>Freshcart programs</h5>
          <Link href="/#">
            <span className={styles.linkSection__link}>Freshcart programs</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Gift Cards</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Promos & Coupons</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Freshcart Ads</span>
          </Link>
          <Link href="/#">
            <span className={styles.linkSection__link}>Careers</span>
          </Link>
        </section>
      </div>
      <div className={styles.footer_informationsContainer}>
        <div className={styles.paymentPartners}>
          <p>Payment Partners</p>
          <Link href="/#" >
            <img src="https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg" className={styles.paymentPartners__link}/>
          </Link>
          <Link href="/#">
            <img src="https://freshcart.codescandy.com/assets/images/payment/american-express.svg" className={styles.paymentPartners__link}/>
          </Link>
          <Link href="/#" >
            <img src="https://freshcart.codescandy.com/assets/images/payment//mastercard.svg" className={styles.paymentPartners__link}/>
          </Link>
          <Link href="/#" >
            <img src="https://freshcart.codescandy.com/assets/images/payment/paypal.svg" className={styles.paymentPartners__link}/>
          </Link>
          <Link href="/#">
            <img src="https://freshcart.codescandy.com/assets/images/payment/visa.svg" className={styles.paymentPartners__link}/>
          </Link>
        </div>
        <div className={styles.storeApp}>
          <p>Get deliveries with FreshCart</p>
          <Link href="/#">
            <img src="https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg" className={styles.paymentPartners__link}/>
          </Link>
          <Link href="/#">
            <img src="https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg" className={styles.paymentPartners__link}/>
          </Link>
        </div>
      </div>
      <div className={styles.footer_copyrightContainer}>
        <div className={styles.copyrightSection}>
        <p>Copyright 2023 © FreshCart - Copy by Cyril ANDRIQUE eCommerce HTML Template. All rights reserved. Powered by Codescandy.
</p>
</div>
<div className={styles.socialNetwork}>
    <p>Follow us on  </p>
    <BsFacebook className={styles.socialNetwork_btn}/>
    <BsTwitter className={styles.socialNetwork_btn}/>
    <BsInstagram className={styles.socialNetwork_btn}/>
</div>

      </div>
    </div>
  );
}

export default Footer;
