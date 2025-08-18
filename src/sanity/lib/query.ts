import { groq } from "next-sanity";

export const navQuery = groq`
  *[_type == "nav"][0] {
    "logo": logo.asset->url,
    ctaButton,
    ctaLink,
  }
`;

export const homeQuery = groq`
  *[_type == "home"][0] {
    titleCreateur,
    "imageCreateurs": imageCreateurs.asset->url,
    description,
    subtitle,
    validCheck[] {
      titre,
    },
    createurs[] {
      "image": image.asset->url,
      prix,
    },
    "logos": logos[].asset->url,
    clients[] {
      "image": image.asset->url,
      prix,
      nom,
      job,
      description,
    },
    sousTitreClients,
  }
`;

export const tiktokQuery = groq`
  *[_type == "tiktok"][0] {
    sousTitre,
    titre,
    richText,
    buttonText,
    "image": image.asset->url,
    vues,
    texteVues,
    "photosProfil": photosProfil[].asset->url,
    sousTitreTextVues,
    buttonTextVues,
  }
`;
