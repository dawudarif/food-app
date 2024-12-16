import urduImage from "../assets/pakistan.png";
import englishImage from "../assets/uk.png";
import frenchImage from "../assets/france.png";
import arabicImage from "../assets/saudi-arabia.png";
import spanishImage from "../assets/spain.png";

export function getTranslationLocales({
  type,
}: {
  type: "label" | "language" | "all";
}) {
  const languages = [
    { label: "en", name: "english", image: englishImage },
    { label: "fr", name: "French", image: frenchImage },
    { label: "es", name: "spanish", image: spanishImage },
    { label: "ur", name: "urdu", image: urduImage },
    { label: "ar", name: "arabic", image: arabicImage },
  ];

  if (type === "all") {
    return languages;
  } else if (type === "language") {
    const allLanguages = languages.map((item) => item.name);
    return allLanguages;
  } else if (type === "label") {
    const allLabels = languages.map((item) => item.label);
    return allLabels;
  }
}
