import styles from "../styles/header.module.css";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShopping,
} from "react-icons/ai";
import { CiLocationOn, CiSearch, CiGrid41 } from "react-icons/ci";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Home_menu from "./Menu-Navigation/Home_menu";
import Test from "./Menu-Navigation/Test";


export default function Header() {



  return (
    <main className={styles.mainContainer}>
      <div className={styles.top_container}>
        <div className={styles.searchContainer}>
          <img
            src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"
            alt="Logo"
            className={styles.logo}
          />
          <div className={styles.inputContainer}>
            <input
              placeholder="Search for products"
              className={styles.searchInput}
            />
            <CiSearch className={styles.searchIcon} />
          </div>
          <button className={styles.locationButton}>
            <CiLocationOn className={styles.locationIcon} />
            Location
          </button>
        </div>
        <div className={styles.icons_container}>
          <AiOutlineHeart className={styles.likeIcon} />
          <AiOutlineUser className={styles.userIcon} />
          <AiOutlineShopping className={styles.shopIcon} />
          <AiOutlineMenuUnfold className={styles.menu_mobile} />
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.navigation}>
          
             <button className={styles.departmentButton}>
              <CiGrid41 className={styles.gridIcon} />
              All Departments
            </button> 
            
{/*             <Home_menu style={styles.navigation}/>
            <Home_menu style={styles.navigation}/> */}
            

           
            <ul>
             <li>Shop</li>
            <li>Store</li>
            <li>Mega Menu</li>
            <li>Pages</li>
            <li>Account</li>
            <li>Dashboard</li>
            </ul>
          
        </div>
        

      </div>
    </main>
  );
}
