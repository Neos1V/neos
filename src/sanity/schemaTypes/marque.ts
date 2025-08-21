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
    {
      name: "title1",
      title: "Titre 1",
      type: "string",
    },
    {
      name: "description1",
      title: "Description 1",
      type: "string",
    },
    {
      name: "title2",
      title: "Titre 2",
      type: "string",
    },
    {
      name: "description2",
      title: "Description 2",
      type: "string",
    },
    {
      name: "title3",
      title: "Titre 3",
      type: "string",
    },
    {
      name: "description3",
      title: "Description 3",
      type: "string",
    },
    {
      name: "title4",
      title: "Titre 4",
      type: "string",
    },
    {
      name: "description4",
      title: "Description 4",
      type: "string",
    },
    {
      name: "title5",
      title: "Titre 5",
      type: "string",
    },
    {
      name: "description5",
      title: "Description 5",
      type: "string",
    },
    {
      name: "title6",
      title: "Titre 6",
      type: "string",
    },
    {
      name: "description6",
      title: "Description 6",
      type: "string",
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
