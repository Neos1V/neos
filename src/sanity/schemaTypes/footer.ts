import { defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "socials",
      title: "Réseaux Sociaux",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "link",
              title: "Lien",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "logoNeos",
      title: "Logo Neos",
      type: "image",
      options: { hotspot: true },
    },
  ],
});
