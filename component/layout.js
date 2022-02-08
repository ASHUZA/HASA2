import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import styles2 from "../styles/Home.module.css";
import logo5 from "../pages/images/logo5.jpg";
export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={styles2.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <div className={styles.navlogo}>
              {" "}
              <Image src={logo5} alt="" />
            </div>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Accueil
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  A propos de nous
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                 Nous contacter
                </a>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
      {children}
    </>
  );
}
