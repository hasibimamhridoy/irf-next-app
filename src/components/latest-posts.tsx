import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "./blog-card";

interface LatestPostsProps {
  posts: BlogPost[];
  totalPosts?: number;
}

export function LatestPosts({ posts, totalPosts }: LatestPostsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              সর্বশেষ লেখা
            </h2>
            <p className="text-xl text-gray-600">
              আমাদের নতুন প্রকাশিত নিবন্ধসমূহ
              {totalPosts && (
                <span className="ml-2 text-destructive font-semibold">
                  ({totalPosts}+ টি লেখা)
                </span>
              )}
            </p>
          </div>
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-2 border-destructive text-destructive hover:bg-orange-50 group bg-transparent"
            >
              সব দেখুন
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
