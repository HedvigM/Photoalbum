/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: [
      {
        type: "document",
        name: "post",
        title: "Posts",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
            },
          },
          {
            name: "date",
            title: "Date",
            type: "date",
          },

          {
            name: "image",
            title: "Image",
            type: "image",
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: "alt",
                title: "Alt Text",
                type: "string",
              },
            ],
          },
          {
            name: "content",
            title: "Content",
            type: "text",
          },
          {
            name: "likes",
            title: "Likes",
            type: "number",
            readOnly: true,
          },
        ],
        initialValue: {
          likes: 0,
        },
      },
      {
        type: "document",
        name: "comment",
        title: "Comments",
        fields: [
          {
            name: "text",
            title: "Text",
            type: "text",
          },
          {
            name: "name",
            title: "Name",
            type: "string",
          },
          {
            name: "email",
            title: "Email",
            type: "string",
          },
          {
            name: "ref",
            title: "Reference",
            type: "reference",
            to: [{ type: "post" }],
          },
        ],
      },
    ],
  },
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
