import breakfastImage from "../../assets/tea.svg";
import mainDishImage from "../../assets/dish.svg";
import drinkImage from "../../assets/drink.svg";
import dessertImage from "../../assets/cake.svg";
import styles from "./MenuLink.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const menuConfig = [
  { key: "breakfast", image: breakfastImage },
  { key: "mainDishes", image: mainDishImage },
  { key: "drinks", image: drinkImage },
  { key: "desserts", image: dessertImage },
];

export default function MenuLinks() {
  const { t } = useTranslation();

  const menu = menuConfig.map((item) => ({
    title: t(`menu.${item.key}.title`),
    content: t(`menu.${item.key}.content`),
    image: item.image,
  }));

  return (
    <section data-testid="menu-links" className="container">
      <div className={styles.mainContainer}>
        <h1>{t("menu.title")}</h1>
        <div className={styles.boxContainer}>
          {menu.map((item, index) => {
            return (
              <div key={index} className={styles.linkBox}>
                <span>
                  <img src={item.image} alt={item.title} />
                </span>

                <h5>{item.title}</h5>
                <p>{item.content}</p>

                <Link to="#">{t("menu.button")}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
