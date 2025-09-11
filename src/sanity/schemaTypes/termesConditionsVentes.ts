import { defineType } from "sanity";

export const termesConditionsVentes = defineType({
  name: "termesConditionsVentes",
  title: "Termes et conditions de ventes",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Termes et conditions de ventes",
    },
    {
      name: "content",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
