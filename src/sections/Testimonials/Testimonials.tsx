import styles from "./Testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    title: "The best restaurant",
    description:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    author: "Sophie Robson",
    location: "Los Angeles, CA",
  },
  {
    title: "Simply delicious",
    description:
      "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    author: "Matt Cannon",
    location: "San Diego, CA",
  },
  {
    title: "One of a kind restaurant",
    description:
      "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    author: "Andy Smith",
    location: "San Francisco, CA",
  },
  {
    title: "Unforgettable experience",
    description:
      "The flavors at this place are unforgettable. Every bite was a symphony of tastes, and the staff went above and beyond to make us feel special.",
    author: "Emily Carter",
    location: "Austin, TX",
  },
  {
    title: "Exquisite dining",
    description:
      "From start to finish, the dining experience here was exquisite. The presentation of the food was artful, and the taste was just as impressive.",
    author: "Michael Lee",
    location: "New York, NY",
  },
  {
    title: "Perfect for celebrations",
    description:
      "We celebrated a birthday here, and it was the perfect choice. The staff made it a memorable night, and the food was simply outstanding.",
    author: "Olivia Martinez",
    location: "Chicago, IL",
  },
  {
    title: "A hidden gem",
    description:
      "This place is a hidden gem. Everything from the decor to the flavors of the dishes was spot on. We’ll definitely be coming back!",
    author: "Noah Wilson",
    location: "Portland, OR",
  },
  {
    title: "Exceptional service",
    description:
      "The service was exceptional, and the food matched the high standards. You can feel the passion and care in every detail.",
    author: "Sophia Davis",
    location: "Seattle, WA",
  },
  {
    title: "Culinary masterpiece",
    description:
      "Every dish was a culinary masterpiece. The chef truly knows how to blend flavors and textures to create something magical.",
    author: "Liam Brown",
    location: "Miami, FL",
  },
  {
    title: "A feast for the senses",
    description:
      "This restaurant offers a feast for all the senses. The visual presentation, aroma, and flavors are second to none.",
    author: "Ava Johnson",
    location: "Denver, CO",
  },
  {
    title: "Best date night spot",
    description:
      "My partner and I had the best date night here. The ambiance was romantic, and the food was impeccable. Highly recommended!",
    author: "Ethan Garcia",
    location: "Phoenix, AZ",
  },
  {
    title: "Worth every penny",
    description:
      "This restaurant may be on the pricier side, but it's worth every penny. You get an unforgettable experience and world-class dishes.",
    author: "Isabella Hernandez",
    location: "Dallas, TX",
  },
  {
    title: "Family-friendly and amazing",
    description:
      "We brought our kids, and the staff was so accommodating. The menu had something for everyone, and every dish was superb.",
    author: "Charlotte Thomas",
    location: "Atlanta, GA",
  },
];

export default function Testimonials() {
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
        <h1>What Our Customers Say</h1>
        <div>
          <Slider {...settings} className="slick">
            {testimonialData.map((item, index) => {
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
