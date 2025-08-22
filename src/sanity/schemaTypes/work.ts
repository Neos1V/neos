import { defineType } from "sanity";

export const work = defineType({
  name: "work",
  title: "Comment ça marche",
  type: "document",
  fields: [
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
      name: "illustrations",
      title: "Illustrations",
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
              name: "imageMobile",
              title: "Image Mobile",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "title1",
              title: "Title 1",
              type: "string",
            },
            {
              name: "desc1",
              title: "Description 1",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
  ],
});
