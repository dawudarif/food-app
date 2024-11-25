import styles from "./Testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonialData: Translations[] = t("testimonials", {
    returnObjects: true,
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section data-testid="testimonials-section" className={styles.main}>
      <div className="container">
        <h1>{t("testimonials_heading")}</h1>
        <div>
          <Slider {...settings} className="slick">
            {testimonialData?.map((item, index) => {
              return (
                <div key={index} className={styles.mainTextContainer}>
                  <div className={styles.textContainer}>
                    <div>
                      <h1>{item.title}</h1>
                      <h4>{item.description}</h4>
                    </div>
                    <div className={styles.authorContent}>
                      <span>{item.author.slice(0, 2)}</span>
                      <div>
                        <h6>{item.author}</h6>
                        <p>{item.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
