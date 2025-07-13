export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

// Expanded mock blog data with more posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "কেনটাস থেকে টপার (যে সবর)",
    excerpt: "কাম গেলের পর্যন্ত ভাতার ছাত্র বিষয়া। এখনের কী যে হলো, সবকিছু...",
    content: `
      <h2>শিক্ষার গুরুত্ব</h2>
      <p>শিক্ষা মানুষের জীবনে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে। একজন শিক্ষার্থীর জীবনে সফলতা অর্জনের জন্য প্রয়োজন ধৈর্য, অধ্যবসায় এবং সঠিক দিকনির্দেশনা।</p>
      
      <h3>সফলতার উপায়</h3>
      <p>সফলতা অর্জনের জন্য প্রয়োজন:</p>
      <ul>
        <li>নিয়মিত অধ্যয়ন</li>
        <li>সময়ের সদ্ব্যবহার</li>
        <li>লক্ষ্য নির্ধারণ</li>
        <li>কঠোর পরিশ্রম</li>
      </ul>
      
      <p>আল্লাহ তায়ালা বলেছেন, "যে ব্যক্তি কঠোর পরিশ্রম করে, সে অবশ্যই সফল হবে।" তাই আমাদের উচিত আল্লাহর উপর ভরসা রেখে কঠোর পরিশ্রম করা।</p>
    `,
    image: "/logo.png",
    author: "মোহাম্মদ আলী",
    date: "July 3, 2025",
    category: "শিক্ষা",
    readTime: "৫ মিনিট",
    tags: ["শিক্ষা", "সফলতা", "অনুপ্রেরণা"],
  },
  {
    id: "2",
    title: "ফিলিস্তিনি শিশু",
    excerpt:
      "একটি শিশু ফিলিস্তিনি নূরানী হরণ করা জন্য তবুও তার বুকে আছে পরিচ্ছন্ন...",
    content: `
      <h2>ফিলিস্তিনি শিশুদের অবস্থা</h2>
      <p>ফিলিস্তিনি শিশুরা আজ বিশ্বের সবচেয়ে কঠিন পরিস্থিতির মধ্য দিয়ে যাচ্ছে। তাদের মুখে হাসি ফোটানোর জন্য আমাদের সবার দায়িত্ব রয়েছে।</p>
      
      <h3>আমাদের করণীয়</h3>
      <p>আমরা যা করতে পারি:</p>
      <ul>
        <li>দোয়া করা</li>
        <li>সাহায্য পাঠানো</li>
        <li>সচেতনতা বৃদ্ধি</li>
        <li>ন্যায়ের পক্ষে কথা বলা</li>
      </ul>
    `,
    image: "/logo.png",
    author: "ফাতিমা খাতুন",
    date: "July 1, 2025",
    category: "সমাজ",
    readTime: "৭ মিনিট",
    tags: ["ফিলিস্তিন", "মানবাধিকার", "শিশু"],
  },
  {
    id: "3",
    title: "বিপদ!",
    excerpt:
      "টিম বিষয়: পর্ব ২ মানুষটির ক্রুশ আপাতত না করবেন, আমাদের আছে ভালো...",
    content: `
      <h2>স্বাস্থ্য সচেতনতা</h2>
      <p>আধুনিক জীবনযাত্রায় স্বাস্থ্য সচেতনতা অত্যন্ত গুরুত্বপূর্ণ। আমাদের শরীর আল্লাহর দেওয়া আমানত, তাই এর যত্ন নেওয়া আমাদের দায়িত্ব।</p>
      
      <h3>স্বাস্থ্যকর জীবনযাত্রা</h3>
      <p>স্বাস্থ্যকর জীবনের জন্য প্রয়োজন:</p>
      <ul>
        <li>সুষম খাদ্য গ্রহণ</li>
        <li>নিয়মিত ব্যায়াম</li>
        <li>পর্যাপ্ত ঘুম</li>
        <li>মানসিক প্রশান্তি</li>
      </ul>
    `,
    image: "/logo.png",
    author: "ডা. আহমেদ হাসান",
    date: "June 28, 2025",
    category: "স্বাস্থ্য",
    readTime: "৬ মিনিট",
    tags: ["স্বাস্থ্য", "জীবনযাত্রা", "সচেতনতা"],
  },
  {
    id: "4",
    title: "উদ্যোগী নিয়ে নূতন",
    excerpt:
      "পড়তে কলের রাজনৈতিক সব হিসা থেকে বলা। কত পড়া আছি, তাই সংকেতটি...",
    content: `
      <h2>রাজনৈতিক সচেতনতা</h2>
      <p>একজন সচেতন নাগরিক হিসেবে রাজনৈতিক বিষয়ে আমাদের সবার জানা থাকা উচিত। ইসলামে ন্যায়বিচার ও সুশাসনের গুরুত্ব অপরিসীম।</p>
      
      <h3>নাগরিক দায়িত্ব</h3>
      <p>একজন নাগরিক হিসেবে আমাদের দায়িত্ব:</p>
      <ul>
        <li>সচেতন ভোটদান</li>
        <li>দুর্নীতির বিরুদ্ধে অবস্থান</li>
        <li>সামাজিক ন্যায়বিচার</li>
        <li>শান্তিপূর্ণ সমাজ গঠন</li>
      </ul>
    `,
    image: "/logo.png",
    author: "আব্দুর রহমান",
    date: "July 10, 2025",
    category: "রাজনীতি",
    readTime: "৮ মিনিট",
    tags: ["রাজনীতি", "নাগরিকত্ব", "ন্যায়বিচার"],
  },
  {
    id: "5",
    title: "সুনতানি আবাসন বাংলার মানচিত্র",
    excerpt:
      "মুসলিমদের ইতিহাস গোলাপের ইতিহাস, সর্বত্র ইতিহাস। বিষয় এই ইতিহাস আমরা দেখতে। আমরা...",
    content: `
      <h2>বাংলার ইসলামী ইতিহাস</h2>
      <p>বাংলাদেশের ইসলামী ইতিহাস অত্যন্ত সমৃদ্ধ ও গৌরবময়। এই ভূমিতে ইসলামের আগমন ও বিকাশের ইতিহাস আমাদের জানা প্রয়োজন।</p>
      
      <h3>ইসলামের আগমন</h3>
      <p>বাংলায় ইসলামের আগমনের ধাপসমূহ:</p>
      <ul>
        <li>আরব বণিকদের আগমন</li>
        <li>সুফি-সাধকদের প্রচেষ্টা</li>
        <li>তুর্কি শাসনামল</li>
        <li>মুঘল যুগ</li>
      </ul>
    `,
    image: "/logo.png",
    author: "প্রফেসর ইব্রাহিম",
    date: "July 5, 2025",
    category: "ইতিহাস",
    readTime: "১০ মিনিট",
    tags: ["ইতিহাস", "বাংলাদেশ", "ইসলাম"],
  },
  {
    id: "6",
    title: "রেসিপি: লেবুর পিঠিক",
    excerpt:
      "কার্বোহাই নরমের গিলে লেবু আমাদের প্রিয়কমতের গোলাকী। তাই গোলাপের জন্য লেবুর বিষয়টি...",
    content: `
      <h2>ঐতিহ্যবাহী লেবুর পিঠা</h2>
      <p>বাংলার ঐতিহ্যবাহী খাবারের মধ্যে পিঠা-পায়েসের স্থান অনন্য। লেবুর পিঠা একটি সুস্বাদু ও পুষ্টিকর খাবার।</p>
      
      <h3>উপকরণ</h3>
      <ul>
        <li>চালের গুঁড়া - ২ কাপ</li>
        <li>লেবুর রস - ৩ টেবিল চামচ</li>
        <li>চিনি - ১ কাপ</li>
        <li>নারকেল কুরানো - ১ কাপ</li>
        <li>দুধ - ১ কাপ</li>
      </ul>
      
      <h3>প্রস্তুত প্রণালী</h3>
      <p>প্রথমে চালের গুঁড়ার সাথে লেবুর রস মিশিয়ে ময়দা তৈরি করুন। তারপর অন্যান্য উপকরণ যোগ করে সুন্দর পিঠা তৈরি করুন।</p>
    `,
    image: "/logo.png",
    author: "রান্নাঘর টিম",
    date: "July 4, 2025",
    category: "খাবার",
    readTime: "৪ মিনিট",
    tags: ["রেসিপি", "পিঠা", "ঐতিহ্য"],
  },
  // Adding more posts to test load more functionality
  {
    id: "7",
    title: "যুব সমাজের দায়িত্ব",
    excerpt:
      "আজকের যুব সমাজ আগামীর ভবিষ্যৎ। তাদের উপর নির্ভর করছে জাতির উন্নতি...",
    content: `
      <h2>যুব সমাজের ভূমিকা</h2>
      <p>যুব সমাজ জাতির মেরুদণ্ড। তাদের সঠিক দিকনির্দেশনা ও উন্নয়নের উপর নির্ভর করে দেশের ভবিষ্যৎ।</p>
      
      <h3>যুবদের করণীয়</h3>
      <ul>
        <li>শিক্ষা অর্জন</li>
        <li>দক্ষতা উন্নয়ন</li>
        <li>নৈতিক চরিত্র গঠন</li>
        <li>সমাজসেবা</li>
      </ul>
    `,
    image: "/logo.png",
    author: "যুব নেতা করিম",
    date: "June 30, 2025",
    category: "সমাজ",
    readTime: "৬ মিনিট",
    tags: ["যুব", "দায়িত্ব", "উন্নয়ন"],
  },
  {
    id: "8",
    title: "পরিবেশ রক্ষায় ইসলামের নির্দেশনা",
    excerpt:
      "ইসলাম পরিবেশ রক্ষার ব্যাপারে স্পষ্ট নির্দেশনা দিয়েছে। আমাদের দায়িত্ব প্রকৃতির যত্ন নেওয়া...",
    content: `
      <h2>পরিবেশ সংরক্ষণ</h2>
      <p>ইসলামে পরিবেশ রক্ষার গুরুত্ব অপরিসীম। আল্লাহ তায়ালা আমাদের পৃথিবীর খলিফা বানিয়েছেন।</p>
      
      <h3>আমাদের দায়িত্ব</h3>
      <ul>
        <li>বৃক্ষরোপণ</li>
        <li>পানি সংরক্ষণ</li>
        <li>বায়ু দূষণ রোধ</li>
        <li>প্রাণী রক্ষা</li>
      </ul>
    `,
    image: "/logo.png",
    author: "পরিবেশবিদ সালমা",
    date: "June 25, 2025",
    category: "পরিবেশ",
    readTime: "৭ মিনিট",
    tags: ["পরিবেশ", "ইসলাম", "সংরক্ষণ"],
  },
  {
    id: "9",
    title: "প্রযুক্তি ও ইসলামী জীবন",
    excerpt:
      "আধুনিক প্রযুক্তির যুগে কীভাবে ইসলামী জীবনযাত্রা বজায় রাখা যায় তার দিকনির্দেশনা...",
    content: `
      <h2>প্রযুক্তির সদ্ব্যবহার</h2>
      <p>প্রযুক্তি আল্লাহর দেওয়া নিয়ামত। এর সঠিক ব্যবহারের মাধ্যমে আমরা দ্বীনের খেদমত করতে পারি।</p>
      
      <h3>প্রযুক্তির ইতিবাচক ব্যবহার</h3>
      <ul>
        <li>ইসলামী শিক্ষা প্রচার</li>
        <li>দাওয়াতি কাজ</li>
        <li>জ্ঞান অর্জন</li>
        <li>যোগাযোগ বৃদ্ধি</li>
      </ul>
    `,
    image: "/logo.png",
    author: "টেক এক্সপার্ট আহমেদ",
    date: "June 20, 2025",
    category: "প্রযুক্তি",
    readTime: "৮ মিনিট",
    tags: ["প্রযুক্তি", "ইসলাম", "আধুনিকতা"],
  },
];

