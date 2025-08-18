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
