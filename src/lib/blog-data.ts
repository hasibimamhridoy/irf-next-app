export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string | null;
  locale: string | null;
  categories: Category[];
  thumbnail: Thumbnail;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
}

export interface Thumbnail {
  id: number;
  documentId: string;
  url: string;
}

export interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

// Get all blog
export async function getBlogPosts(
  page = 1,
  limit = 6,
  search: string = ""
): Promise<{ posts: BlogPost[]; hasMore: boolean; total: number }> {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/blogs/?pagination[page]=${page}&pagination[pageSize]=${limit}&populate[categories][fields]=name,slug&populate[thumbnail][fields]=url&filters[$or][0][title][$containsi]=${search}`,
    {
      next: { revalidate: 600 }, // Revalidate every 600 seconds,
      cache: "force-cache",
    }
  );
  const {
    meta,
    data,
  }: {
    meta: Meta;
    data: BlogPost[];
  } = await res.json();

  console.log("allBlogPosts", data);
  console.log("meta", meta);

  const posts = data;
  const hasMore = endIndex < meta.pagination.total;
  const total = meta.pagination.total;

  console.log(
    `Server: Fetching page ${page}, limit ${limit}. Returning ${posts.length} posts. HasMore: ${hasMore}`
  );

  return { posts, hasMore, total };
}

// Get single blog post by ID
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  // await new Promise((resolve) => setTimeout(resolve, 200));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/blogs/slug/${id}`,
    {
      next: { revalidate: 600 }, // Revalidate every 600 seconds,
      cache: "force-cache",
    }
  );

  const post: BlogPost = await res.json();

  return post || null;
}
