import { type SchemaTypeDefinition } from "sanity";
import { cgv } from "./cgv";
import { community } from "./community";
import { faq } from "./faq";
import { footer } from "./footer";
import { home } from "./home";
import { joinus } from "./joinus";
import { marque } from "./marque";
import { mentionsLegales } from "./mentionsLegales";
import { nav } from "./nav";
import { pourquoi } from "./pourquoi";
import { pricing } from "./pricing";
import { shorts } from "./shorts";
import { termesConditionsVentes } from "./termesConditionsVentes";
import { tiktok } from "./tiktok";
import { vsl } from "./vsl";
import { work } from "./work";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    nav,
    home,
    tiktok,
    shorts,
    pourquoi,
    work,
    marque,
    pricing,
    community,
    faq,
    joinus,
    footer,
    vsl,
    cgv,
    mentionsLegales,
    termesConditionsVentes,
  ],
};
