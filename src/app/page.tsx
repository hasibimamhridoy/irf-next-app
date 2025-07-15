import { CategoryGrid } from "@/components/category-grid";
import { CreativeHero } from "@/components/creative-hero";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LatestPosts } from "@/components/latest-posts";
import { StatsSection } from "@/components/stats-section";
import { getBlogPosts } from "@/lib/blog-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "আই আর এফ",
  description: "‘আই আর এফ",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_CLIENT_BASE || "https://irf.org"
  ),
};

export default async function HomePage() {
  const { posts, total } = await getBlogPosts(1, 6);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      <CreativeHero />
      <LatestPosts posts={posts} totalPosts={total} />
      <CategoryGrid />
      <StatsSection />
      <Footer />
    </div>
  );
}
