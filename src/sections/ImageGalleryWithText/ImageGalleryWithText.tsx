import clsx from "clsx";
import styles from "./ImageGalleryWithText.module.scss";
import clockIcon from "../../assets/clock.svg";
import receiptIcon from "../../assets/receipt-tax.svg";
import cartIcon from "../../assets/shopping-cart.svg";
import { useTranslation } from "react-i18next";

const images = [
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1731905175/food-app/wkble7q9csgj8wwsrzmh.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1731905179/food-app/l92tbwgolet4jdacq7mn.jpg",
  "https://res.cloudinary.com/dowc89eyy/image/upload/v1731905156/food-app/tp50vufghibxfywkeuen.jpg",
];

export default function ImageGalleryWithText() {
  const { t } = useTranslation();

  const items = [
    { icon: clockIcon, text: t("ImageGalleryWithText.featureText1") },
    { icon: receiptIcon, text: t("ImageGalleryWithText.featureText2") },
    {
      icon: cartIcon,
      text: t("ImageGalleryWithText.featureText3"),
    },
  ];

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
          <h1>{t("ImageGalleryWithText.title")}</h1>
          <p>{t("ImageGalleryWithText.description")}</p>

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
