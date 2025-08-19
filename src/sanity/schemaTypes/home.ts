import { defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "titleCreateur",
      title: "Titre Créateur",
      type: "string",
      initialValue: "Titre du créateur",
    },
    {
      name: "imageCreateurs",
      title: "Image Créateurs",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "subtitle",
      title: "Sous Titre",
      type: "string",
      initialValue: "Sous titre de la section",
    },
    {
      name: "validCheck",
      title: "Valid Check",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "titre",
              title: "Titre",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "createurs",
      title: "Créateurs",
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
          ],
        },
      ],
    },
    {
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "clients",
      title: "Clients",
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
              name: "job",
              title: "Job",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
    {
      name: "sousTitreClients",
      title: "Sous Titre Clients",
      type: "string",
    },
  ],
});
