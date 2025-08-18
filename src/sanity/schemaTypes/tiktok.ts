import { defineType } from "sanity";

export const tiktok = defineType({
  name: "tiktok",
  title: "Tiktok",
  type: "document",
  fields: [
    {
      name: "sousTitre",
      title: "Sous Titre",
      type: "string",
    },
    {
      name: "titre",
      title: "Titre",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "richText",
      title: "Rich Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "vues",
      title: "Vues",
      type: "number",
    },
    {
      name: "texteVues",
      title: "Texte Vues",
      type: "string",
    },
    {
      name: "photosProfil",
      title: "Photos de Profil",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "sousTitreTextVues",
      title: "Sous Titre Text Vues",
      type: "string",
    },
    {
      name: "buttonTextVues",
      title: "Button Text Vues",
      type: "string",
    },
  ],
});
