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

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/${post.slug.current}`}
      className="group block bg-white border border-surface-border rounded-[10px] overflow-hidden hover:border-blue-300 hover:shadow-sm transition-all"
    >
      {/* Featured image */}
      {post.featuredImage ? (
        <div className="relative h-48 w-full bg-surface-100">
          <Image
            src={urlFor(post.featuredImage).width(700).height(400).url()}
            alt={post.featuredImage.alt ?? post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-48 w-full bg-surface-100 flex items-center justify-center">
          <span className="text-text-muted text-sm font-medium">NJ Law Tips</span>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="bg-surface-50 border border-surface-border text-blue-500 text-xs font-semibold px-2.5 py-1 rounded-full capitalize"
              >
                {cat.replace(/-/g, " ")}
              </span>
            ))}
          </div>
        )}

        <h2 className="text-text-primary text-lg font-bold leading-snug mb-2 group-hover:text-blue-500 transition-colors">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-text-muted">
          <span>{post.publishedAt ? formatDate(post.publishedAt) : "Draft"}</span>
          <span className="text-blue-500 font-semibold">Read more →</span>
        </div>
      </div>
    </Link>
  );
}
