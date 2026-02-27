import { Hero } from "@/components/home/Hero";
import { ValueProp } from "@/components/home/ValueProp";
import { ServiceCards } from "@/components/home/ServiceCards";
import { LatestPosts } from "@/components/home/LatestPosts";
import { SocialProof } from "@/components/home/SocialProof";
import { client } from "@/sanity/client";
import { getLatestPostsQuery } from "@/sanity/queries";
import type { PostSummary } from "@/types";

export default async function HomePage() {
  let latestPosts: PostSummary[] = [];

  try {
    latestPosts = await client.fetch<PostSummary[]>(
      getLatestPostsQuery,
      {},
      { next: { revalidate: 3600 } }
    );
  } catch {
    // Sanity not yet configured — page renders without the posts section
  }

  return (
    <>
      <Hero />
      <ValueProp />
      <ServiceCards />
      {latestPosts.length > 0 && <LatestPosts posts={latestPosts} />}
      <SocialProof />
    </>
  );
}
