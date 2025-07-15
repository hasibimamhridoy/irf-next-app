"use server";

import { getBlogPosts } from "@/lib/blog-data";

export async function loadMorePosts(page: number) {
  try {
    console.log(`Loading posts for page: ${page}`);

    const { posts, hasMore, total } = await getBlogPosts(page, 6); // Load 3 posts per page

    console.log(
      `Loaded ${posts.length} posts, hasMore: ${hasMore}, total: ${total}`
    );

    return {
      posts,
      hasMore,
      total,
      success: true,
      message: `${posts.length} টি নতুন লেখা লোড করা হয়েছে`,
    };
  } catch (error) {
    console.error("Error in loadMorePosts:", error);
    return {
      posts: [],
      hasMore: false,
      total: 0,
      success: false,
      message: "লেখা লোড করতে সমস্যা হয়েছে",
    };
  }
}
