import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  titleKey: string;
  descriptionKey: string;
}

const SEO: React.FC<SEOProps> = ({ titleKey, descriptionKey }) => {
  const { t } = useTranslation();

  const title = t(titleKey);
  const description = t(descriptionKey);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="food, delivery, meals, order online" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://food-app-opal-three.vercel.app/"
      />
    </Helmet>
  );
};
export default SEO;
