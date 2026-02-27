import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "NJ Law Tips",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility and SEO",
        }),
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary for the blog index and SEO (max 200 characters)",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Motor Vehicle Accidents", value: "motor-vehicle-accidents" },
          { title: "Slip & Fall", value: "slip-and-fall" },
          { title: "Workplace Injuries", value: "workplace-injuries" },
          { title: "Medical Malpractice", value: "medical-malpractice" },
          { title: "Dog Bites", value: "dog-bites" },
          { title: "Wrongful Death", value: "wrongful-death" },
          { title: "General Legal Tips", value: "general-legal-tips" },
        ],
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                  { name: "blank", type: "boolean", title: "Open in new tab" },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Alt Text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
        { type: "stlTableBlock" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "featuredImage",
      publishedAt: "publishedAt",
    },
    prepare({ title, author, media, publishedAt }) {
      return {
        title,
        subtitle: `${author ?? "NJ Law Tips"} · ${publishedAt ? new Date(publishedAt).toLocaleDateString() : "Draft"}`,
        media,
      };
    },
  },
});
