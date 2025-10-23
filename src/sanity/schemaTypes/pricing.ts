import { defineType } from "sanity";

export const pricing = defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  fields: [
    {
      name: "placesLefts",
      title: "Places Lefts",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "ancienPrix",
      title: "Ancien Prix",
      type: "string",
    },
    {
      name: "nouveauPrix",
      title: "Nouveau Prix",
      type: "string",
    },
    {
      name: "btnText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "arrayText",
      title: "Array de Text",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "titrePremium",
      title: "Titre Premium",
      type: "string",
    },
    {
      name: "descriptionPremium",
      title: "Description Premium",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "placeLeftPremium",
      title: "Place Left Premium",
      type: "string",
    },
    {
      name: "showPremiumSection",
      title: "Show Premium Section",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "premiumNew",
      title: "Premium New Price",
      type: "string",
      initialValue: "49",
    },
    {
      name: "premiumOld",
      title: "Premium Old Price",
      type: "string",
      initialValue: "153",
    },
    {
      name: "premiumArray",
      title: "Premium Array",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "photo",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "titre",
              title: "Titre",
              type: "string",
            },
            {
              name: "desc",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
});
