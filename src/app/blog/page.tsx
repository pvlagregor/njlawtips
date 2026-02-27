import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { getAllPostsQuery } from "@/sanity/queries";
import { PostCard } from "@/components/blog/PostCard";
import type { PostSummary } from "@/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Plain-language articles on New Jersey personal injury law — car accidents, slip and fall, workplace injuries, and more.",
};

export default async function BlogPage() {
  let posts: PostSummary[] = [];

  try {
    posts = await client.fetch<PostSummary[]>(
      getAllPostsQuery,
      {},
      { next: { revalidate: 3600 } }
    );
  } catch {
    // Sanity not yet configured
  }

  return (
    <div>
      {/* Header */}
      <section
        className="relative overflow-hidden py-16 px-6 md:py-20"
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
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-[2.5px] mb-4">
            Legal Tips & Guides
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            NJ Injury Law Blog
          </h1>
          <p className="text-text-light text-lg leading-relaxed">
            Plain-language guides on New Jersey personal injury law — written
            for injury victims, not attorneys.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-surface-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted text-base mb-2">
                No articles yet — check back soon.
              </p>
              <p className="text-text-muted text-sm">
                Articles will appear here once published in Sanity Studio.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
