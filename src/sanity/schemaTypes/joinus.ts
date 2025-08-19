import { defineType } from "sanity";

export const joinus = defineType({
  name: "joinus",
  title: "Join Us",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "tooltip",
      title: "Tooltip",
      type: "string",
    },
    {
      name: "titre",
      title: "Titre",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "txtBtm",
      title: "Texte Bas",
      type: "string",
    },
  ],
});
