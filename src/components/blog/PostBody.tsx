import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { SanityImage } from "@/types";
import { STLReact } from "@/sanity/stl/index";
import { STL } from "structured-table";
import "@/sanity/stl/style.css";

interface ImageValue extends SanityImage {
  caption?: string;
}

interface StlTableValue {
  _key: string;
  _type: string;
  stlString: string;
  caption?: string;
}

const components = {
  types: {
    stlTableBlock: ({ value }: { value: StlTableValue }) => {
      if (!value?.stlString) return null;
      const parsedSTL = STL.parse(value.stlString);
      if (value.caption) parsedSTL.caption = value.caption;
      return (
        <div className="my-8 overflow-x-auto">
          <STLReact.Table data={parsedSTL} className="w-full border-collapse text-sm" />
        </div>
      );
    },
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-[10px] overflow-hidden">
            <Image
              src={urlFor(value).width(900).url()}
              alt={value.alt ?? "Article image"}
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-text-muted text-sm mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-text-secondary text-base leading-relaxed mb-5">
        {children}
      </p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-text-primary text-2xl font-bold mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-text-primary text-xl font-bold mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-text-primary text-lg font-semibold mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-text-secondary text-base leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({
      value,
      children,
    }: {
      value?: { href: string; blank?: boolean };
      children?: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-blue-500 hover:text-blue-600 underline transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-text-primary">{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-outside pl-6 mb-5 space-y-2 text-text-secondary text-base leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-outside pl-6 mb-5 space-y-2 text-text-secondary text-base leading-relaxed">
        {children}
      </ol>
    ),
  },
};

export function PostBody({ body }: { body: PortableTextBlock[] }) {
  return (
    <div className="prose-container">
      <PortableText value={body} components={components} />
    </div>
  );
}
