import SEO from "../../components/SEO/SEO";
import ImageWithTextAndDescription from "../../sections/ImageWithTextAndDescription/ImageWithTextAndDescription";
import OrderApps from "../../sections/OrderApps/OrderApps";
import OverlaySection from "../../sections/OverlaySection/OverlaySection";

export default function About() {
  return (
    <>
      <SEO titleKey="seo.aboutTitle" descriptionKey="seo.aboutDescription" />
      <ImageWithTextAndDescription imageUrl="https://res.cloudinary.com/dowc89eyy/image/upload/v1732211365/food-app/qrw36u3afekc3rwmhxtd.jpg" />
      <OverlaySection />
      <OrderApps />
    </>
  );
}
