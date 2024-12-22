import SEO from "../../components/SEO/SEO";
import HomeHero from "../../sections/HomeHero/HomeHero";
import ImageGalleryWithText from "../../sections/ImageGalleryWithText/ImageGalleryWithText";
import ImageWithTextAndDescription from "../../sections/ImageWithTextAndDescription/ImageWithTextAndDescription";
import MenuLinks from "../../sections/MenuLinks/MenuLinks";
import OurServices from "../../sections/OurServices/OurServices";
import Testimonials from "../../sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <SEO titleKey="seo.homeTitle" descriptionKey="seo.homeDescription" />
      <HomeHero />
      <MenuLinks />
      <ImageWithTextAndDescription
        imageUrl="https://res.cloudinary.com/dowc89eyy/image/upload/v1731857365/food-app/sbqrgvthaldfeb0i5yqo.jpg"
        showButton={true}
      />
      <OurServices />
      <ImageGalleryWithText />
      <Testimonials />
    </>
  );
}
