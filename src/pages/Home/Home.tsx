import React from "react";
import HomeHero from "../../sections/HomeHero/HomeHero";
import ImageGalleryWithText from "../../sections/ImageGalleryWithText/ImageGalleryWithText";
import ImageWithTextAndDescription from "../../sections/ImageWithTextAndDescription/ImageWithTextAndDescription";
import MenuLinks from "../../sections/MenuLinks/MenuLinks";
import OurServices from "../../sections/OurServices/OurServices";

export default function Home() {
  return (
    <>
      <HomeHero />
      <MenuLinks />
      <ImageWithTextAndDescription />
      <OurServices />
      <ImageGalleryWithText />
    </>
  );
}
