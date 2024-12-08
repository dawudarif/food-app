import styles from "./Footer.module.scss";
import logoImage from "../../../assets/white-logo.svg";
import useTranslatedRoutes from "../../../hooks/useTranslatedRoutes";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Facebook, Instagram, Twitter } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1733673363/food-app/mrbmlbr3v8p6k9tqnoqd.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1733673364/food-app/zsn6hbzscvuodtzgfnmu.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1733673364/food-app/dpqia7avsdjtx1irhdh8.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1733673497/food-app/sq7nut91quxajbvtpfx2.jpg",
];

export default function Footer() {
  const links = useTranslatedRoutes({ nav: false });

  return (
    <footer className={styles.footerMain}>
      <div className={clsx(styles.footer, "container")}>
        <div className={styles.logoContent}>
          <span>
            <img src={logoImage} alt="logo" />
            <h1>Bistro Bliss</h1>
          </span>
          <p>
            In the new era of technology we look a in the future with certainty
            and pride to for our company and.
          </p>

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
          <h1>Pages</h1>
          <div>
            {links.map((link) => (
              <Link to={link.path}>{link.name}</Link>
            ))}
          </div>
        </div>

        <div className={styles.images}>
          <h1>Follow Us On Instagram</h1>
          <div>
            {images.map((item, i) => (
              <img src={item} alt={"image" + i + 1} />
            ))}
          </div>
        </div>
      </div>
      <div className={clsx(styles.rightsContent, "container")}>
        <h4>
          Copyright © {new Date().getFullYear()} Dawood Arif. All Rights
          Reserved
        </h4>
      </div>
    </footer>
  );
}
