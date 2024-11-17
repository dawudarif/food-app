import styles from "./ImageWithTextAndDescription.module.scss";
import locationMarkerIcon from "../../assets/location-marker.svg";
import phoneIcon from "../../assets/phone.svg";
import mailIcon from "../../assets/mail.svg";

const data = [
  {
    icon: phoneIcon,
    content: "(414) 857 - 0107",
  },
  {
    icon: mailIcon,
    content: "contact@bistrobliss.com",
  },
  {
    icon: locationMarkerIcon,
    content: "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles",
  },
];

export default function ImageWithTextAndDescription() {
  return (
    <section
      data-testid="image-with-text-and-description"
      className={styles.main}
    >
      <div className="container">
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageContent}>
              <h1>Come and Visit Us</h1>
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
            <h1>We provide healthy food for your family.</h1>
            <div>
              <strong>
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance. Rooted in city's rich culinary culture, we aim
                to honor our local roots while infusing a global palate.
              </strong>
              <p>
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>

            <button>More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
