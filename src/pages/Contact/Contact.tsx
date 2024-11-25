import { useTranslation } from "react-i18next";
import styles from "./Contact.module.scss";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className={styles.contact}>
      <div className={styles.containerOne}>
        <h1>{t("contactUsHeading")}</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
        <form>
          <div>
            <label htmlFor="name">
              <p>Name</p>
              <input type="text" name="name" placeholder="Enter your name" />
            </label>
            <label htmlFor="email">
              <p>Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
              />
            </label>
          </div>
          <label htmlFor="subject">
            <p>Subject</p>
            <input type="text" name="subject" placeholder="Write a subject" />
          </label>
          <label htmlFor="message">
            <p>Message</p>
            <textarea
              rows={10}
              name="message"
              placeholder="Write your message"
            />
          </label>
          <button>Send</button>
        </form>
      </div>

      <div className={styles.containerTwo}>
        <div className={styles.contactContainer}>
          <div>
            <h1>Call Us:</h1>
            <a href="tel:12345678900">+1-234-567-8900</a>
          </div>
          <div>
            <h1>Hours:</h1>

            <span>
              <p>Mon-Fri: 11am - 8pm </p>
              <p>Sat, Sun: 9am - 10pm</p>
            </span>
          </div>
          <div>
            <h1>Our Location:</h1>
            <p>123 Bridge Street Nowhere Land, LA 12345 United States</p>
          </div>
        </div>
      </div>
    </div>
  );
}
