import breakfastImage from "../../assets/tea.svg";
import mainDishImage from "../../assets/dish.svg";
import drinkImage from "../../assets/drink.svg";
import dessertImage from "../../assets/cake.svg";
import styles from "./MenuLink.module.scss";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Breakfast",
    content:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    image: breakfastImage,
  },
  {
    title: "Main Dishes",
    content:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    image: mainDishImage,
  },
  {
    title: "Drinks",
    content:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    image: drinkImage,
  },
  {
    title: "Desserts",
    content:
      "In the new era of technology we look in the future with certainty and pride for our life.",
    image: dessertImage,
  },
];

export default function MenuLinks() {
  return (
    <section data-testid="menu-links" className="container">
      <div className={styles.mainContainer}>
        <h1>Browse Our Menu</h1>
        <div className={styles.boxContainer}>
          {data.map((item, index) => {
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
