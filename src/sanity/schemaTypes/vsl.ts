import { defineType } from "sanity";

export const vsl = defineType({
  name: "vsl",
  title: "VSL",
  type: "document",
  fields: [

    {
      name: "videoUrl",
      title: "YouTube Video URL",
      type: "url",
      initialValue:
        "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
    },
    {
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "thumbnailAlt",
      title: "Thumbnail Alt Text",
      type: "string",
      initialValue: "Hero Video",
    },
  ],
});
