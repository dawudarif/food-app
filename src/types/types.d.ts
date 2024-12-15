interface BlogData {
  title: string;
  content: string;
  imageUrl: string;
  date: string;
}

interface Translations {
  title: string;
  description: string;
  author: string;
  location: string;
}

interface Language {
  label: string;
  name: string;
  image: string;
}

interface Features {
  title: string;
  description: string;
}

interface MenuItem {
  key: string;
  type: "breakfast" | "lunchOrDinner" | "drinks" | "dessert" | "starters";
  price: number;
  image: string;
}

interface MenuItemLocalization {
  title: string;
  description: string;
}
