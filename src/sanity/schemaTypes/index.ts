import { type SchemaTypeDefinition } from "sanity";
import { home } from "./home";
import { nav } from "./nav";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [nav, home],
};
