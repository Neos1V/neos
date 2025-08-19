import { defineType } from "sanity";

export const marque = defineType({
  name: "marque",
  title: "Les marques te payent",
  type: "document",
  fields: [
    {
      name: "marques",
      title: "Marques",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "prix",
              title: "Prix",
              type: "string",
            },
            {
              name: "nom",
              title: "Nom",
              type: "string",
            },
            {
              name: "titre",
              title: "Titre",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "photoProfil",
              title: "Photo de profil",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: "titre",
      title: "Titre",
      type: "array",
      of: [{ type: "block" }],
      initialValue: [{ children: [{ text: "Titre de la section" }] }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },

    // 6 illustrations
    ...Array.from({ length: 6 }, (_, i) => ({
      name: `illustration1_${i + 1}`,
      title: `Illustration 1.${i + 1}`,
      type: "image",
      options: { hotspot: true },
    })),
  ],
});
