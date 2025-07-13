import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog-data";
import { Bookmark, Calendar, Heart, Share2, Tag, User } from "lucide-react";
import Image from "next/image";
import BackButton from "./back-button";

interface BlogDetailContentProps {
  post: BlogPost;
}

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  return (
    <article className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <BackButton />

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-destructive text-white">{post.category}</Badge>
            <span className="text-sm text-gray-500">
              {post.readTime} পড়ার সময়
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author and Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-y border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="group bg-transparent"
              >
                <Heart className="w-4 h-4 mr-2 group-hover:text-destructive transition-colors" />
                পছন্দ
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="group bg-transparent"
              >
                <Bookmark className="w-4 h-4 mr-2 group-hover:text-blue-500 transition-colors" />
                সংরক্ষণ
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="group bg-transparent"
              >
                <Share2 className="w-4 h-4 mr-2 group-hover:text-green-500 transition-colors" />
                শেয়ার
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <Card className="border-0 shadow-lg mb-12">
          <CardContent className="p-8 lg:p-12">
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Tag className="w-5 h-5 mr-2 text-destructive" />
            ট্যাগসমূহ
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="hover:bg-orange-50 hover:border-orange-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-red-50">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.author}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  একজন অভিজ্ঞ লেখক যিনি ইসলামী বিষয়াদি নিয়ে নিয়মিত লেখালেখি
                  করেন। তার লেখায় রয়েছে গভীর জ্ঞান ও বাস্তব অভিজ্ঞতার সমন্বয়।
                </p>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    আরও লেখা দেখুন
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
