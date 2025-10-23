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
    descriptionMobile,
    subtitle,
    subtitleMobile,
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

export const shortsQuery = groq`*[_type == "shorts"][0] {
  title,
  richText,
  videos[] {
    "url": url.asset->url,
    title,
    "thumbnail": thumbnail.asset->url,
  },
}`;

export const pourquoiQuery = groq`
  *[_type == "pourquoi"][0] {
    titre,
    richText,
    description,
    boutonTitle,
    price,
    "image1": image1.asset->url,
    name1,
    descImage1,
    "image2": image2.asset->url,
    name2,
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
    illustrations[] {
      "image": image.asset->url,
      "imageMobile": imageMobile.asset->url,
      title1,
      desc1,
    },
  }
`;

export const marqueQuery = groq`*[_type == "marque"][0] {
  titre,
  description,
  marques[] {
    "image": image.asset->url,
    prix,
    nom,
    titre,
    description,
    "photoProfil": photoProfil.asset->url,
  },
  "illustration1_1": illustration1_1.asset->url,
  title1,
  description1,
  "illustration1_2": illustration1_2.asset->url,
  title2,
  description2,
  "illustration1_3": illustration1_3.asset->url,
  title3,
  description3,
  "illustration1_4": illustration1_4.asset->url,
  title4,
  description4,
  "illustration1_5": illustration1_5.asset->url,
  title5,
  description5,
  "illustration1_6": illustration1_6.asset->url,
  title6,
  description6,
}`;

export const pricingQuery = groq`*[_type == "pricing"][0] {
  placesLefts,
  title,
  subtitle,
  ancienPrix,
  nouveauPrix,
  btnText,
  description,
  arrayText,
  showPremiumSection,
  premiumNew,
  premiumOld,
  titrePremium,
  descriptionPremium,
  placeLeftPremium,
  premiumArray[] {
    "photo": photo.asset->url,
    titre,
    desc,
  },
}`;

export const communityQuery = groq`*[_type == "community"][0] {
  tooltip,
  titre,
  members[] {
    "photoProfil": photoProfil.asset->url,
    titre,
    description,
  },
  btnText,
  videos[] {
    "url": asset->url,
  },
}`;

export const faqQuery = groq`*[_type == "faq"][0] {
  title,
  subtitle,
  questions,
  "video": video.asset->url,
}`;

export const joinusQuery = groq`*[_type == "joinus"][0] {
  "image": image.asset->url,
  tooltip,
  titre,
  description,
  txtBtm,
}`;

export const footerQuery = groq`*[_type == "footer"][0] {
  socials[] {
    "logo": logo.asset->url,
    link,
  },
  "logoNeos": logoNeos.asset->url,
}`;

export const vslQuery = groq`*[_type == "vsl"][0] {
  videoUrl,
  "thumbnailImage": thumbnailImage.asset->url,
  thumbnailAlt,
}`;

export const cgvQuery = groq`*[_type == "cgv"][0] {
  title,
  content,
}`;

export const mentionsLegalesQuery = groq`*[_type == "mentionsLegales"][0] {
  title,
  content,
}`;

export const termesConditionsVentesQuery = groq`*[_type == "termesConditionsVentes"][0] {
  title,
  content,
}`;
