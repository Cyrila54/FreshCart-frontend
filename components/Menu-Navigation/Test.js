import React, { useState } from "react";
import styles from "../Menu-Navigation/Home_menu.module.css";
import {BiChevronDown} from 'react-icons/bi'

export default function Home_menu() {
  const [modal, setModal] = useState(false);

  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "About",
      url: "/about",
    },
  ];

  const handleOpen = () => {
    setModal(!modal);
  };

  return (
    <nav 
    onMouseEnter={() => handleOpen()} 
    onMouseLeave={() => handleOpen()} 
    className={styles.navigation}>
      <ul >
        <li>Test <BiChevronDown/></li>
        {modal &&
          menuItems.map((menu, index) => {
            return (
              <li className={styles.menuItems} key={index}>
                <a href={menu.url}>{menu.title}</a>
              </li>
            );
          })}
      </ul>
    
    </nav>
  );
}
