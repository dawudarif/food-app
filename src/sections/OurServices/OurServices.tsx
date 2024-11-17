import clsx from "clsx";
import styles from "./OurServices.module.scss";

const services = [
  {
    title: "Catering",
    description:
      "Delicious, customized menus crafted with fresh ingredients for any occasion.",
    imageUrl:
      "https://res.cloudinary.com/dowc89eyy/image/upload/v1731858091/food-app/yvbjrnqpeo4myju8kdvi.jpg",
  },
  {
    title: "Birthdays",
    description:
      "Exciting themed parties with fun activities, décor, and custom treats.",
    imageUrl:
      "https://res.cloudinary.com/dowc89eyy/image/upload/v1731858158/food-app/xzfcfmr8kcgnwknfsbso.jpg",
  },
  {
    title: "Weddings",
    description:
      "Comprehensive wedding planning to make your special day unforgettable.",
    imageUrl:
      "https://res.cloudinary.com/dowc89eyy/image/upload/v1731858098/food-app/fcyfdvp07r3vtx2vjvlr.jpg",
  },
  {
    title: "Events",
    description:
      "Professional event management for corporate, social, and casual gatherings.",
    imageUrl:
      "https://res.cloudinary.com/dowc89eyy/image/upload/v1731858102/food-app/mytnhgxe0os1ovtouvtu.jpg",
  },
];

export default function OurServices() {
  return (
    <section data-testid="our-services" className="container">
      <div className={styles.mainContainer}>
        <h1>We also offer unique services for your events</h1>

        <div className={styles.cardsParent}>
          {services.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <img src={item.imageUrl} alt={item.title} />
                <h1>{item.title}</h1>
                <h4>{item.description}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
