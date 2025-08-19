import { defineType } from "sanity";

export const shorts = defineType({
  name: "shorts",
  title: "Shorts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Title of the shorts section",
    },
    {
      name: "richText",
      title: "Rich Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "url",
              title: "Video File",
              type: "file",
            },
            {
              name: "title",
              title: "Video Title",
              type: "string",
            },
            {
              name: "thumbnail",
              title: "Thumbnail",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
  ],
});
