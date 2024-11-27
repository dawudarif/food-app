import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  const { t } = useTranslation();

  return (
    <section data-testid="home-hero" className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <h1>{t("hero.title")}</h1>
          <h6>{t("hero.desc")}</h6>

          <div>
            <Link to="book-a-table">
              <button className={styles.redBtn}>{t("hero.buttonOne")}</button>
            </Link>
            <button className={styles.transparentBtn}>
              {t("hero.buttonTwo")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
