import { defineType } from "sanity";

export const community = defineType({
  name: "community",
  title: "Community",
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
      name: "members",
      title: "Membres",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "photoProfil",
              title: "Photo de profil",
              type: "image",
              options: { hotspot: true },
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
          ],
        },
      ],
    },
    {
      name: "btnText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{ type: "file" }],
    },
  ],
});
