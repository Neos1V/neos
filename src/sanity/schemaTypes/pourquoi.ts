import { defineType } from "sanity";

export const pourquoi = defineType({
  name: "pourquoi",
  title: "Pourquoi",
  type: "document",
  fields: [
    {
      name: "titre",
      title: "Titre",
      type: "string",
      initialValue: "Titre de la section Pourquoi",
    },
    {
      name: "richText",
      title: "Rich Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "boutonTitle",
      title: "Bouton Title",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image1",
      title: "Image 1",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "descImage1",
      title: "Description Image 1",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image2",
      title: "Image 2",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "descImage2",
      title: "Description Image 2",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "numbers",
      title: "Numbers Array",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "number",
              title: "Number",
              type: "number",
            },
            {
              name: "text",
              title: "Text",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
});
