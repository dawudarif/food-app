import clsx from "clsx";
import { Facebook, Instagram, Mail, Menu, Phone, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useTranslatedRoutes from "../../../hooks/useTranlatedRoutes";
import styles from "./Header.module.scss";

export default function Header() {
  const { pathname } = useLocation();
  const [showMobileHeader, setShowMobileHeader] = useState(false);

  useEffect(() => {
    setShowMobileHeader(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.thinHeader}>
          <div className={clsx(styles.thinHeaderContainer, "container")}>
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
          <div className={clsx("container")}>
            <div className={styles.iconContainer}>
              <img src="/favicon.svg" alt="logo" />
              <p>Bistro Bliss</p>
            </div>

            <div className={styles.navContainer}>
              <div className={styles.navLinks}>
                <NavLinks pathname={pathname} />
              </div>

              <Menu
                color="#2c2f24"
                size={30}
                className={styles.menuIcon}
                onClick={() => setShowMobileHeader(!showMobileHeader)}
              />

              <button className={styles.navBtn}>Book A Table</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.relativeHeader}>
        <div className={styles.mobileHeaderParent}>
          <div
            className={clsx(
              showMobileHeader ? styles.visible : styles.hidden,
              styles.mobileHeader
            )}
          >
            <NavLinks pathname={pathname} />
            <button className={styles.navBtn}>Book A Table</button>
          </div>
        </div>
      </div>
    </>
  );
}

const NavLinks = ({ pathname }: { pathname: string }) => {
  const routes = useTranslatedRoutes();

  return (
    <>
      {routes.map((item, index) => {
        console.log(pathname === item.path);

        const activeClasses =
          pathname === item.path ? styles.activeLink : undefined;

        return (
          <Link to={item.path} key={index} className={activeClasses}>
            {item.name}
          </Link>
        );
      })}
    </>
  );
};
