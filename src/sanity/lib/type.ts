import { PortableTextBlock } from "@portabletext/types";

export type NavType = {
  logo: string;
  ctaButton: string;
  ctaLink: string;
};

export interface HomeValidCheck {
  titre: string;
}

export interface HomeCreateur {
  image: string;
  prix: string;
}

export interface Home {
  titleCreateur: string;
  imageCreateurs: string;
  description: PortableTextBlock[];
  subtitle: string;
  validCheck: HomeValidCheck[];
  createurs: HomeCreateur[];
}
