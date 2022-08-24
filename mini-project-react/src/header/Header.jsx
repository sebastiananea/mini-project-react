import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className={styles.navHeader}>
      <ul className={styles.navUl}>
        <NavLink className={styles.link} to="/table">
          Tabla
        </NavLink>
        <NavLink className={styles.link} to="/form">
          Formulario
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
