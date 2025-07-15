import { BlogDetailContent } from "@/components/blog-detail-content";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getBlogPostById } from "@/lib/blog-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// You are intentionally treating params as a promise
interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

// ✅ Pre-generate blog pages
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/blogs`, {
    next: { revalidate: 60 },
  });

  const { data } = await res.json();

  return data.map((post: any) => ({
    id: post.slug, // slug should match [id] in URL
  }));
}

// ✅ Page component
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params; // You asked for this

  const post = await getBlogPostById(id);
  if (!post) notFound();

  console.log("post", post);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      <BlogDetailContent post={post} />
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
    title: `${post.title} | IRF`,
    description: post.title,
  };
}
