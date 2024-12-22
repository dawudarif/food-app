import { useTranslation } from "react-i18next";
import SEO from "../../components/SEO/SEO";
import { transformNumericals } from "../../utils/transformNumericals";
import styles from "./Contact.module.scss";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        titleKey="seo.contactTitle"
        descriptionKey="seo.contactDescription"
      />
      <div className={styles.contact}>
        <div className={styles.containerOne}>
          <h1>{t("contactUs.heading")}</h1>
          <p>{t("contactUs.description")}</p>
          <form>
            <div>
              <label htmlFor="name">
                <p>{t("contactUs.inputs.name.name")}</p>
                <input
                  type="text"
                  name="name"
                  placeholder={t("contactUs.inputs.name.placeholder")}
                />
              </label>
              <label htmlFor="email">
                <p>{t("contactUs.inputs.email.name")}</p>
                <input
                  type="email"
                  name="email"
                  placeholder={t("contactUs.inputs.email.placeholder")}
                />
              </label>
            </div>
            <label htmlFor="subject">
              <p>{t("contactUs.inputs.subject.name")}</p>
              <input
                type="text"
                name="subject"
                placeholder={t("contactUs.inputs.subject.placeholder")}
              />
            </label>
            <label htmlFor="message">
              <p>{t("contactUs.inputs.message.name")}</p>
              <textarea
                rows={10}
                name="message"
                placeholder={t("contactUs.inputs.message.placeholder")}
              />
            </label>
            <button>{t("contactUs.inputs.send")}</button>
          </form>
        </div>

        <div className={styles.containerTwo}>
          <div className={styles.contactContainer}>
            <div>
              <h1>{t("contactUs.info.call")}</h1>
              <a href="tel:12345678900">
                {transformNumericals("+1 - 234 - 567 - 8900")}
              </a>
            </div>
            <div>
              <h1>{t("contactUs.info.hours.title")}</h1>
              <span>
                <p>{t("contactUs.info.hours.desc")}</p>
                <p>{t("contactUs.info.hours.desc2")}</p>
              </span>
            </div>
            <div>
              <h1>{t("contactUs.info.location.title")}</h1>
              <p>{t("contactUs.info.location.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
