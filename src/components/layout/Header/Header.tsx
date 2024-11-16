import { Phone, Mail, Facebook, Twitter, Instagram, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../../App";
import styles from "./Header.module.scss";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.thinHeader}>
        <div className="container">
          <div className={styles.iconMain}>
            <div className={styles.icon}>
              <Phone size={20} color="white" />
              <p>(414) 857 - 0107</p>
            </div>

            <div className={styles.icon}>
              <Mail size={20} color="white" />
              <p>contact@bistrobliss.com</p>
            </div>
          </div>

          <div className={styles.iconMain}>
            <div className={styles.socialIcon}>
              <Facebook size={20} color="white" />
            </div>
            <div className={styles.socialIcon}>
              <Twitter size={20} color="white" />
            </div>
            <div className={styles.socialIcon}>
              <Instagram size={20} color="white" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.iconContainer}>
            <img src="/favicon.svg" alt="logo" />
            <p>Bistro Bliss</p>
          </div>

          <div className={styles.navContainer}>
            <div className={styles.navLinks}>
              {routes.map((item, index) => {
                console.log(pathname, item.path);

                return (
                  <Link
                    to={item.path}
                    key={index}
                    className={
                      pathname === item.path ? styles.activeLink : undefined
                    }
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <Menu color="#2c2f24" size={30} className={styles.menuIcon} />

            <button className={styles.navBtn}>Book A Table</button>
          </div>
        </div>
      </div>
    </div>
  );
}
