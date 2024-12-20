import React from "react";
import styles from "./OrderApps.module.scss";
import uberEatsImage from "../../assets/uber-eats.svg";
import grubhubImage from "../../assets/grubhub.svg";
import postmatesImage from "../../assets/postmates.svg";
import doordashImage from "../../assets/doordash.svg";
import foodPandaImage from "../../assets/food-panda.svg";
import deliverooImage from "../../assets/deliveroo.svg";
import instaCartImage from "../../assets/instacart.svg";
import justEatImage from "../../assets/just-eat.svg";
import didiFoodImage from "../../assets/didi-food.svg";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const icons = [
  uberEatsImage,
  grubhubImage,
  postmatesImage,
  doordashImage,
  foodPandaImage,
  deliverooImage,
  instaCartImage,
  justEatImage,
  didiFoodImage,
];

export default function OrderApps() {
  const { t } = useTranslation();

  return (
    <section data-tesid="order-apps" className={styles.main}>
      <div className={clsx(styles.mainContainer, "container")}>
        <div className={styles.textContainer}>
          <h1>{t("orderApps.heading")}</h1>
          <p>{t("orderApps.bodyText")}</p>
        </div>
        <div className={styles.imageGrid}>
          {icons.map((icon, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={icon} alt={"Order App" + index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
