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

export const shortsQuery = groq`
  *[_type == "shorts"][0] {
    title,
    richText,
    videos[] {
      url,
      title,
      "thumbnail": thumbnail.asset->url,
    },
  }
`;

export const pourquoiQuery = groq`
  *[_type == "pourquoi"][0] {
    titre,
    richText,
    description,
    boutonTitle,
    price,
    "image1": image1.asset->url,
    descImage1,
    "image2": image2.asset->url,
    descImage2,
    numbers[] {
      number,
      text,
    },
  }
`;

export const workQuery = groq`
  *[_type == "work"][0] {
    tooltip,
    titre,
    "logo": logo.asset->url,
    "images": images[].asset->url,
    titre1,
    desc1,
    titre2,
    titresArray,
    sousTitre2,
    desc2,
    titre3,
    desc3,
    "image3_1": image3_1.asset->url,
    "image3_2": image3_2.asset->url,
    desc3_1,
    titre4,
    desc4,
    "illustration4": illustration4.asset->url,
  }
`;
