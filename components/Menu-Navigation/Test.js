import React, { useState } from "react";
import styles from "./Menu-Navigation/Test.module.css";

export default function Test() {
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

  return (
    <nav>
      <ul className="menus">Nav Items here</ul>
    </nav>
  );
}
