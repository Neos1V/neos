import { defineType } from "sanity";

export const cgv = defineType({
  name: "cgv",
  title: "CGV",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "CGV",
    },
    {
      name: "content",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
