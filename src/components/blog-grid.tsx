"use client";

import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { BlogCard } from "./blog-card";

import { loadMorePosts } from "@/actions/actions";
import type { BlogPost } from "@/lib/blog-data";
import { Loader2, Plus } from "lucide-react";

interface BlogGridProps {
  initialPosts: BlogPost[];
  initialHasMore: boolean;
}

export function BlogGrid({ initialPosts, initialHasMore }: BlogGridProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [page, setPage] = useState(2); // Start from page 2 since page 1 is already loaded
  const [isPending, startTransition] = useTransition();
  const [loadedCount, setLoadedCount] = useState(initialPosts.length);

  const handleLoadMore = () => {
    startTransition(async () => {
      try {
        const { posts: newPosts, hasMore: moreAvailable } = await loadMorePosts(
          page
        );

        // Append new posts to existing posts
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setHasMore(moreAvailable);
        setPage((prevPage) => prevPage + 1);
        setLoadedCount((prevCount) => prevCount + newPosts.length);

        console.log(
          `Loaded ${newPosts.length} more posts. Total: ${
            posts.length + newPosts.length
          }`
        );
      } catch (error) {
        console.error("Error loading more posts:", error);
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Posts Count Info */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          <span className="font-semibold text-orange-600">{loadedCount}</span>{" "}
          টি লেখা দেখানো হচ্ছে
          {hasMore && <span className="ml-2">• আরও লেখা উপলব্ধ</span>}
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post, index) => (
          <div
            key={`${post.id}-${index}`}
            className="transform transition-all duration-300 hover:scale-105"
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <Button
            onClick={handleLoadMore}
            disabled={isPending}
            size="lg"
            className="bg-destructive text-white shadow-lg px-8 py-3 text-lg group"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                লোড হচ্ছে...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                আরও লেখা দেখুন
              </>
            )}
          </Button>

          {/* Loading indicator */}
          {isPending && (
            <div className="mt-4 text-sm text-gray-500">
              নতুন লেখা লোড করা হচ্ছে...
            </div>
          )}
        </div>
      )}

      {/* No More Posts Message */}
      {!hasMore && posts.length > initialPosts.length && (
        <div className="text-center py-8">
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full text-gray-600">
            <span className="text-2xl mr-2">📚</span>
            সব লেখা দেখানো হয়েছে
          </div>
        </div>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            কোনো লেখা পাওয়া যায়নি
          </h3>
          <p className="text-gray-500">শীঘ্রই নতুন লেখা প্রকাশিত হবে</p>
        </div>
      )}
    </div>
  );
}
