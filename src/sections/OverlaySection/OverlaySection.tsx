import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./OverlaySection.module.scss";
import uiIcon from "../../assets/ui.svg";
import cuisineIcon from "../../assets/cuisine.svg";
import timerIcon from "../../assets/timer.svg";
import clsx from "clsx";

const icons = [uiIcon, cuisineIcon, timerIcon];

export default function OverlaySection() {
  const { t } = useTranslation();

  const features: Features[] = t("overlayFeatures", {
    returnObjects: true,
  });

  return (
    <section data-testid="overlay-section">
      <div className={styles.overlay}>
        <h1>{t("overlayHeading")}</h1>
      </div>

      <div className={clsx("container", styles.features)}>
        {features?.map((item, i) => (
          <div key={i}>
            <img src={icons[i]} alt={"icon" + i} />
            <span>
              <h4>{item.title}</h4>
              <h5>{item.description}</h5>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
