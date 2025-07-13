import { BlogDetailContent } from "@/components/blog-detail-content";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RelatedPosts } from "@/components/related-posts";
import { getBlogPostById, getRelatedPosts } from "@/lib/blog-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// You are intentionally treating params as a promise
interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

// ✅ Page component
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params; // You asked for this

  const post = await getBlogPostById(id);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post.id, post.category, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      <BlogDetailContent post={post} />
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
      <Footer />
    </div>
  );
}

// ✅ Metadata generator
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;

  const post = await getBlogPostById(id);

  if (!post) {
    return {
      title: "পোস্ট পাওয়া যায়নি",
    };
  }

  return {
    title: `${post.title} | শোলো ব্লগ`,
    description: post.excerpt,
  };
}
