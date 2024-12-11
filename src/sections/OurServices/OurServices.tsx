import { useTranslation } from "react-i18next";
import styles from "./OurServices.module.scss";

export default function OurServices() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("ourServices.catering.title"),
      description: t("ourServices.catering.description"),
      imageUrl:
        "https://res.cloudinary.com/dowc89eyy/image/upload/v1731858091/food-app/yvbjrnqpeo4myju8kdvi.jpg",
    },
    {
      title: t("ourServices.birthdays.title"),
      description: t("ourServices.birthdays.description"),
      imageUrl:
        "https://res.cloudinary.com/dowc89eyy/image/upload/v1731858158/food-app/xzfcfmr8kcgnwknfsbso.jpg",
    },
    {
      title: t("ourServices.weddings.title"),
      description: t("ourServices.weddings.description"),
      imageUrl:
        "https://res.cloudinary.com/dowc89eyy/image/upload/v1731858098/food-app/fcyfdvp07r3vtx2vjvlr.jpg",
    },
    {
      title: t("ourServices.events.title"),
      description: t("ourServices.events.description"),
      imageUrl:
        "https://res.cloudinary.com/dowc89eyy/image/upload/v1731858102/food-app/mytnhgxe0os1ovtouvtu.jpg",
    },
  ];
  return (
    <section data-testid="our-services" className="container">
      <div className={styles.mainContainer}>
        <h1>{t("ourServices.heading")}</h1>

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
