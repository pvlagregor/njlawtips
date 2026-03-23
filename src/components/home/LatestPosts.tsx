import Link from "next/link";
import Image from "next/image";
import type { PostSummary } from "@/types";
import { urlFor } from "@/sanity/image";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function LatestPosts({ posts }: { posts: PostSummary[] }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[2.5px] mb-3">
              From the Blog
            </p>
            <h2 className="text-text-primary text-3xl md:text-4xl font-bold">
              Latest Legal Tips
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 text-sm font-semibold transition-colors"
          >
            View all articles →
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/${post.slug.current}`}
              className="group block bg-surface-50 border border-surface-border rounded-[10px] overflow-hidden hover:border-blue-300 hover:shadow-sm transition-all"
            >
              {/* Featured image */}
              {post.featuredImage ? (
                <div className="relative h-44 w-full bg-surface-100">
                  <Image
                    src={urlFor(post.featuredImage).width(600).height(350).url()}
                    alt={post.featuredImage.alt ?? post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className="h-44 w-full bg-surface-100 flex items-center justify-center text-text-muted text-sm">
                  NJ Law Tips
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {post.categories && post.categories.length > 0 && (
                  <p className="text-blue-500 text-xs font-semibold uppercase tracking-wider mb-2">
                    {post.categories[0].replace(/-/g, " ")}
                  </p>
                )}
                <h3 className="text-text-primary text-base font-bold leading-snug mb-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
                <p className="text-text-muted text-xs mt-3">
                  {post.publishedAt ? formatDate(post.publishedAt) : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
