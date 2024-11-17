import breakfastImage from "../../assets/tea.svg";
import mainDishImage from "../../assets/dish.svg";
import drinkImage from "../../assets/drink.svg";
import dessertImage from "../../assets/cake.svg";
import styles from "./MenuLink.module.scss";
import { Link } from "react-router-dom";

const menu = [
  {
    title: "Breakfast",
    content: "Start your day with energy-packed meals crafted to perfection.",
    image: breakfastImage,
  },
  {
    title: "Main Dishes",
    content:
      "Savor hearty, flavorful dishes made with fresh, quality ingredients.",
    image: mainDishImage,
  },
  {
    title: "Drinks",
    content:
      "Refresh your palate with our wide range of beverages and cocktails.",
    image: drinkImage,
  },
  {
    title: "Desserts",
    content:
      "Indulge in sweet treats and delectable desserts crafted with care.",
    image: dessertImage,
  },
];

export default function MenuLinks() {
  return (
    <section data-testid="menu-links" className="container">
      <div className={styles.mainContainer}>
        <h1>Browse Our Menu</h1>
        <div className={styles.boxContainer}>
          {menu.map((item, index) => {
            return (
              <div key={index} className={styles.linkBox}>
                <span>
                  <img src={item.image} alt={item.title} />
                </span>

                <h5>{item.title}</h5>
                <p>{item.content}</p>

                <Link to="#">Explore Menu</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
