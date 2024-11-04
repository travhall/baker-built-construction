import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        format: "mdx",
        ui: {
          filename: {
            // Create slug from title
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-') || ''}`
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Project Date",
            required: true,
            ui: {
              dateFormat: "MMMM DD YYYY",
            },
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "object",
            name: "categories",
            label: "Categories",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name };
              },
              defaultItem: {
                name: "New Category",
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Category Name",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "images",
            label: "Project Images",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.caption || "Image" };
              },
            },
            fields: [
              {
                type: "image",
                name: "src",
                label: "Image",
                required: true,
              },
              {
                type: "string",
                name: "caption",
                label: "Caption",
              },
              {
                type: "boolean",
                name: "featured",
                label: "Featured Image",
                description: "Use this image as the project's thumbnail",
              },
            ],
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Project",
            description: "Show this project in the featured section on the homepage",
          },
        ],
      },
    ],
  },
});