export async function getBlogPosts(
  page = 1,
  limit = 3
): Promise<{ posts: BlogPost[]; hasMore: boolean; total: number }> {
  // Simulate API delay for realistic server-side rendering
  await new Promise((resolve) => setTimeout(resolve, 300));

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const posts = blogPosts.slice(startIndex, endIndex);
  const hasMore = endIndex < blogPosts.length;
  const total = blogPosts.length;

  console.log(
    `Server: Fetching page ${page}, limit ${limit}. Returning ${posts.length} posts. HasMore: ${hasMore}`
  );

  return { posts, hasMore, total };
}

// Get single blog post by ID
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  await new Promise((resolve) => setTimeout(resolve, 200));

  const post = blogPosts.find((post) => post.id === id);
  return post || null;
}

// Get related posts
export async function getRelatedPosts(
  currentPostId: string,
  category: string,
  limit = 3
): Promise<BlogPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));

  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentPostId && post.category === category)
    .slice(0, limit);

  return relatedPosts;
}

// Add a function to get total count
export async function getTotalPostsCount(): Promise<number> {
  return blogPosts.length;
}

// Add a function to get posts by category
export async function getPostsByCategory(
  category: string,
  page = 1,
  limit = 3
) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const filteredPosts = blogPosts.filter((post) => post.category === category);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const posts = filteredPosts.slice(startIndex, endIndex);
  const hasMore = endIndex < filteredPosts.length;

  return { posts, hasMore, total: filteredPosts.length };
}
