import { type SchemaTypeDefinition } from "sanity";
import { community } from "./community";
import { faq } from "./faq";
import { footer } from "./footer";
import { home } from "./home";
import { joinus } from "./joinus";
import { marque } from "./marque";
import { nav } from "./nav";
import { pourquoi } from "./pourquoi";
import { pricing } from "./pricing";
import { shorts } from "./shorts";
import { tiktok } from "./tiktok";
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
  ],
};
