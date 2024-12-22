import clsx from "clsx";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SEO from "../../components/SEO/SEO";
import { menuItems } from "../../data/menuItems";
import { transformNumericals } from "../../utils/transformNumericals";
import styles from "./Menu.module.scss";

export default function Menu() {
  const [items, setItems] = useState<MenuItem[]>(menuItems);
  const [activeFilter, setActiveFilter] = useState("all");
  const { t } = useTranslation();

  const allTypes = t("menuItems.types", { returnObjects: true });

  const filterByType = (type: string) => {
    setActiveFilter(type);
    if (type === "all") {
      setItems(menuItems);
    } else {
      const filteredItems = menuItems.filter((item) => item.type === type);
      setItems(filteredItems);
    }
  };

  return (
    <>
      <SEO titleKey="seo.menuTitle" descriptionKey="seo.menuDescription" />
      <div className={clsx(styles.main, "container")}>
        <div className={styles.textContainer}>
          <h1>{t("menuItems.mainHeading")}</h1>
          <p>{t("menuItems.mainDescription")}</p>
        </div>

        <div className={styles.filters}>
          {Object.entries(allTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className={clsx(activeFilter === key && styles.active)}
                onClick={() => filterByType(key)}
              >
                {value}
              </button>
            );
          })}
        </div>

        <div className={styles.menuItems}>
          {items.map((item, i) => {
            const menuItem: MenuItemLocalization = t(`menuItems.${item.key}`, {
              returnObjects: true,
            });

            return (
              <div key={i} className={styles.item}>
                <img src={item.image} alt={menuItem.title} />
                <div>
                  <span>${transformNumericals(item.price)}</span>
                  <h1>{menuItem.title}</h1>
                  <p>{menuItem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
