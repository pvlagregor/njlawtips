import { groq } from "next-sanity";

export const postSummaryFields = groq`
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  categories,
  featuredImage { ..., asset->{ _id, url } }
`;

export const getAllPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    ${postSummaryFields}
  }
`;

export const getLatestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    ${postSummaryFields}
  }
`;

export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    categories,
    featuredImage { ..., asset->{ _id, url } },
    body
  }
`;

export const getAllPostSlugsQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`;

export const getSiteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    contactEmail,
    socialLinks
  }
`;
