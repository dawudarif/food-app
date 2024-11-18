import clsx from "clsx";
import styles from "./ImageGalleryWithText.module.scss";
import clockIcon from "../../assets/clock.svg";
import receiptIcon from "../../assets/receipt-tax.svg";
import cartIcon from "../../assets/shopping-cart.svg";

const images = [
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1731905175/food-app/wkble7q9csgj8wwsrzmh.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1731905179/food-app/l92tbwgolet4jdacq7mn.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1731905156/food-app/tp50vufghibxfywkeuen.jpg",
];

const items = [
  { icon: clockIcon, text: "Delivery within 30 minutes" },
  { icon: receiptIcon, text: "Best Offer & Prices" },
  {
    icon: cartIcon,
    text: "Online Services Available",
  },
];

export default function ImageGalleryWithText() {
  return (
    <section data-testid="image-gallery-with-text" className={styles.main}>
      <div className={clsx(styles.contentContainer, "container")}>
        <div className={styles.imageContainer}>
          <img src={images[0]} alt="chef" className={styles.mainImage} />

          <div>
            <img src={images[1]} alt="dish" className={styles.secondImage} />
            <img src={images[2]} alt="shrimp" className={styles.thirdImage} />
          </div>
        </div>

        <div className={styles.textContainer}>
          <h1>Fastest Food Delivery in City</h1>
          <p>
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.
          </p>

          <div className={styles.iconsContainer}>
            {items.map((item, index) => {
              return (
                <div key={index}>
                  <span>
                    <img src={item.icon} alt={item.text} />
                  </span>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
