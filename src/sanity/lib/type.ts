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

export interface HomeClient {
  image: string;
  prix: string;
  nom: string;
  job: string;
  description: PortableTextBlock[];
}

export interface Home {
  titleCreateur: string;
  imageCreateurs: string;
  description: PortableTextBlock[];
  subtitle: string;
  validCheck: HomeValidCheck[];
  createurs: HomeCreateur[];
  logos: string[];
  clients: HomeClient[];
  sousTitreClients: string;
}

export interface Tiktok {
  sousTitre: string;
  titre: PortableTextBlock[];
  richText: PortableTextBlock[];
  buttonText: string;
  image: string;
  vues: number;
  texteVues: string;
  photosProfil: string[];
  sousTitreTextVues: string;
  buttonTextVues: string;
}

export interface ShortsVideo {
  url: string;
  title: string;
  thumbnail: string;
}

export interface Shorts {
  title: string;
  richText: PortableTextBlock[];
  videos: ShortsVideo[];
}

export interface PourquoiNumber {
  number: number;
  text: string;
}

export interface Pourquoi {
  titre: string;
  richText: PortableTextBlock[];
  description: string;
  boutonTitle: string;
  price: number;
  image1: string;
  descImage1: PortableTextBlock[];
  image2: string;
  descImage2: PortableTextBlock[];
  numbers: PourquoiNumber[];
}

export interface Work {
  tooltip: string;
  titre: PortableTextBlock[];
  logo: string;
  images: string[];
  titre1: string;
  desc1: PortableTextBlock[];
  titre2: string;
  titresArray: string[];
  sousTitre2: string;
  desc2: PortableTextBlock[];
  titre3: string;
  desc3: PortableTextBlock[];
  image3_1: string;
  image3_2: string;
  desc3_1: PortableTextBlock[];
  titre4: string;
  desc4: PortableTextBlock[];
  illustration4: string;
}
