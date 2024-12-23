import clsx from "clsx";
import { changeLanguage } from "i18next";
import {
  Facebook,
  Instagram,
  Languages,
  Mail,
  Menu,
  Phone,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import useTranslatedRoutes from "../../../hooks/useTranslatedRoutes";
import { getTranslationLocales } from "../../../utils/getTranslationLocales";
import { transformNumericals } from "../../../utils/transformNumericals";
import styles from "./Header.module.scss";

export default function Header() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const lng = i18n.language;

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
                <p>{transformNumericals("(414) 857 - 0107")}</p>
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
                  className={clsx(
                    styles.dropdownContainer,

                    isLanguageDropdownOpen
                      ? styles.showDropdown
                      : styles.hideDropdown
                  )}
                >
                  {languages.map((locale) => (
                    <div
                      key={locale.label}
                      onClick={() => changeLanguage(locale.label)}
                      className={clsx(lng === locale.label && styles.activeLng)}
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
            <Link to="/" className={styles.iconContainer}>
              <img src="/favicon.svg" alt="logo" />
              <p>Bistro Bliss</p>
            </Link>

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
                <button className={styles.navBtn}>
                  {t("routes.bookTableBtn")}
                </button>
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
            <Link to="/book-a-table" className={styles.mobileNavBtn}>
              <button>{t("routes.bookTableBtn")}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const NavLinks = ({ pathname }: { pathname: string }) => {
  const routes = useTranslatedRoutes({ type: "nav" });

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
