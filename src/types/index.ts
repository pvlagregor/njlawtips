import type { PortableTextBlock } from "@portabletext/react";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  featuredImage?: SanityImage;
  excerpt?: string;
  categories?: string[];
  body?: PortableTextBlock[];
}

export interface PostSummary {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  featuredImage?: SanityImage;
  excerpt?: string;
  categories?: string[];
}

export interface SiteSettings {
  siteTitle?: string;
  siteDescription?: string;
  contactEmail?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}
