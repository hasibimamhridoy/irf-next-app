import { CategoryGrid } from "@/components/category-grid";
import { CreativeHero } from "@/components/creative-hero";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LatestPosts } from "@/components/latest-posts";
import { NewsletterSection } from "@/components/newsletter-section";
import { StatsSection } from "@/components/stats-section";
import { getBlogPosts } from "@/lib/blog-data";

export default async function HomePage() {
  // Server-side data fetching with enhanced functionality
  const { posts, total } = await getBlogPosts(1, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      <CreativeHero />
      <CategoryGrid />
      <LatestPosts posts={posts} totalPosts={total} />
      {/* <FeaturedSection /> */}
      <StatsSection />

      <NewsletterSection />
      <Footer />
    </div>
  );
}
