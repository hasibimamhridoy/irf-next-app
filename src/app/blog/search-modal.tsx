"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BlogPost, getBlogPosts } from "@/lib/blog-data";
import { ArrowRight, Clock, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface SearchResponse {
  posts: BlogPost[];
  hasMore: boolean;
  total: number;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Debounced search function
  const debouncedSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const { posts, hasMore, total } = await getBlogPosts(1, 100, query);
      setSearchResults(posts);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Effect for debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(searchValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, debouncedSearch]);

  // Load recent searches from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("recentSearches");
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    }
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() && !recentSearches.includes(query)) {
      const newRecent = [query, ...recentSearches.slice(0, 4)];
      setRecentSearches(newRecent);
      if (typeof window !== "undefined") {
        localStorage.setItem("recentSearches", JSON.stringify(newRecent));
      }
    }
  };

  const handlePostClick = (slug: string) => {
    handleSearch(searchValue);
    onClose();
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("recentSearches");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateContent = (content: string, maxLength = 120) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  console.log(searchResults);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center space-x-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="ব্লগ পোস্ট খুঁজুন..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border-0 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button> */}
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="p-6 pt-4">
            {/* Recent Searches */}
            {!searchValue && recentSearches.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    সাম্প্রতিক অনুসন্ধান
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearRecentSearches}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    সব মুছুন
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchValue(search)}
                      className="text-sm"
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}

            {/* Search Results */}
            {!isLoading && searchResults.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  অনুসন্ধানের ফলাফল ({searchResults.length})
                </h3>
                {searchResults.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    onClick={() => handlePostClick(post.slug)}
                    className="block group"
                  >
                    <div className="flex gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={
                            post.thumbnail?.url ||
                            "/placeholder.svg?height=64&width=64"
                          }
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {truncateContent(post.content)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          {post.categories.slice(0, 2).map((category) => (
                            <Badge
                              key={category.id}
                              variant="secondary"
                              className="text-xs"
                            >
                              {category.name}
                            </Badge>
                          ))}
                          <span className="text-xs text-muted-foreground">
                            {formatDate(post?.publishedAt as string)}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* No Results */}
            {!isLoading && searchValue && searchResults.length === 0 && (
              <div className="text-center py-8">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">
                  কোনো ফলাফল পাওয়া যায়নি
                </h3>
                <p className="text-muted-foreground">
                  "{searchValue}" এর জন্য কোনো ব্লগ পোস্ট খুঁজে পাওয়া যায়নি।
                </p>
              </div>
            )}

            {/* Empty State */}
            {!searchValue && recentSearches.length === 0 && (
              <div className="text-center py-8">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">ব্লগ পোস্ট খুঁজুন</h3>
                <p className="text-muted-foreground">
                  আপনার পছন্দের বিষয় লিখে খুঁজে নিন।
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
