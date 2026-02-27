import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/client";
import { getPostBySlugQuery, getAllPostSlugsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { PostBody } from "@/components/blog/PostBody";
import type { Post } from "@/types";

interface Props {
  params: Promise<{ slug: string }>;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<{ slug: string }[]>(getAllPostSlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await client.fetch<Post | null>(getPostBySlugQuery, { slug });
    if (!post) return { title: "Post Not Found" };
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: post.featuredImage
        ? {
            images: [
              {
                url: urlFor(post.featuredImage).width(1200).height(630).url(),
                width: 1200,
                height: 630,
                alt: post.featuredImage.alt ?? post.title,
              },
            ],
          }
        : undefined,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post: Post | null = null;
  try {
    post = await client.fetch<Post | null>(
      getPostBySlugQuery,
      { slug },
      { next: { revalidate: 3600 } }
    );
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-14 px-6"
        style={{
          background:
            "linear-gradient(135deg, #0d1b2a 0%, #1b2d4f 55%, #1a3a6b 100%)",
        }}
      >
        <img
          src="/images/home/courthouse-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.05 }}
        />
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-text-muted text-sm mb-6">
            <Link href="/blog" className="hover:text-blue-300 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-text-light truncate">{post.title}</span>
          </div>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full capitalize"
                >
                  {cat.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-text-muted text-sm">
            <span>{post.author ?? "NJ Law Tips"}</span>
            {post.publishedAt && (
              <>
                <span>·</span>
                <span>{formatDate(post.publishedAt)}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.featuredImage && (
        <div className="max-w-3xl mx-auto px-6 -mt-6 relative z-10">
          <div className="relative w-full aspect-video rounded-[10px] overflow-hidden shadow-lg">
            <Image
              src={urlFor(post.featuredImage).width(900).height(506).url()}
              alt={post.featuredImage.alt ?? post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {post.body ? (
          <PostBody body={post.body} />
        ) : (
          <p className="text-text-muted">No content yet.</p>
        )}

        {/* CTA box */}
        <div
          className="mt-14 rounded-[10px] p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, #0d1b2a 0%, #1b2d4f 55%, #1a3a6b 100%)",
          }}
        >
          <p className="text-blue-300 text-xs font-semibold uppercase tracking-[2.5px] mb-3">
            Have questions about your accident?
          </p>
          <h3 className="text-white text-2xl font-bold mb-3">
            Get a Free Consultation
          </h3>
          <p className="text-text-light text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Talk to a qualified NJ personal injury attorney — free, no
            obligation. Find out if you have a case.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
          >
            Contact Us Today
          </Link>
        </div>

        {/* Back to blog */}
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 text-sm font-semibold transition-colors"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
