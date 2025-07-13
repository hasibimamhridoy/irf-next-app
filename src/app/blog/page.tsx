import { BlogGrid } from "@/components/blog-grid";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getBlogPosts } from "@/lib/blog-data";

export default async function BlogPage() {
  // Server-side data fetching - start with only 3 posts to show load more
  const { posts, hasMore, total } = await getBlogPosts(1, 3); // Start with page 1, 3 posts

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">আমাদের ব্লগ</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            ইসলামী জীবনযাত্রা, শিক্ষা, সমাজ ও সংস্কৃতি নিয়ে আমাদের লেখকদের
            চিন্তাভাবনা ও অভিজ্ঞতা।
          </p>
          <div className="mt-8 text-lg opacity-90">
            মোট <span className="font-bold">{total}</span> টি লেখা •
            <span className="font-bold"> {posts.length}</span> টি প্রদর্শিত
          </div>
        </div>
      </section>

      {/* Blog Grid with Load More */}
      <BlogGrid initialPosts={posts} initialHasMore={hasMore} />

      <Footer />
    </div>
  );
}
