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
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "titre1",
      title: "Titre 1",
      type: "string",
    },
    {
      name: "desc1",
      title: "Description 1",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "titre2",
      title: "Titre 2",
      type: "string",
    },
    {
      name: "titresArray",
      title: "Array de Titre",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sousTitre2",
      title: "Sous Titre 2",
      type: "string",
    },
    {
      name: "desc2",
      title: "Description 2",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "titre3",
      title: "Titre 3",
      type: "string",
    },
    {
      name: "desc3",
      title: "Description 3",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image3_1",
      title: "Image 3.1",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "image3_2",
      title: "Image 3.2",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "desc3_1",
      title: "Description 3.1",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "titre4",
      title: "Titre 4",
      type: "string",
    },
    {
      name: "desc4",
      title: "Description 4",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "illustration1",
      title: "Illustration 1",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "illustration2",
      title: "Illustration 2",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "illustration3",
      title: "Illustration 3",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "illustration4",
      title: "Illustration 4",
      type: "image",
      options: { hotspot: true },
    },
  ],
});
