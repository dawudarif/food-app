import styles from "./Footer.module.scss";
import logoImage from "../../../assets/white-logo.svg";
import useTranslatedRoutes from "../../../hooks/useTranslatedRoutes";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { transformNumericals } from "../../../utils/transformNumericals";

const images = [
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1733673363/food-app/mrbmlbr3v8p6k9tqnoqd.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1733673364/food-app/zsn6hbzscvuodtzgfnmu.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1733673364/food-app/dpqia7avsdjtx1irhdh8.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1733673497/food-app/sq7nut91quxajbvtpfx2.jpg",
];

export default function Footer() {
  const links = useTranslatedRoutes({ type: "nav" });
  const { t } = useTranslation();

  return (
    <footer className={styles.footerMain}>
      <div className={clsx(styles.footer, "container")}>
        <div className={styles.logoContent}>
          <span>
            <img src={logoImage} alt="logo" />
            <h1>Bistro Bliss</h1>
          </span>
          <p>{t("footer.description")}</p>

          <div className={styles.socialIcons}>
            <span>
              <Facebook size={16} color="white" />
            </span>
            <span>
              <Twitter size={16} color="white" />
            </span>
            <span>
              <Instagram size={16} color="white" />
            </span>
          </div>
        </div>

        <div className={styles.pages}>
          <h1>{t("footer.pages")}</h1>
          <div>
            {links.map((link, i) => (
              <Link to={link.path} key={i}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.images}>
          <h1>{t("footer.followUs")}</h1>
          <div>
            {images.map((item, i) => (
              <img key={i} src={item} alt={"image" + i + 1} />
            ))}
          </div>
        </div>
      </div>
      <div className={clsx(styles.rightsContent, "container")}>
        <h4>
          {t("footer.copyright")}{" "}
          {transformNumericals(new Date().getFullYear())}{" "}
          {t("footer.copyrightContent")}
        </h4>
      </div>
    </footer>
  );
}
