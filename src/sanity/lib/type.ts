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
  name1: string;
  name2: string;
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
  illustration1: string;
  illustration2: string;
  illustration3: string;
  illustration4: string;
}

export interface Marque {
  titre: PortableTextBlock[];
  description: PortableTextBlock[];
  marques: {
    image: string;
    prix: string;
    nom: string;
    titre: string;
    description: string;
    photoProfil: string;
  }[];
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
  title4: string;
  description4: string;
  title5: string;
  description5: string;
  title6: string;
  description6: string;
  illustration1_1: string;
  illustration1_2: string;
  illustration1_3: string;
  illustration1_4: string;
  illustration1_5: string;
  illustration1_6: string;
}

export interface Pricing {
  placesLefts: string;
  title: string;
  subtitle: string;
  ancienPrix: string;
  nouveauPrix: string;
  btnText: string;
  description: PortableTextBlock[];
  arrayText: string[];
  titrePremium: string;
  descriptionPremium: PortableTextBlock[];
  placeLeftPremium: string;
  premiumArray: {
    photo: string;
    titre: string;
    desc: string;
  }[];
}

export interface Community {
  tooltip: string;
  titre: PortableTextBlock[];
  members: {
    photoProfil: string;
    titre: string;
    description: string;
  }[];
  btnText: string;
  videos: { url: string }[];
}

export interface Faq {
  title: PortableTextBlock[];
  subtitle: string;
  questions: {
    question: string;
    response: string;
  }[];
  video: string;
}

export interface JoinUs {
  image: string;
  tooltip: string;
  titre: PortableTextBlock[];
  description: PortableTextBlock[];
  txtBtm: string;
}

export interface Footer {
  socials: {
    logo: string;
    link: string;
  }[];
  logoNeos: string;
}
