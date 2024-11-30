import clsx from "clsx";
import {
  Facebook,
  Instagram,
  Languages,
  Mail,
  Menu,
  Phone,
  Twitter,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useTranslatedRoutes from "../../../hooks/useTranslatedRoutes";
import i18n from "../../../i18n/i18next";
import { getTranslationLocales } from "../../../lib/getTranslationLocales";
import styles from "./Header.module.scss";

export default function Header() {
  const { pathname } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languages = getTranslationLocales({
    type: "all",
  }) as Language[];

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
              <div
                className={clsx(styles.dropdown, styles.socialIcon)}
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                <Languages size={20} color="white" />
                <div
                  className={clsx(styles.dropdownContainer)}
                  ref={dropdownRef}
                  style={{
                    height: isLanguageDropdownOpen
                      ? `${dropdownRef.current?.scrollHeight}px`
                      : "0px",
                    scale: isLanguageDropdownOpen ? "1" : "0.5",
                  }}
                >
                  {languages.map((locale) => (
                    <div
                      key={locale.label}
                      onClick={() => i18n.changeLanguage(locale.label)}
                    >
                      <img src={locale.image} alt={locale.name} />
                      <p>{locale.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.navbar}>
          <div className={clsx("container", styles.navbarContainer)}>
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

              <Link to="/book-a-table">
                <button className={styles.navBtn}>Book A Table</button>
              </Link>
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
            <Link to="/book-a-table">
              <button className={styles.navBtn}>Book A Table</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const NavLinks = ({ pathname }: { pathname: string }) => {
  const routes = useTranslatedRoutes({ nav: true });

  return (
    <>
      {routes.map((item, index) => {
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
