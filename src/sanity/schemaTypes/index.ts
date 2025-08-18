import { type SchemaTypeDefinition } from "sanity";
import { home } from "./home";
import { nav } from "./nav";
import { tiktok } from "./tiktok";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [nav, home, tiktok],
};
