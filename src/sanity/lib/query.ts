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
  }
`;
