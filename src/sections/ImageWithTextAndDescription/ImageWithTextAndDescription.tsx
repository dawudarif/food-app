import styles from "./ImageWithTextAndDescription.module.scss";
import locationMarkerIcon from "../../assets/location-marker.svg";
import phoneIcon from "../../assets/phone.svg";
import mailIcon from "../../assets/mail.svg";
import { transformNumericals } from "../../utils/transformNumericals";
import { useTranslation } from "react-i18next";

export default function ImageWithTextAndDescription({
  imageUrl,
  showButton = false,
}: {
  imageUrl: string;
  showButton?: boolean;
}) {
  const { t } = useTranslation();

  const data = [
    {
      icon: phoneIcon,
      content: transformNumericals(
        t("imageWithTextAndDescription.contactInfo.phone")
      ),
    },
    {
      icon: mailIcon,
      content: t("imageWithTextAndDescription.contactInfo.email"),
    },
    {
      icon: locationMarkerIcon,
      content: t("imageWithTextAndDescription.contactInfo.location"),
    },
  ];

  return (
    <section
      data-testid="image-with-text-and-description"
      className={styles.main}
    >
      <div className="container">
        <div className={styles.contentContainer}>
          <div
            className={styles.imageContainer}
            style={{
              background: `url(${imageUrl})`,
            }}
          >
            <div className={styles.imageContent}>
              <h1>{t("imageWithTextAndDescription.contactInfoHeading")}</h1>
              <div className={styles.contentParent}>
                {data.map((item, index) => (
                  <div key={index} className={styles.iconContent}>
                    <img src={item.icon} alt={item.content} />
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <h1>{t("imageWithTextAndDescription.heading")}</h1>
            <div>
              <strong>
                {t("imageWithTextAndDescription.boldDescription")}
              </strong>
              <p>{t("imageWithTextAndDescription.description")}</p>
            </div>

            {showButton && (
              <button>{t("imageWithTextAndDescription.button")}</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
