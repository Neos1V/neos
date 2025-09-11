import { defineType } from "sanity";

export const mentionsLegales = defineType({
  name: "mentionsLegales",
  title: "Mentions légales",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Mentions légales",
    },
    {
      name: "content",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
