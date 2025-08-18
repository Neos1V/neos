import { type SchemaTypeDefinition } from "sanity";
import { home } from "./home";
import { nav } from "./nav";
import { pourquoi } from "./pourquoi";
import { shorts } from "./shorts";
import { tiktok } from "./tiktok";
import { work } from "./work";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [nav, home, tiktok, shorts, pourquoi, work],
};
